;; Title: BDP000 Unit Tests
;; Author: Mike Cohen
;; Synopsis:
;; sets core team sunset height.

(impl-trait .proposal-trait.proposal-trait)

(define-public (execute (sender principal))
	(begin

		(try! (contract-call? .bde030-ft-swap-manager set-registered-token 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.Wrapped-Bitcoin true))
		(try! (contract-call? .bde030-ft-swap-manager set-registered-token 'SP3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSQP2HGT6.unwrapped-stx-token true))
		(try! (contract-call? .bde030-ft-swap-manager set-registered-token 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.miamicoin-token true))
		(try! (contract-call? .bde030-ft-swap-manager set-registered-token 'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.usda-token true))
		;;(try! (contract-call? .bde030-ft-swap-manager set-registered-token 'SP6P4EJF0VG8V0RB3TQQKJBHDQKEF6NVRD1KZE3C.satoshibles true))
		;;(try! (contract-call? .bde030-ft-swap-manager set-registered-token .btc-monkeys-bananas true))

		(ok true)
	)
)
