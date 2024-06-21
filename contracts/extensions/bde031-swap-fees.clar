;; Title: BDE031 Swap Fees
;; Authors: mijoco
;; Synopsis:
;; Manages the fees associated with sip 9/10 swaps.
;; Description:
;; Based on Friedger's fee contract. The fees are brought under the control
;; of bitcoin-dao.

(use-trait fungible-token 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait)

(define-constant fee-receiver .bde006-treasury)
(define-constant err-unauthorised (err u401))

(define-constant PRECISION u100000) ;; 5 dp
;; coming soon
;; (define-constant pyth-price-feed (contract-of 'SP2T5JKWWP3FYYX4YRK8GK5BG2YCNGEAEY2P2PKN0.pyth-oracle-v2))

;; data vars
;;
(define-data-var fee uint u100000) ;; 1% initially

;; --- authorisation check
(define-public (is-dao-or-extension)
	(ok (asserts! (or (is-eq tx-sender .bitcoin-dao) (contract-call? .bitcoin-dao is-extension contract-caller)) err-unauthorised))
)

;; Dao can set new fee rate - 5dp of precision.
(define-public (set-fee (new-fee uint))
	(begin
		(try! (is-dao-or-extension))
		(ok (var-set fee new-fee))
	)
)

;; Hold fees for the given amount in escrow.
(define-public (hold-fees (token <fungible-token>) (amt uint))
  (let ((fees (calc-fees amt)))
		(try! (is-dao-or-extension))
    (if (> fees u0)
      (amt-transfer-to token fees (as-contract tx-sender) 0x636174616d6172616e2073776170)
      (ok true))))

;; Release fees for the given amount if swap was canceled.
;; It relies on the logic of the charging-ctr that this contract.
(define-public (release-fees (token <fungible-token>) (amt uint))
  (let ((user tx-sender)
        (fees (calc-fees amt)))
		(try! (is-dao-or-extension))
    (if (> fees u0)
      (as-contract (amt-transfer-to token fees user 0x636174616d6172616e2073776170))
      (ok true))))

;; Pay fee for the given amount if swap was executed.
(define-public (pay-fees  (token <fungible-token>) (amt uint))
  (let ((fees (calc-fees amt)))
		(try! (is-dao-or-extension))
    (if (> fees u0)
      (as-contract (amt-transfer-to token fees fee-receiver 0x636174616d6172616e2073776170))
      (ok true))))


;; read only functions
;;
(define-read-only (get-fees (amt uint))
  (ok (calc-fees amt)))


;; private functions
;;
(define-private (amt-transfer-to (token <fungible-token>) (amount uint) (to principal) (memo (buff 34)))
  (contract-call? token transfer amount tx-sender to (some memo))
)

(define-private (calc-fees (amount uint))
  (let (
    (fees (/ (* amount (var-get fee)) (* u100 PRECISION)))
  )
  fees))

;; BTC-USD price identifier: 0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43
;;(define-private (convert-tokenA-to-USDA (tokenA <fungible-token>) (amountA uint))
;;  (let (
;;    (priceA (default-to u0 (contract-call? pyth-price-feed read-price-feed 0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43 'SP2T5JKWWP3FYYX4YRK8GK5BG2YCNGEAEY2P2PKN0.pyth-store-v1)))
;;    (priceUSDA (default-to u0 (contract-call? pyth-price-feed get-price 'USDA)))
;;    (amountUSDA (/ (* amountA priceA) priceUSDA))
;;  )
;;  amountUSDA
;;  )
;;)