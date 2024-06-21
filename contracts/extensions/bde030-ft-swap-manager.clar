;; Title: BDE030 Swap Manager
;; Authors: friedger (then rafa n mike)
;; Synopsis:
;; This extension manages swaps for arbitrary sip-010 tokens.
;; Description:
;; The extension provides a secure way for user to manage the slippage they wish to tolerate.
;; Alice makes an offer for token-a and pays a deposit in stable coin. If the offer is not accepted the
;; deposit expires and Alice claims back her deposit. To accept Alices offer Bob escrows an amount of 
;; token-b - this determines the amount of token-a Alices is required to commit. Alice can either complete
;; the swap or decline, forfeiting her deposit. 

;; traits
;;
(use-trait fees-trait .dao-fees-trait.fees-trait)
(use-trait fungible-token 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait)

;; constants
;;
(define-constant expiry u100)
;;
;; errors
(define-constant err-unauthorised (err u1000))
(define-constant err-inserting-swap-data (err u1001))
(define-constant err-unregistered-token (err u1002))
(define-constant err-unknown-swap (err u1003))
(define-constant err-unknown-fee-trait (err u1004))
(define-constant err-unknown-token-buying (err u1005))
(define-constant err-unknown-token-selling (err u1006))
(define-constant err-swap-not-expired (err u1007))
(define-constant err-swap-is-complete (err u1008))
(define-constant err-not-enough-balance (err u1021))
(define-constant err-sender-is-recipient (err u1022))
(define-constant err-amount-must-be-positive (err u1023))

;; data vars
;;
(define-data-var next-id uint u0)


;; data maps
;;
(define-map swaps uint {
	sender-a: principal, 
	sender-b: (optional principal), 
	amount-a: uint, 
	amount-b: uint, 
	token-a: principal, 
	token-b: principal, 
	when: uint, 
	open: bool, 
	fees: principal
})
(define-map registered-tokens principal bool)


;; public functions
;;

;; --- authorisation check

(define-public (is-dao-or-extension)
	(ok (asserts! (or (is-eq tx-sender .bitcoin-dao) (contract-call? .bitcoin-dao is-extension contract-caller)) err-unauthorised))
)

;; dao functions
(define-public (set-registered-token (token <fungible-token>) (enabled bool))
	(begin
		(try! (is-dao-or-extension))
		(print {event: "token", token: (contract-of token), enabled: enabled})
		(ok (map-set registered-tokens (contract-of token) enabled))
	)
)

;; --- swaps

(define-public (create-swap (amount-a uint) (amount-b uint) (sender-b (optional principal)) (token-a <fungible-token>) (token-b <fungible-token>) (fees <fees-trait>))
  	(let (
		(id (var-get next-id))
	)
		(asserts! (is-registered-token token-a) err-unregistered-token)
		(asserts! (is-registered-token token-b) err-unregistered-token)
		(asserts! (map-insert swaps id {
			sender-a: tx-sender, 
			sender-b: sender-b, 
			amount-a: amount-a, 
			amount-b: amount-b,
			token-a: (contract-of token-a),
			token-b: (contract-of token-b), 
			when: block-height, 
			open: true,  
			fees: (contract-of fees)}) err-inserting-swap-data)
		
		(var-set next-id (+ id u1))
		(try! (contract-call? fees hold-fees token-a amount-a))
		(match (token-transfer-to token-a amount-a (as-contract tx-sender) 0x636174616d6172616e2073776170)
			success (ok id)
			error (err (+ error u1020))
		)
	)
)

;; any user can cancle the swap after the expiry period
(define-public (cancel (id uint) (token <fungible-token>) (fees <fees-trait>))
  	(let (
			(swap (unwrap! (map-get? swaps id) err-unknown-swap))
			(amount-a (get amount-a swap))
			(token-a (get token-a swap))
		)
		(asserts! (is-eq (contract-of token) token-a) err-unknown-token-buying)
		(asserts! (is-eq (contract-of fees) (get fees swap)) err-unknown-fee-trait)
		(asserts! (< (+ (get when swap) expiry) block-height) err-swap-not-expired)
		(asserts! (get open swap) err-swap-is-complete)
		(asserts! (map-set swaps id (merge swap {open: false})) err-inserting-swap-data)
		(try! (contract-call? fees release-fees token amount-a))
		(match (as-contract (xbtc-transfer-to token (get amount-a swap) (get sender-a swap) 0x72657665727420636174616d6172616e2073776170))
			success (ok success)
			error (err (+ error u100))
		)
	)
)

(define-public (submit-swap (id uint) (tokena <fungible-token>) (tokenb <fungible-token>) (fees <fees-trait>))
   	(let 
		(
			(swap (unwrap! (map-get? swaps id) err-unknown-swap))
			(amount-a (get amount-a swap))
			(amount-b (get amount-b swap))
			(sender-a (get sender-a swap))
			(sender-b (default-to tx-sender (get sender-b swap)))
		)
      	(asserts! (get open swap) err-swap-is-complete)
      	(asserts! (is-eq (contract-of tokena) (get token-a swap)) err-unknown-token-buying)
      	(asserts! (is-eq (contract-of tokenb) (get token-b swap)) err-unknown-token-selling)
      	(asserts! (is-eq (contract-of fees) (get fees swap)) err-unknown-fee-trait)
      	(asserts! (map-set swaps id (merge swap {open: false, sender-b: (some sender-b)})) err-inserting-swap-data)
      	(asserts! (is-eq tx-sender sender-b) err-sender-is-recipient)
      	(try! (contract-call? fees pay-fees tokena amount-a))
      	(match 
			(contract-call? tokenb transfer amount-b sender-b sender-a (some 0x636174616d6172616e2073776170))
        		success-sell 
				(begin
            		(asserts! success-sell err-inserting-swap-data)
            		(match (as-contract (xbtc-transfer-to tokena amount-a sender-b 0x636174616d6172616e2073776170))
              			success (ok success)
              			error (err (+ error u1040))))
        		error-ft (err (+ error-ft u1050))
		)
	)
)


;; read only functions
;;
(define-read-only (is-registered-token (token <fungible-token>))
	(default-to false (map-get? registered-tokens (contract-of token)))
)


;; private functions
;;
(define-private (token-transfer-to (token <fungible-token>) (amount uint) (to principal) (memo (buff 34)))
  (contract-call? token transfer amount tx-sender to (some memo)))

(define-private (xbtc-transfer-to (token <fungible-token>) (amount uint) (to principal) (memo (buff 34)))
  (contract-call? token transfer amount tx-sender to (some memo)))

