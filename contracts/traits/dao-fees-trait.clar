(use-trait fungible-token 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait)

(define-trait fees-trait
 ((get-fees (<fungible-token> uint) (response uint uint))
  (hold-fees ( <fungible-token> uint) (response bool uint))
  (release-fees (<fungible-token> uint) (response bool uint))
  (pay-fees (<fungible-token> uint) (response bool uint))))