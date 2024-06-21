;; Implementation of fixed fees of 1% for the service
;; by the charging-ctr. Only that contract can call the public functions.

(use-trait fungible-token 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait)

(define-constant fee-receiver .dao-other-fees)
(define-constant err-unauthorised (err u401))

;; --- authorisation check

(define-public (is-dao-or-extension)
	(ok (asserts! (or (is-eq tx-sender .bitcoin-dao) (contract-call? .bitcoin-dao is-extension contract-caller)) err-unauthorised))
)


;; For information only.
(define-read-only (get-fees (xbtc uint))
  (ok (calc-fees xbtc)))

;; Hold fees for the given amount in escrow.
(define-public (hold-fees (token <fungible-token>) (xbtc uint))
  (let ((fees (calc-fees xbtc)))
		(try! (is-dao-or-extension))
    (if (> fees u0)
      (xbtc-transfer-to token fees (as-contract tx-sender) 0x636174616d6172616e2073776170)
      (ok true))))

;; Release fees for the given amount if swap was canceled.
;; It relies on the logic of the charging-ctr that this contract.
(define-public (release-fees (token <fungible-token>) (xbtc uint))
  (let ((user tx-sender)
        (fees (calc-fees xbtc)))
		(try! (is-dao-or-extension))
    (if (> fees u0)
      (as-contract (xbtc-transfer-to token fees user 0x636174616d6172616e2073776170))
      (ok true))))

;; Pay fee for the given amount if swap was executed.
(define-public (pay-fees  (token <fungible-token>) (xbtc uint))
  (let ((fees (calc-fees xbtc)))
		(try! (is-dao-or-extension))
    (if (> fees u0)
      (as-contract (xbtc-transfer-to token fees fee-receiver 0x636174616d6172616e2073776170))
      (ok true))))

;; helper function to transfer xbtc to a principal with memo
(define-private (xbtc-transfer-to (token <fungible-token>) (amount uint) (to principal) (memo (buff 34)))
  ;;(contract-call? 'SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin
  (contract-call? token
    transfer amount tx-sender to (some memo)))

(define-private (calc-fees (xbtc uint))
  (/ xbtc u100))


