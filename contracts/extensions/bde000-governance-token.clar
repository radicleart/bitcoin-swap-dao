;; Title: BDE000 Governance Token
;; Author: Marvin Janssen
;; Depends-On: 
;; Synopsis:
;; This extension defines the governance token of Bitcoin DAO.
;; Description:
;; The governance token is a simple SIP010-compliant fungible token
;; with some added functions to make it easier to manage by
;; Bitcoin DAO proposals and extensions.

(impl-trait .governance-token-trait.governance-token-trait)
(impl-trait .sip010-ft-trait.sip010-ft-trait)
(impl-trait .extension-trait.extension-trait)

(define-constant err-unauthorised (err u3000))
(define-constant err-not-token-owner (err u4))

(define-fungible-token bdg-token)
(define-fungible-token bdg-token-locked)

(define-data-var token-name (string-ascii 32) "{{token_name}}")
(define-data-var token-symbol (string-ascii 10) "{{symbol}}")
(define-data-var token-uri (optional (string-utf8 256)) (some u"{{token_uri}}"))
(define-data-var token-decimals uint u6)

;; --- Authorisation check

(define-public (is-dao-or-extension)
	(ok (asserts! (or (is-eq tx-sender .bitcoin-dao) (contract-call? .bitcoin-dao is-extension contract-caller)) err-unauthorised))
)

;; --- Internal DAO functions

;; governance-token-trait

(define-public (bdg-transfer (amount uint) (sender principal) (recipient principal))
	(begin
		(try! (is-dao-or-extension))
		(ft-transfer? bdg-token amount sender recipient)
	)
)

(define-public (bdg-lock (amount uint) (owner principal))
	(begin
		(try! (is-dao-or-extension))
		(try! (ft-burn? bdg-token amount owner))
		(ft-mint? bdg-token-locked amount owner)
	)
)

(define-public (bdg-unlock (amount uint) (owner principal))
	(begin
		(try! (is-dao-or-extension))
		(try! (ft-burn? bdg-token-locked amount owner))
		(ft-mint? bdg-token amount owner)
	)
)

(define-public (bdg-mint (amount uint) (recipient principal))
	(begin
		(try! (is-dao-or-extension))
		(ft-mint? bdg-token amount recipient)
	)
)

(define-public (bdg-burn (amount uint) (owner principal))
	(begin
		(try! (is-dao-or-extension))
		(ft-burn? bdg-token amount owner)
		
	)
)

;; Other

(define-public (set-name (new-name (string-ascii 32)))
	(begin
		(try! (is-dao-or-extension))
		(ok (var-set token-name new-name))
	)
)

(define-public (set-symbol (new-symbol (string-ascii 10)))
	(begin
		(try! (is-dao-or-extension))
		(ok (var-set token-symbol new-symbol))
	)
)

(define-public (set-decimals (new-decimals uint))
	(begin
		(try! (is-dao-or-extension))
		(ok (var-set token-decimals new-decimals))
	)
)

(define-public (set-token-uri (new-uri (optional (string-utf8 256))))
	(begin
		(try! (is-dao-or-extension))
		(ok (var-set token-uri new-uri))
	)
)

(define-private (bdg-mint-many-iter (item {amount: uint, recipient: principal}))
	(ft-mint? bdg-token (get amount item) (get recipient item))
)

(define-public (bdg-mint-many (recipients (list 200 {amount: uint, recipient: principal})))
	(begin
		(try! (is-dao-or-extension))
		(ok (map bdg-mint-many-iter recipients))
	)
)

;; --- Public functions

;; sip010-ft-trait

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
	(begin
		(asserts! (or (is-eq tx-sender sender) (is-eq contract-caller sender)) err-not-token-owner)
		(ft-transfer? bdg-token amount sender recipient)
	)
)

(define-read-only (get-name)
	(ok (var-get token-name))
)

(define-read-only (get-symbol)
	(ok (var-get token-symbol))
)

(define-read-only (get-decimals)
	(ok (var-get token-decimals))
)

(define-read-only (get-balance (who principal))
	(ok (+ (ft-get-balance bdg-token who) (ft-get-balance bdg-token-locked who)))
)

(define-read-only (get-total-supply)
	(ok (+ (ft-get-supply bdg-token) (ft-get-supply bdg-token-locked)))
)

(define-read-only (get-token-uri)
	(ok (var-get token-uri))
)

;; governance-token-trait

(define-read-only (bdg-get-balance (who principal))
	(get-balance who)
)

(define-read-only (bdg-has-percentage-balance (who principal) (factor uint))
	(ok (>= (* (unwrap-panic (get-balance who)) factor) (* (unwrap-panic (get-total-supply)) u1000)))
)

(define-read-only (bdg-get-locked (owner principal))
	(ok (ft-get-balance bdg-token-locked owner))
)

;; --- Extension callback

(define-public (callback (sender principal) (memo (buff 34)))
	(ok true)
)
