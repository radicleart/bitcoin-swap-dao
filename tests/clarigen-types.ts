import type {
  TypedAbiArg,
  TypedAbiFunction,
  TypedAbiMap,
  TypedAbiVariable,
  Response,
} from "@clarigen/core";

export const contracts = {
  wrappedBitcoin: {
    functions: {
      addPrincipalToRole: {
        name: "add-principal-to-role",
        access: "public",
        args: [
          { name: "role-to-add", type: "uint128" },
          { name: "principal-to-add", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          roleToAdd: TypedAbiArg<number | bigint, "roleToAdd">,
          principalToAdd: TypedAbiArg<string, "principalToAdd">,
        ],
        Response<boolean, bigint>
      >,
      burnTokens: {
        name: "burn-tokens",
        access: "public",
        args: [
          { name: "burn-amount", type: "uint128" },
          { name: "burn-from", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          burnAmount: TypedAbiArg<number | bigint, "burnAmount">,
          burnFrom: TypedAbiArg<string, "burnFrom">,
        ],
        Response<boolean, bigint>
      >,
      initialize: {
        name: "initialize",
        access: "public",
        args: [
          { name: "name-to-set", type: { "string-ascii": { length: 32 } } },
          { name: "symbol-to-set", type: { "string-ascii": { length: 32 } } },
          { name: "decimals-to-set", type: "uint128" },
          { name: "initial-owner", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          nameToSet: TypedAbiArg<string, "nameToSet">,
          symbolToSet: TypedAbiArg<string, "symbolToSet">,
          decimalsToSet: TypedAbiArg<number | bigint, "decimalsToSet">,
          initialOwner: TypedAbiArg<string, "initialOwner">,
        ],
        Response<boolean, bigint>
      >,
      mintTokens: {
        name: "mint-tokens",
        access: "public",
        args: [
          { name: "mint-amount", type: "uint128" },
          { name: "mint-to", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          mintAmount: TypedAbiArg<number | bigint, "mintAmount">,
          mintTo: TypedAbiArg<string, "mintTo">,
        ],
        Response<boolean, bigint>
      >,
      removePrincipalFromRole: {
        name: "remove-principal-from-role",
        access: "public",
        args: [
          { name: "role-to-remove", type: "uint128" },
          { name: "principal-to-remove", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          roleToRemove: TypedAbiArg<number | bigint, "roleToRemove">,
          principalToRemove: TypedAbiArg<string, "principalToRemove">,
        ],
        Response<boolean, bigint>
      >,
      revokeTokens: {
        name: "revoke-tokens",
        access: "public",
        args: [
          { name: "revoke-amount", type: "uint128" },
          { name: "revoke-from", type: "principal" },
          { name: "revoke-to", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          revokeAmount: TypedAbiArg<number | bigint, "revokeAmount">,
          revokeFrom: TypedAbiArg<string, "revokeFrom">,
          revokeTo: TypedAbiArg<string, "revokeTo">,
        ],
        Response<boolean, bigint>
      >,
      setTokenUri: {
        name: "set-token-uri",
        access: "public",
        args: [
          { name: "updated-uri", type: { "string-utf8": { length: 256 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [updatedUri: TypedAbiArg<string, "updatedUri">],
        Response<boolean, bigint>
      >,
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
        ],
        Response<boolean, bigint>
      >,
      updateBlacklisted: {
        name: "update-blacklisted",
        access: "public",
        args: [
          { name: "principal-to-update", type: "principal" },
          { name: "set-blacklisted", type: "bool" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          principalToUpdate: TypedAbiArg<string, "principalToUpdate">,
          setBlacklisted: TypedAbiArg<boolean, "setBlacklisted">,
        ],
        Response<boolean, bigint>
      >,
      detectTransferRestriction: {
        name: "detect-transfer-restriction",
        access: "read_only",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<bigint, bigint>
      >,
      getBalance: {
        name: "get-balance",
        access: "read_only",
        args: [{ name: "owner", type: "principal" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [owner: TypedAbiArg<string, "owner">],
        Response<bigint, null>
      >,
      getDecimals: {
        name: "get-decimals",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getName: {
        name: "get-name",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 32 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getSymbol: {
        name: "get-symbol",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 32 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getTokenUri: {
        name: "get-token-uri",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: {
              ok: { optional: { "string-utf8": { length: 256 } } },
              error: "none",
            },
          },
        },
      } as TypedAbiFunction<[], Response<string | null, null>>,
      getTotalSupply: {
        name: "get-total-supply",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      hasRole: {
        name: "has-role",
        access: "read_only",
        args: [
          { name: "role-to-check", type: "uint128" },
          { name: "principal-to-check", type: "principal" },
        ],
        outputs: { type: "bool" },
      } as TypedAbiFunction<
        [
          roleToCheck: TypedAbiArg<number | bigint, "roleToCheck">,
          principalToCheck: TypedAbiArg<string, "principalToCheck">,
        ],
        boolean
      >,
      isBlacklisted: {
        name: "is-blacklisted",
        access: "read_only",
        args: [{ name: "principal-to-check", type: "principal" }],
        outputs: { type: "bool" },
      } as TypedAbiFunction<
        [principalToCheck: TypedAbiArg<string, "principalToCheck">],
        boolean
      >,
      messageForRestriction: {
        name: "message-for-restriction",
        access: "read_only",
        args: [{ name: "restriction-code", type: "uint128" }],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 70 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<
        [restrictionCode: TypedAbiArg<number | bigint, "restrictionCode">],
        Response<string, null>
      >,
    },
    maps: {
      blacklist: {
        name: "blacklist",
        key: { tuple: [{ name: "account", type: "principal" }] },
        value: { tuple: [{ name: "blacklisted", type: "bool" }] },
      } as TypedAbiMap<
        {
          account: string;
        },
        {
          blacklisted: boolean;
        }
      >,
      roles: {
        name: "roles",
        key: {
          tuple: [
            { name: "account", type: "principal" },
            { name: "role", type: "uint128" },
          ],
        },
        value: { tuple: [{ name: "allowed", type: "bool" }] },
      } as TypedAbiMap<
        {
          account: string;
          role: number | bigint;
        },
        {
          allowed: boolean;
        }
      >,
    },
    variables: {
      BLACKLISTER_ROLE: {
        name: "BLACKLISTER_ROLE",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      BURNER_ROLE: {
        name: "BURNER_ROLE",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      MINTER_ROLE: {
        name: "MINTER_ROLE",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      OWNER_ROLE: {
        name: "OWNER_ROLE",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      PERMISSION_DENIED_ERROR: {
        name: "PERMISSION_DENIED_ERROR",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      RESTRICTION_BLACKLIST: {
        name: "RESTRICTION_BLACKLIST",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      RESTRICTION_NONE: {
        name: "RESTRICTION_NONE",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      REVOKER_ROLE: {
        name: "REVOKER_ROLE",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      deployerPrincipal: {
        name: "deployer-principal",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
      isInitialized: {
        name: "is-initialized",
        type: "bool",
        access: "variable",
      } as TypedAbiVariable<boolean>,
      tokenDecimals: {
        name: "token-decimals",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      tokenName: {
        name: "token-name",
        type: {
          "string-ascii": {
            length: 32,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
      tokenSymbol: {
        name: "token-symbol",
        type: {
          "string-ascii": {
            length: 32,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
      uri: {
        name: "uri",
        type: {
          "string-utf8": {
            length: 256,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
    },
    constants: {
      BLACKLISTER_ROLE: 4n,
      BURNER_ROLE: 2n,
      MINTER_ROLE: 1n,
      OWNER_ROLE: 0n,
      PERMISSION_DENIED_ERROR: 403n,
      RESTRICTION_BLACKLIST: 5n,
      RESTRICTION_NONE: 0n,
      REVOKER_ROLE: 3n,
      deployerPrincipal: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      isInitialized: false,
      tokenDecimals: 0n,
      tokenName: "",
      tokenSymbol: "",
      uri: "",
    },
    non_fungible_tokens: [],
    fungible_tokens: [{ name: "wrapped-bitcoin" }],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "Wrapped-Bitcoin",
  },
  arkadikoDao: {
    functions: {
      burnToken: {
        name: "burn-token",
        access: "public",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<boolean, bigint>
      >,
      mintToken: {
        name: "mint-token",
        access: "public",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<boolean, bigint>
      >,
      requestDikoTokens: {
        name: "request-diko-tokens",
        access: "public",
        args: [{ name: "collateral-amount", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [collateralAmount: TypedAbiArg<number | bigint, "collateralAmount">],
        Response<boolean, bigint>
      >,
      setContractAddress: {
        name: "set-contract-address",
        access: "public",
        args: [
          { name: "name", type: { "string-ascii": { length: 256 } } },
          { name: "address", type: "principal" },
          { name: "qualified-name", type: "principal" },
          { name: "can-mint", type: "bool" },
          { name: "can-burn", type: "bool" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          name: TypedAbiArg<string, "name">,
          address: TypedAbiArg<string, "address">,
          qualifiedName: TypedAbiArg<string, "qualifiedName">,
          canMint: TypedAbiArg<boolean, "canMint">,
          canBurn: TypedAbiArg<boolean, "canBurn">,
        ],
        Response<boolean, bigint>
      >,
      setDaoOwner: {
        name: "set-dao-owner",
        access: "public",
        args: [{ name: "address", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [address: TypedAbiArg<string, "address">],
        Response<boolean, bigint>
      >,
      setGuardianAddress: {
        name: "set-guardian-address",
        access: "public",
        args: [{ name: "address", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [address: TypedAbiArg<string, "address">],
        Response<boolean, bigint>
      >,
      setPayoutAddress: {
        name: "set-payout-address",
        access: "public",
        args: [{ name: "address", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [address: TypedAbiArg<string, "address">],
        Response<boolean, bigint>
      >,
      toggleEmergencyShutdown: {
        name: "toggle-emergency-shutdown",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      getContractAddressByName: {
        name: "get-contract-address-by-name",
        access: "read_only",
        args: [{ name: "name", type: { "string-ascii": { length: 256 } } }],
        outputs: { type: { optional: "principal" } },
      } as TypedAbiFunction<[name: TypedAbiArg<string, "name">], string | null>,
      getContractCanBurnByQualifiedName: {
        name: "get-contract-can-burn-by-qualified-name",
        access: "read_only",
        args: [{ name: "qualified-name", type: "principal" }],
        outputs: { type: "bool" },
      } as TypedAbiFunction<
        [qualifiedName: TypedAbiArg<string, "qualifiedName">],
        boolean
      >,
      getContractCanMintByQualifiedName: {
        name: "get-contract-can-mint-by-qualified-name",
        access: "read_only",
        args: [{ name: "qualified-name", type: "principal" }],
        outputs: { type: "bool" },
      } as TypedAbiFunction<
        [qualifiedName: TypedAbiArg<string, "qualifiedName">],
        boolean
      >,
      getDaoOwner: {
        name: "get-dao-owner",
        access: "read_only",
        args: [],
        outputs: { type: "principal" },
      } as TypedAbiFunction<[], string>,
      getEmergencyShutdownActivated: {
        name: "get-emergency-shutdown-activated",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "none" } } },
      } as TypedAbiFunction<[], Response<boolean, null>>,
      getGuardianAddress: {
        name: "get-guardian-address",
        access: "read_only",
        args: [],
        outputs: { type: "principal" },
      } as TypedAbiFunction<[], string>,
      getPayoutAddress: {
        name: "get-payout-address",
        access: "read_only",
        args: [],
        outputs: { type: "principal" },
      } as TypedAbiFunction<[], string>,
      getQualifiedNameByName: {
        name: "get-qualified-name-by-name",
        access: "read_only",
        args: [{ name: "name", type: { "string-ascii": { length: 256 } } }],
        outputs: { type: { optional: "principal" } },
      } as TypedAbiFunction<[name: TypedAbiArg<string, "name">], string | null>,
    },
    maps: {
      contracts: {
        name: "contracts",
        key: {
          tuple: [{ name: "name", type: { "string-ascii": { length: 256 } } }],
        },
        value: {
          tuple: [
            { name: "address", type: "principal" },
            { name: "qualified-name", type: "principal" },
          ],
        },
      } as TypedAbiMap<
        {
          name: string;
        },
        {
          address: string;
          qualifiedName: string;
        }
      >,
      contractsData: {
        name: "contracts-data",
        key: { tuple: [{ name: "qualified-name", type: "principal" }] },
        value: {
          tuple: [
            { name: "can-burn", type: "bool" },
            { name: "can-mint", type: "bool" },
          ],
        },
      } as TypedAbiMap<
        {
          qualifiedName: string;
        },
        {
          canBurn: boolean;
          canMint: boolean;
        }
      >,
    },
    variables: {
      ERR_NOT_AUTHORIZED: {
        name: "ERR-NOT-AUTHORIZED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      daoOwner: {
        name: "dao-owner",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
      emergencyShutdownActivated: {
        name: "emergency-shutdown-activated",
        type: "bool",
        access: "variable",
      } as TypedAbiVariable<boolean>,
      guardian: {
        name: "guardian",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
      payoutAddress: {
        name: "payout-address",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
    },
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "arkadiko-dao",
  },
  arkadikoDaoTokenTraitV1: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "arkadiko-dao-token-trait-v1",
  },
  arkadikoToken: {
    functions: {
      burn: {
        name: "burn",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
        ],
        Response<boolean, bigint>
      >,
      burnForDao: {
        name: "burn-for-dao",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
        ],
        Response<boolean, bigint>
      >,
      mintForDao: {
        name: "mint-for-dao",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<boolean, bigint>
      >,
      setContractOwner: {
        name: "set-contract-owner",
        access: "public",
        args: [{ name: "owner", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [owner: TypedAbiArg<string, "owner">],
        Response<boolean, bigint>
      >,
      setTokenUri: {
        name: "set-token-uri",
        access: "public",
        args: [{ name: "value", type: { "string-utf8": { length: 256 } } }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [value: TypedAbiArg<string, "value">],
        Response<boolean, bigint>
      >,
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
        ],
        Response<boolean, bigint>
      >,
      getBalance: {
        name: "get-balance",
        access: "read_only",
        args: [{ name: "account", type: "principal" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [account: TypedAbiArg<string, "account">],
        Response<bigint, null>
      >,
      getDecimals: {
        name: "get-decimals",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getName: {
        name: "get-name",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 14 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getSymbol: {
        name: "get-symbol",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 4 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getTokenUri: {
        name: "get-token-uri",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: {
              ok: { optional: { "string-utf8": { length: 256 } } },
              error: "none",
            },
          },
        },
      } as TypedAbiFunction<[], Response<string | null, null>>,
      getTotalSupply: {
        name: "get-total-supply",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
    },
    maps: {},
    variables: {
      ERR_NOT_AUTHORIZED: {
        name: "ERR-NOT-AUTHORIZED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      contractOwner: {
        name: "contract-owner",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
      tokenUri: {
        name: "token-uri",
        type: {
          "string-utf8": {
            length: 256,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
    },
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [{ name: "diko" }],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "arkadiko-token",
  },
  bde000GovernanceToken: {
    functions: {
      bdgMintManyIter: {
        name: "bdg-mint-many-iter",
        access: "private",
        args: [
          {
            name: "item",
            type: {
              tuple: [
                { name: "amount", type: "uint128" },
                { name: "recipient", type: "principal" },
              ],
            },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          item: TypedAbiArg<
            {
              amount: number | bigint;
              recipient: string;
            },
            "item"
          >,
        ],
        Response<boolean, bigint>
      >,
      bdgBurn: {
        name: "bdg-burn",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "owner", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          owner: TypedAbiArg<string, "owner">,
        ],
        Response<boolean, bigint>
      >,
      bdgLock: {
        name: "bdg-lock",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "owner", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          owner: TypedAbiArg<string, "owner">,
        ],
        Response<boolean, bigint>
      >,
      bdgMint: {
        name: "bdg-mint",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<boolean, bigint>
      >,
      bdgMintMany: {
        name: "bdg-mint-many",
        access: "public",
        args: [
          {
            name: "recipients",
            type: {
              list: {
                type: {
                  tuple: [
                    { name: "amount", type: "uint128" },
                    { name: "recipient", type: "principal" },
                  ],
                },
                length: 200,
              },
            },
          },
        ],
        outputs: {
          type: {
            response: {
              ok: {
                list: {
                  type: { response: { ok: "bool", error: "uint128" } },
                  length: 200,
                },
              },
              error: "uint128",
            },
          },
        },
      } as TypedAbiFunction<
        [
          recipients: TypedAbiArg<
            {
              amount: number | bigint;
              recipient: string;
            }[],
            "recipients"
          >,
        ],
        Response<Response<boolean, bigint>[], bigint>
      >,
      bdgTransfer: {
        name: "bdg-transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<boolean, bigint>
      >,
      bdgUnlock: {
        name: "bdg-unlock",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "owner", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          owner: TypedAbiArg<string, "owner">,
        ],
        Response<boolean, bigint>
      >,
      callback: {
        name: "callback",
        access: "public",
        args: [
          { name: "sender", type: "principal" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "none" } } },
      } as TypedAbiFunction<
        [
          sender: TypedAbiArg<string, "sender">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, null>
      >,
      isDaoOrExtension: {
        name: "is-dao-or-extension",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      setDecimals: {
        name: "set-decimals",
        access: "public",
        args: [{ name: "new-decimals", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [newDecimals: TypedAbiArg<number | bigint, "newDecimals">],
        Response<boolean, bigint>
      >,
      setName: {
        name: "set-name",
        access: "public",
        args: [{ name: "new-name", type: { "string-ascii": { length: 32 } } }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [newName: TypedAbiArg<string, "newName">],
        Response<boolean, bigint>
      >,
      setSymbol: {
        name: "set-symbol",
        access: "public",
        args: [
          { name: "new-symbol", type: { "string-ascii": { length: 10 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [newSymbol: TypedAbiArg<string, "newSymbol">],
        Response<boolean, bigint>
      >,
      setTokenUri: {
        name: "set-token-uri",
        access: "public",
        args: [
          {
            name: "new-uri",
            type: { optional: { "string-utf8": { length: 256 } } },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [newUri: TypedAbiArg<string | null, "newUri">],
        Response<boolean, bigint>
      >,
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
        ],
        Response<boolean, bigint>
      >,
      bdgGetBalance: {
        name: "bdg-get-balance",
        access: "read_only",
        args: [{ name: "who", type: "principal" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [who: TypedAbiArg<string, "who">],
        Response<bigint, null>
      >,
      bdgGetLocked: {
        name: "bdg-get-locked",
        access: "read_only",
        args: [{ name: "owner", type: "principal" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [owner: TypedAbiArg<string, "owner">],
        Response<bigint, null>
      >,
      bdgHasPercentageBalance: {
        name: "bdg-has-percentage-balance",
        access: "read_only",
        args: [
          { name: "who", type: "principal" },
          { name: "factor", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "none" } } },
      } as TypedAbiFunction<
        [
          who: TypedAbiArg<string, "who">,
          factor: TypedAbiArg<number | bigint, "factor">,
        ],
        Response<boolean, null>
      >,
      getBalance: {
        name: "get-balance",
        access: "read_only",
        args: [{ name: "who", type: "principal" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [who: TypedAbiArg<string, "who">],
        Response<bigint, null>
      >,
      getDecimals: {
        name: "get-decimals",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getName: {
        name: "get-name",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 32 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getSymbol: {
        name: "get-symbol",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 10 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getTokenUri: {
        name: "get-token-uri",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: {
              ok: { optional: { "string-utf8": { length: 256 } } },
              error: "none",
            },
          },
        },
      } as TypedAbiFunction<[], Response<string | null, null>>,
      getTotalSupply: {
        name: "get-total-supply",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
    },
    maps: {},
    variables: {
      errNotTokenOwner: {
        name: "err-not-token-owner",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      tokenDecimals: {
        name: "token-decimals",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      tokenName: {
        name: "token-name",
        type: {
          "string-ascii": {
            length: 32,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
      tokenSymbol: {
        name: "token-symbol",
        type: {
          "string-ascii": {
            length: 10,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
      tokenUri: {
        name: "token-uri",
        type: {
          optional: {
            "string-utf8": {
              length: 256,
            },
          },
        },
        access: "variable",
      } as TypedAbiVariable<string | null>,
    },
    constants: {
      errNotTokenOwner: {
        isOk: false,
        value: 4n,
      },
      errUnauthorised: {
        isOk: false,
        value: 3_000n,
      },
      tokenDecimals: 6n,
      tokenName: "{{token_name}}",
      tokenSymbol: "{{symbol}}",
      tokenUri: "{{token_uri}}",
    },
    non_fungible_tokens: [],
    fungible_tokens: [{ name: "bdg-token" }, { name: "bdg-token-locked" }],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bde000-governance-token",
  },
  bde001ProposalVoting: {
    functions: {
      isGovernanceToken: {
        name: "is-governance-token",
        access: "private",
        args: [{ name: "governance-token", type: "trait_reference" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [governanceToken: TypedAbiArg<string, "governanceToken">],
        Response<boolean, bigint>
      >,
      addProposal: {
        name: "add-proposal",
        access: "public",
        args: [
          { name: "proposal", type: "trait_reference" },
          {
            name: "data",
            type: {
              tuple: [
                { name: "end-block-height", type: "uint128" },
                { name: "proposer", type: "principal" },
                { name: "start-block-height", type: "uint128" },
              ],
            },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          proposal: TypedAbiArg<string, "proposal">,
          data: TypedAbiArg<
            {
              endBlockHeight: number | bigint;
              proposer: string;
              startBlockHeight: number | bigint;
            },
            "data"
          >,
        ],
        Response<boolean, bigint>
      >,
      callback: {
        name: "callback",
        access: "public",
        args: [
          { name: "sender", type: "principal" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "none" } } },
      } as TypedAbiFunction<
        [
          sender: TypedAbiArg<string, "sender">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, null>
      >,
      conclude: {
        name: "conclude",
        access: "public",
        args: [{ name: "proposal", type: "trait_reference" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [proposal: TypedAbiArg<string, "proposal">],
        Response<boolean, bigint>
      >,
      isDaoOrExtension: {
        name: "is-dao-or-extension",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      reclaimAndVote: {
        name: "reclaim-and-vote",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "for", type: "bool" },
          { name: "proposal", type: "principal" },
          { name: "reclaim-from", type: "trait_reference" },
          { name: "governance-token", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          _for: TypedAbiArg<boolean, "_for">,
          proposal: TypedAbiArg<string, "proposal">,
          reclaimFrom: TypedAbiArg<string, "reclaimFrom">,
          governanceToken: TypedAbiArg<string, "governanceToken">,
        ],
        Response<boolean, bigint>
      >,
      reclaimVotes: {
        name: "reclaim-votes",
        access: "public",
        args: [
          { name: "proposal", type: "trait_reference" },
          { name: "governance-token", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          proposal: TypedAbiArg<string, "proposal">,
          governanceToken: TypedAbiArg<string, "governanceToken">,
        ],
        Response<boolean, bigint>
      >,
      setGovernanceToken: {
        name: "set-governance-token",
        access: "public",
        args: [{ name: "governance-token", type: "trait_reference" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [governanceToken: TypedAbiArg<string, "governanceToken">],
        Response<boolean, bigint>
      >,
      vote: {
        name: "vote",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "for", type: "bool" },
          { name: "proposal", type: "principal" },
          { name: "governance-token", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          _for: TypedAbiArg<boolean, "_for">,
          proposal: TypedAbiArg<string, "proposal">,
          governanceToken: TypedAbiArg<string, "governanceToken">,
        ],
        Response<boolean, bigint>
      >,
      getCurrentTotalVotes: {
        name: "get-current-total-votes",
        access: "read_only",
        args: [
          { name: "proposal", type: "principal" },
          { name: "voter", type: "principal" },
          { name: "governance-token", type: "principal" },
        ],
        outputs: { type: "uint128" },
      } as TypedAbiFunction<
        [
          proposal: TypedAbiArg<string, "proposal">,
          voter: TypedAbiArg<string, "voter">,
          governanceToken: TypedAbiArg<string, "governanceToken">,
        ],
        bigint
      >,
      getGovernanceToken: {
        name: "get-governance-token",
        access: "read_only",
        args: [],
        outputs: { type: "principal" },
      } as TypedAbiFunction<[], string>,
      getProposalData: {
        name: "get-proposal-data",
        access: "read_only",
        args: [{ name: "proposal", type: "principal" }],
        outputs: {
          type: {
            optional: {
              tuple: [
                { name: "concluded", type: "bool" },
                { name: "end-block-height", type: "uint128" },
                { name: "passed", type: "bool" },
                { name: "proposer", type: "principal" },
                { name: "start-block-height", type: "uint128" },
                { name: "votes-against", type: "uint128" },
                { name: "votes-for", type: "uint128" },
              ],
            },
          },
        },
      } as TypedAbiFunction<
        [proposal: TypedAbiArg<string, "proposal">],
        {
          concluded: boolean;
          endBlockHeight: bigint;
          passed: boolean;
          proposer: string;
          startBlockHeight: bigint;
          votesAgainst: bigint;
          votesFor: bigint;
        } | null
      >,
    },
    maps: {
      memberTotalVotes: {
        name: "member-total-votes",
        key: {
          tuple: [
            { name: "governance-token", type: "principal" },
            { name: "proposal", type: "principal" },
            { name: "voter", type: "principal" },
          ],
        },
        value: "uint128",
      } as TypedAbiMap<
        {
          governanceToken: string;
          proposal: string;
          voter: string;
        },
        bigint
      >,
      proposals: {
        name: "proposals",
        key: "principal",
        value: {
          tuple: [
            { name: "concluded", type: "bool" },
            { name: "end-block-height", type: "uint128" },
            { name: "passed", type: "bool" },
            { name: "proposer", type: "principal" },
            { name: "start-block-height", type: "uint128" },
            { name: "votes-against", type: "uint128" },
            { name: "votes-for", type: "uint128" },
          ],
        },
      } as TypedAbiMap<
        string,
        {
          concluded: boolean;
          endBlockHeight: bigint;
          passed: boolean;
          proposer: string;
          startBlockHeight: bigint;
          votesAgainst: bigint;
          votesFor: bigint;
        }
      >,
    },
    variables: {
      errDisabled: {
        name: "err-disabled",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errEndBlockHeightNotReached: {
        name: "err-end-block-height-not-reached",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errNoVotesToReturn: {
        name: "err-no-votes-to-return",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errNotGovernanceToken: {
        name: "err-not-governance-token",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errProposalAlreadyConcluded: {
        name: "err-proposal-already-concluded",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errProposalAlreadyExecuted: {
        name: "err-proposal-already-executed",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errProposalAlreadyExists: {
        name: "err-proposal-already-exists",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errProposalInactive: {
        name: "err-proposal-inactive",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errProposalNotConcluded: {
        name: "err-proposal-not-concluded",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnknownProposal: {
        name: "err-unknown-proposal",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      governanceTokenPrincipal: {
        name: "governance-token-principal",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
    },
    constants: {
      errDisabled: {
        isOk: false,
        value: 3_110n,
      },
      errEndBlockHeightNotReached: {
        isOk: false,
        value: 3_109n,
      },
      errNoVotesToReturn: {
        isOk: false,
        value: 3_108n,
      },
      errNotGovernanceToken: {
        isOk: false,
        value: 3_101n,
      },
      errProposalAlreadyConcluded: {
        isOk: false,
        value: 3_105n,
      },
      errProposalAlreadyExecuted: {
        isOk: false,
        value: 3_102n,
      },
      errProposalAlreadyExists: {
        isOk: false,
        value: 3_103n,
      },
      errProposalInactive: {
        isOk: false,
        value: 3_106n,
      },
      errProposalNotConcluded: {
        isOk: false,
        value: 3_107n,
      },
      errUnauthorised: {
        isOk: false,
        value: 3_100n,
      },
      errUnknownProposal: {
        isOk: false,
        value: 3_104n,
      },
      governanceTokenPrincipal:
        "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde000-governance-token",
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bde001-proposal-voting",
  },
  bde002ProposalSubmission: {
    functions: {
      isGovernanceToken: {
        name: "is-governance-token",
        access: "private",
        args: [{ name: "governance-token", type: "trait_reference" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [governanceToken: TypedAbiArg<string, "governanceToken">],
        Response<boolean, bigint>
      >,
      setParametersIter: {
        name: "set-parameters-iter",
        access: "private",
        args: [
          {
            name: "item",
            type: {
              tuple: [
                { name: "parameter", type: { "string-ascii": { length: 34 } } },
                { name: "value", type: "uint128" },
              ],
            },
          },
          {
            name: "previous",
            type: { response: { ok: "bool", error: "uint128" } },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          item: TypedAbiArg<
            {
              parameter: string;
              value: number | bigint;
            },
            "item"
          >,
          previous: TypedAbiArg<Response<boolean, number | bigint>, "previous">,
        ],
        Response<boolean, bigint>
      >,
      callback: {
        name: "callback",
        access: "public",
        args: [
          { name: "sender", type: "principal" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "none" } } },
      } as TypedAbiFunction<
        [
          sender: TypedAbiArg<string, "sender">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, null>
      >,
      isDaoOrExtension: {
        name: "is-dao-or-extension",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      propose: {
        name: "propose",
        access: "public",
        args: [
          { name: "proposal", type: "trait_reference" },
          { name: "start-block-height", type: "uint128" },
          { name: "governance-token", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          proposal: TypedAbiArg<string, "proposal">,
          startBlockHeight: TypedAbiArg<number | bigint, "startBlockHeight">,
          governanceToken: TypedAbiArg<string, "governanceToken">,
        ],
        Response<boolean, bigint>
      >,
      setGovernanceToken: {
        name: "set-governance-token",
        access: "public",
        args: [{ name: "governance-token", type: "trait_reference" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [governanceToken: TypedAbiArg<string, "governanceToken">],
        Response<boolean, bigint>
      >,
      setParameter: {
        name: "set-parameter",
        access: "public",
        args: [
          { name: "parameter", type: { "string-ascii": { length: 34 } } },
          { name: "value", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          parameter: TypedAbiArg<string, "parameter">,
          value: TypedAbiArg<number | bigint, "value">,
        ],
        Response<boolean, bigint>
      >,
      setParameters: {
        name: "set-parameters",
        access: "public",
        args: [
          {
            name: "parameter-list",
            type: {
              list: {
                type: {
                  tuple: [
                    {
                      name: "parameter",
                      type: { "string-ascii": { length: 34 } },
                    },
                    { name: "value", type: "uint128" },
                  ],
                },
                length: 200,
              },
            },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          parameterList: TypedAbiArg<
            {
              parameter: string;
              value: number | bigint;
            }[],
            "parameterList"
          >,
        ],
        Response<boolean, bigint>
      >,
      getGovernanceToken: {
        name: "get-governance-token",
        access: "read_only",
        args: [],
        outputs: { type: "principal" },
      } as TypedAbiFunction<[], string>,
      getParameter: {
        name: "get-parameter",
        access: "read_only",
        args: [{ name: "parameter", type: { "string-ascii": { length: 34 } } }],
        outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
      } as TypedAbiFunction<
        [parameter: TypedAbiArg<string, "parameter">],
        Response<bigint, bigint>
      >,
    },
    maps: {
      parameters: {
        name: "parameters",
        key: { "string-ascii": { length: 34 } },
        value: "uint128",
      } as TypedAbiMap<string, bigint>,
    },
    variables: {
      errInsufficientBalance: {
        name: "err-insufficient-balance",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errNotGovernanceToken: {
        name: "err-not-governance-token",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errProposalMaximumStartDelay: {
        name: "err-proposal-maximum-start-delay",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errProposalMinimumStartDelay: {
        name: "err-proposal-minimum-start-delay",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnknownParameter: {
        name: "err-unknown-parameter",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      governanceTokenPrincipal: {
        name: "governance-token-principal",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
    },
    constants: {
      errInsufficientBalance: {
        isOk: false,
        value: 3_102n,
      },
      errNotGovernanceToken: {
        isOk: false,
        value: 3_101n,
      },
      errProposalMaximumStartDelay: {
        isOk: false,
        value: 3_105n,
      },
      errProposalMinimumStartDelay: {
        isOk: false,
        value: 3_104n,
      },
      errUnauthorised: {
        isOk: false,
        value: 3_100n,
      },
      errUnknownParameter: {
        isOk: false,
        value: 3_103n,
      },
      governanceTokenPrincipal:
        "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde000-governance-token",
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bde002-proposal-submission",
  },
  bde003CoreProposals: {
    functions: {
      callback: {
        name: "callback",
        access: "public",
        args: [
          { name: "sender", type: "principal" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "none" } } },
      } as TypedAbiFunction<
        [
          sender: TypedAbiArg<string, "sender">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, null>
      >,
      corePropose: {
        name: "core-propose",
        access: "public",
        args: [{ name: "proposal", type: "trait_reference" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [proposal: TypedAbiArg<string, "proposal">],
        Response<boolean, bigint>
      >,
      isDaoOrExtension: {
        name: "is-dao-or-extension",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      setCoreProposalDuration: {
        name: "set-core-proposal-duration",
        access: "public",
        args: [{ name: "duration", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [duration: TypedAbiArg<number | bigint, "duration">],
        Response<boolean, bigint>
      >,
      setCoreTeamMember: {
        name: "set-core-team-member",
        access: "public",
        args: [
          { name: "who", type: "principal" },
          { name: "member", type: "bool" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          who: TypedAbiArg<string, "who">,
          member: TypedAbiArg<boolean, "member">,
        ],
        Response<boolean, bigint>
      >,
      setCoreTeamSunsetHeight: {
        name: "set-core-team-sunset-height",
        access: "public",
        args: [{ name: "height", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [height: TypedAbiArg<number | bigint, "height">],
        Response<boolean, bigint>
      >,
      isCoreTeamMember: {
        name: "is-core-team-member",
        access: "read_only",
        args: [{ name: "who", type: "principal" }],
        outputs: { type: "bool" },
      } as TypedAbiFunction<[who: TypedAbiArg<string, "who">], boolean>,
    },
    maps: {
      coreTeam: {
        name: "core-team",
        key: "principal",
        value: "bool",
      } as TypedAbiMap<string, boolean>,
    },
    variables: {
      errNotCoreTeamMember: {
        name: "err-not-core-team-member",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errSunsetHeightInPast: {
        name: "err-sunset-height-in-past",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errSunsetHeightReached: {
        name: "err-sunset-height-reached",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      coreProposalDuration: {
        name: "core-proposal-duration",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      coreTeamSunsetHeight: {
        name: "core-team-sunset-height",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
    },
    constants: {
      coreProposalDuration: 144n,
      coreTeamSunsetHeight: 0n,
      errNotCoreTeamMember: {
        isOk: false,
        value: 3_301n,
      },
      errSunsetHeightInPast: {
        isOk: false,
        value: 3_303n,
      },
      errSunsetHeightReached: {
        isOk: false,
        value: 3_302n,
      },
      errUnauthorised: {
        isOk: false,
        value: 3_300n,
      },
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bde003-core-proposals",
  },
  bde004CoreExecute: {
    functions: {
      callback: {
        name: "callback",
        access: "public",
        args: [
          { name: "sender", type: "principal" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "none" } } },
      } as TypedAbiFunction<
        [
          sender: TypedAbiArg<string, "sender">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, null>
      >,
      executiveAction: {
        name: "executive-action",
        access: "public",
        args: [{ name: "proposal", type: "trait_reference" }],
        outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
      } as TypedAbiFunction<
        [proposal: TypedAbiArg<string, "proposal">],
        Response<bigint, bigint>
      >,
      isDaoOrExtension: {
        name: "is-dao-or-extension",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      setExecutiveTeamMember: {
        name: "set-executive-team-member",
        access: "public",
        args: [
          { name: "who", type: "principal" },
          { name: "member", type: "bool" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          who: TypedAbiArg<string, "who">,
          member: TypedAbiArg<boolean, "member">,
        ],
        Response<boolean, bigint>
      >,
      setExecutiveTeamSunsetHeight: {
        name: "set-executive-team-sunset-height",
        access: "public",
        args: [{ name: "height", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [height: TypedAbiArg<number | bigint, "height">],
        Response<boolean, bigint>
      >,
      setSignalsRequired: {
        name: "set-signals-required",
        access: "public",
        args: [{ name: "new-requirement", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [newRequirement: TypedAbiArg<number | bigint, "newRequirement">],
        Response<boolean, bigint>
      >,
      getSignals: {
        name: "get-signals",
        access: "read_only",
        args: [{ name: "proposal", type: "principal" }],
        outputs: { type: "uint128" },
      } as TypedAbiFunction<
        [proposal: TypedAbiArg<string, "proposal">],
        bigint
      >,
      getSignalsRequired: {
        name: "get-signals-required",
        access: "read_only",
        args: [],
        outputs: { type: "uint128" },
      } as TypedAbiFunction<[], bigint>,
      hasSignalled: {
        name: "has-signalled",
        access: "read_only",
        args: [
          { name: "proposal", type: "principal" },
          { name: "who", type: "principal" },
        ],
        outputs: { type: "bool" },
      } as TypedAbiFunction<
        [
          proposal: TypedAbiArg<string, "proposal">,
          who: TypedAbiArg<string, "who">,
        ],
        boolean
      >,
      isExecutiveTeamMember: {
        name: "is-executive-team-member",
        access: "read_only",
        args: [{ name: "who", type: "principal" }],
        outputs: { type: "bool" },
      } as TypedAbiFunction<[who: TypedAbiArg<string, "who">], boolean>,
    },
    maps: {
      executiveActionSignalCount: {
        name: "executive-action-signal-count",
        key: "principal",
        value: "uint128",
      } as TypedAbiMap<string, bigint>,
      executiveActionSignals: {
        name: "executive-action-signals",
        key: {
          tuple: [
            { name: "proposal", type: "principal" },
            { name: "team-member", type: "principal" },
          ],
        },
        value: "bool",
      } as TypedAbiMap<
        {
          proposal: string;
          teamMember: string;
        },
        boolean
      >,
      executiveTeam: {
        name: "executive-team",
        key: "principal",
        value: "bool",
      } as TypedAbiMap<string, boolean>,
    },
    variables: {
      errAlreadyExecuted: {
        name: "err-already-executed",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errNotExecutiveTeamMember: {
        name: "err-not-executive-team-member",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errSunsetHeightInPast: {
        name: "err-sunset-height-in-past",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errSunsetHeightReached: {
        name: "err-sunset-height-reached",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      executiveSignalsRequired: {
        name: "executive-signals-required",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      executiveTeamSunsetHeight: {
        name: "executive-team-sunset-height",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
    },
    constants: {
      errAlreadyExecuted: {
        isOk: false,
        value: 3_402n,
      },
      errNotExecutiveTeamMember: {
        isOk: false,
        value: 3_401n,
      },
      errSunsetHeightInPast: {
        isOk: false,
        value: 3_404n,
      },
      errSunsetHeightReached: {
        isOk: false,
        value: 3_403n,
      },
      errUnauthorised: {
        isOk: false,
        value: 3_400n,
      },
      executiveSignalsRequired: 1n,
      executiveTeamSunsetHeight: 0n,
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bde004-core-execute",
  },
  bde006Treasury: {
    functions: {
      sip009TransferManyIter: {
        name: "sip009-transfer-many-iter",
        access: "private",
        args: [
          {
            name: "data",
            type: {
              tuple: [
                { name: "recipient", type: "principal" },
                { name: "token-id", type: "uint128" },
              ],
            },
          },
          { name: "asset", type: "trait_reference" },
        ],
        outputs: { type: "trait_reference" },
      } as TypedAbiFunction<
        [
          data: TypedAbiArg<
            {
              recipient: string;
              tokenId: number | bigint;
            },
            "data"
          >,
          asset: TypedAbiArg<string, "asset">,
        ],
        string
      >,
      sip010TransferManyIter: {
        name: "sip010-transfer-many-iter",
        access: "private",
        args: [
          {
            name: "data",
            type: {
              tuple: [
                { name: "amount", type: "uint128" },
                {
                  name: "memo",
                  type: { optional: { buffer: { length: 34 } } },
                },
                { name: "recipient", type: "principal" },
              ],
            },
          },
          { name: "asset", type: "trait_reference" },
        ],
        outputs: { type: "trait_reference" },
      } as TypedAbiFunction<
        [
          data: TypedAbiArg<
            {
              amount: number | bigint;
              memo: Uint8Array | null;
              recipient: string;
            },
            "data"
          >,
          asset: TypedAbiArg<string, "asset">,
        ],
        string
      >,
      stxTransferManyIter: {
        name: "stx-transfer-many-iter",
        access: "private",
        args: [
          {
            name: "data",
            type: {
              tuple: [
                { name: "amount", type: "uint128" },
                {
                  name: "memo",
                  type: { optional: { buffer: { length: 34 } } },
                },
                { name: "recipient", type: "principal" },
              ],
            },
          },
          {
            name: "previous-result",
            type: { response: { ok: "bool", error: "uint128" } },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          data: TypedAbiArg<
            {
              amount: number | bigint;
              memo: Uint8Array | null;
              recipient: string;
            },
            "data"
          >,
          previousResult: TypedAbiArg<
            Response<boolean, number | bigint>,
            "previousResult"
          >,
        ],
        Response<boolean, bigint>
      >,
      callback: {
        name: "callback",
        access: "public",
        args: [
          { name: "sender", type: "principal" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "none" } } },
      } as TypedAbiFunction<
        [
          sender: TypedAbiArg<string, "sender">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, null>
      >,
      isDaoOrExtension: {
        name: "is-dao-or-extension",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      sip009Transfer: {
        name: "sip009-transfer",
        access: "public",
        args: [
          { name: "token-id", type: "uint128" },
          { name: "recipient", type: "principal" },
          { name: "asset", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          tokenId: TypedAbiArg<number | bigint, "tokenId">,
          recipient: TypedAbiArg<string, "recipient">,
          asset: TypedAbiArg<string, "asset">,
        ],
        Response<boolean, bigint>
      >,
      sip009TransferMany: {
        name: "sip009-transfer-many",
        access: "public",
        args: [
          {
            name: "data",
            type: {
              list: {
                type: {
                  tuple: [
                    { name: "recipient", type: "principal" },
                    { name: "token-id", type: "uint128" },
                  ],
                },
                length: 200,
              },
            },
          },
          { name: "asset", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "none" } } },
      } as TypedAbiFunction<
        [
          data: TypedAbiArg<
            {
              recipient: string;
              tokenId: number | bigint;
            }[],
            "data"
          >,
          asset: TypedAbiArg<string, "asset">,
        ],
        Response<boolean, null>
      >,
      sip010Transfer: {
        name: "sip010-transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
          { name: "asset", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
          asset: TypedAbiArg<string, "asset">,
        ],
        Response<boolean, bigint>
      >,
      sip010TransferMany: {
        name: "sip010-transfer-many",
        access: "public",
        args: [
          {
            name: "data",
            type: {
              list: {
                type: {
                  tuple: [
                    { name: "amount", type: "uint128" },
                    {
                      name: "memo",
                      type: { optional: { buffer: { length: 34 } } },
                    },
                    { name: "recipient", type: "principal" },
                  ],
                },
                length: 200,
              },
            },
          },
          { name: "asset", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "none" } } },
      } as TypedAbiFunction<
        [
          data: TypedAbiArg<
            {
              amount: number | bigint;
              memo: Uint8Array | null;
              recipient: string;
            }[],
            "data"
          >,
          asset: TypedAbiArg<string, "asset">,
        ],
        Response<boolean, null>
      >,
      sip013Transfer: {
        name: "sip013-transfer",
        access: "public",
        args: [
          { name: "token-id", type: "uint128" },
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
          { name: "asset", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          tokenId: TypedAbiArg<number | bigint, "tokenId">,
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
          asset: TypedAbiArg<string, "asset">,
        ],
        Response<boolean, bigint>
      >,
      sip013TransferMany: {
        name: "sip013-transfer-many",
        access: "public",
        args: [
          {
            name: "transfers",
            type: {
              list: {
                type: {
                  tuple: [
                    { name: "amount", type: "uint128" },
                    { name: "recipient", type: "principal" },
                    { name: "sender", type: "principal" },
                    { name: "token-id", type: "uint128" },
                  ],
                },
                length: 200,
              },
            },
          },
          { name: "asset", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          transfers: TypedAbiArg<
            {
              amount: number | bigint;
              recipient: string;
              sender: string;
              tokenId: number | bigint;
            }[],
            "transfers"
          >,
          asset: TypedAbiArg<string, "asset">,
        ],
        Response<boolean, bigint>
      >,
      sip013TransferManyMemo: {
        name: "sip013-transfer-many-memo",
        access: "public",
        args: [
          {
            name: "transfers",
            type: {
              list: {
                type: {
                  tuple: [
                    { name: "amount", type: "uint128" },
                    { name: "memo", type: { buffer: { length: 34 } } },
                    { name: "recipient", type: "principal" },
                    { name: "sender", type: "principal" },
                    { name: "token-id", type: "uint128" },
                  ],
                },
                length: 200,
              },
            },
          },
          { name: "asset", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          transfers: TypedAbiArg<
            {
              amount: number | bigint;
              memo: Uint8Array;
              recipient: string;
              sender: string;
              tokenId: number | bigint;
            }[],
            "transfers"
          >,
          asset: TypedAbiArg<string, "asset">,
        ],
        Response<boolean, bigint>
      >,
      stxTransfer: {
        name: "stx-transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
        ],
        Response<boolean, bigint>
      >,
      stxTransferMany: {
        name: "stx-transfer-many",
        access: "public",
        args: [
          {
            name: "transfers",
            type: {
              list: {
                type: {
                  tuple: [
                    { name: "amount", type: "uint128" },
                    {
                      name: "memo",
                      type: { optional: { buffer: { length: 34 } } },
                    },
                    { name: "recipient", type: "principal" },
                  ],
                },
                length: 200,
              },
            },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          transfers: TypedAbiArg<
            {
              amount: number | bigint;
              memo: Uint8Array | null;
              recipient: string;
            }[],
            "transfers"
          >,
        ],
        Response<boolean, bigint>
      >,
    },
    maps: {},
    variables: {
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
    },
    constants: {
      errUnauthorised: {
        isOk: false,
        value: 3_000n,
      },
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bde006-treasury",
  },
  bde030FtSwapManager: {
    functions: {
      tokenTransferTo: {
        name: "token-transfer-to",
        access: "private",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "amount", type: "uint128" },
          { name: "to", type: "principal" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          amount: TypedAbiArg<number | bigint, "amount">,
          to: TypedAbiArg<string, "to">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, bigint>
      >,
      xbtcTransferTo: {
        name: "xbtc-transfer-to",
        access: "private",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "amount", type: "uint128" },
          { name: "to", type: "principal" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          amount: TypedAbiArg<number | bigint, "amount">,
          to: TypedAbiArg<string, "to">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, bigint>
      >,
      cancel: {
        name: "cancel",
        access: "public",
        args: [
          { name: "id", type: "uint128" },
          { name: "token", type: "trait_reference" },
          { name: "fees", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          id: TypedAbiArg<number | bigint, "id">,
          token: TypedAbiArg<string, "token">,
          fees: TypedAbiArg<string, "fees">,
        ],
        Response<boolean, bigint>
      >,
      createSwap: {
        name: "create-swap",
        access: "public",
        args: [
          { name: "amount-a", type: "uint128" },
          { name: "amount-b", type: "uint128" },
          { name: "sender-b", type: { optional: "principal" } },
          { name: "token-a", type: "trait_reference" },
          { name: "token-b", type: "trait_reference" },
          { name: "fees", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "uint128", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amountA: TypedAbiArg<number | bigint, "amountA">,
          amountB: TypedAbiArg<number | bigint, "amountB">,
          senderB: TypedAbiArg<string | null, "senderB">,
          tokenA: TypedAbiArg<string, "tokenA">,
          tokenB: TypedAbiArg<string, "tokenB">,
          fees: TypedAbiArg<string, "fees">,
        ],
        Response<bigint, bigint>
      >,
      isDaoOrExtension: {
        name: "is-dao-or-extension",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      setRegisteredToken: {
        name: "set-registered-token",
        access: "public",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "enabled", type: "bool" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          enabled: TypedAbiArg<boolean, "enabled">,
        ],
        Response<boolean, bigint>
      >,
      submitSwap: {
        name: "submit-swap",
        access: "public",
        args: [
          { name: "id", type: "uint128" },
          { name: "tokena", type: "trait_reference" },
          { name: "tokenb", type: "trait_reference" },
          { name: "fees", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          id: TypedAbiArg<number | bigint, "id">,
          tokena: TypedAbiArg<string, "tokena">,
          tokenb: TypedAbiArg<string, "tokenb">,
          fees: TypedAbiArg<string, "fees">,
        ],
        Response<boolean, bigint>
      >,
      isRegisteredToken: {
        name: "is-registered-token",
        access: "read_only",
        args: [{ name: "token", type: "trait_reference" }],
        outputs: { type: "bool" },
      } as TypedAbiFunction<[token: TypedAbiArg<string, "token">], boolean>,
    },
    maps: {
      registeredTokens: {
        name: "registered-tokens",
        key: "principal",
        value: "bool",
      } as TypedAbiMap<string, boolean>,
      swaps: {
        name: "swaps",
        key: "uint128",
        value: {
          tuple: [
            { name: "amount-a", type: "uint128" },
            { name: "amount-b", type: "uint128" },
            { name: "fees", type: "principal" },
            { name: "open", type: "bool" },
            { name: "sender-a", type: "principal" },
            { name: "sender-b", type: { optional: "principal" } },
            { name: "token-a", type: "principal" },
            { name: "token-b", type: "principal" },
            { name: "when", type: "uint128" },
          ],
        },
      } as TypedAbiMap<
        number | bigint,
        {
          amountA: bigint;
          amountB: bigint;
          fees: string;
          open: boolean;
          senderA: string;
          senderB: string | null;
          tokenA: string;
          tokenB: string;
          when: bigint;
        }
      >,
    },
    variables: {
      errAmountMustBePositive: {
        name: "err-amount-must-be-positive",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errInsertingSwapData: {
        name: "err-inserting-swap-data",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errNotEnoughBalance: {
        name: "err-not-enough-balance",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errSenderIsRecipient: {
        name: "err-sender-is-recipient",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errSwapIsComplete: {
        name: "err-swap-is-complete",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errSwapNotExpired: {
        name: "err-swap-not-expired",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnknownFeeTrait: {
        name: "err-unknown-fee-trait",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnknownSwap: {
        name: "err-unknown-swap",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnknownTokenBuying: {
        name: "err-unknown-token-buying",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnknownTokenSelling: {
        name: "err-unknown-token-selling",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnregisteredToken: {
        name: "err-unregistered-token",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      expiry: {
        name: "expiry",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      nextId: {
        name: "next-id",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
    },
    constants: {
      errAmountMustBePositive: {
        isOk: false,
        value: 1_023n,
      },
      errInsertingSwapData: {
        isOk: false,
        value: 1_001n,
      },
      errNotEnoughBalance: {
        isOk: false,
        value: 1_021n,
      },
      errSenderIsRecipient: {
        isOk: false,
        value: 1_022n,
      },
      errSwapIsComplete: {
        isOk: false,
        value: 1_008n,
      },
      errSwapNotExpired: {
        isOk: false,
        value: 1_007n,
      },
      errUnauthorised: {
        isOk: false,
        value: 1_000n,
      },
      errUnknownFeeTrait: {
        isOk: false,
        value: 1_004n,
      },
      errUnknownSwap: {
        isOk: false,
        value: 1_003n,
      },
      errUnknownTokenBuying: {
        isOk: false,
        value: 1_005n,
      },
      errUnknownTokenSelling: {
        isOk: false,
        value: 1_006n,
      },
      errUnregisteredToken: {
        isOk: false,
        value: 1_002n,
      },
      expiry: 100n,
      nextId: 0n,
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bde030-ft-swap-manager",
  },
  bdp000Bootstrap: {
    functions: {
      execute: {
        name: "execute",
        access: "public",
        args: [{ name: "sender", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [sender: TypedAbiArg<string, "sender">],
        Response<boolean, bigint>
      >,
    },
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bdp000-bootstrap",
  },
  bdp000CoreTeamSunsetHeight: {
    functions: {
      execute: {
        name: "execute",
        access: "public",
        args: [{ name: "sender", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [sender: TypedAbiArg<string, "sender">],
        Response<boolean, bigint>
      >,
    },
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bdp000-core-team-sunset-height",
  },
  bdp000ExecutiveTeamSunsetHeight: {
    functions: {
      execute: {
        name: "execute",
        access: "public",
        args: [{ name: "sender", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [sender: TypedAbiArg<string, "sender">],
        Response<boolean, bigint>
      >,
    },
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bdp000-executive-team-sunset-height",
  },
  bdp000RegisterTokenContracts: {
    functions: {
      execute: {
        name: "execute",
        access: "public",
        args: [{ name: "sender", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [sender: TypedAbiArg<string, "sender">],
        Response<boolean, bigint>
      >,
    },
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bdp000-register-token-contracts",
  },
  bitcoinDao: {
    functions: {
      isSelfOrExtension: {
        name: "is-self-or-extension",
        access: "private",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      setExtensionsIter: {
        name: "set-extensions-iter",
        access: "private",
        args: [
          {
            name: "item",
            type: {
              tuple: [
                { name: "enabled", type: "bool" },
                { name: "extension", type: "principal" },
              ],
            },
          },
        ],
        outputs: { type: "bool" },
      } as TypedAbiFunction<
        [
          item: TypedAbiArg<
            {
              enabled: boolean;
              extension: string;
            },
            "item"
          >,
        ],
        boolean
      >,
      construct: {
        name: "construct",
        access: "public",
        args: [{ name: "proposal", type: "trait_reference" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [proposal: TypedAbiArg<string, "proposal">],
        Response<boolean, bigint>
      >,
      execute: {
        name: "execute",
        access: "public",
        args: [
          { name: "proposal", type: "trait_reference" },
          { name: "sender", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          proposal: TypedAbiArg<string, "proposal">,
          sender: TypedAbiArg<string, "sender">,
        ],
        Response<boolean, bigint>
      >,
      requestExtensionCallback: {
        name: "request-extension-callback",
        access: "public",
        args: [
          { name: "extension", type: "trait_reference" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          extension: TypedAbiArg<string, "extension">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, bigint>
      >,
      setExtension: {
        name: "set-extension",
        access: "public",
        args: [
          { name: "extension", type: "principal" },
          { name: "enabled", type: "bool" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          extension: TypedAbiArg<string, "extension">,
          enabled: TypedAbiArg<boolean, "enabled">,
        ],
        Response<boolean, bigint>
      >,
      setExtensions: {
        name: "set-extensions",
        access: "public",
        args: [
          {
            name: "extension-list",
            type: {
              list: {
                type: {
                  tuple: [
                    { name: "enabled", type: "bool" },
                    { name: "extension", type: "principal" },
                  ],
                },
                length: 200,
              },
            },
          },
        ],
        outputs: {
          type: {
            response: {
              ok: { list: { type: "bool", length: 200 } },
              error: "uint128",
            },
          },
        },
      } as TypedAbiFunction<
        [
          extensionList: TypedAbiArg<
            {
              enabled: boolean;
              extension: string;
            }[],
            "extensionList"
          >,
        ],
        Response<boolean[], bigint>
      >,
      executedAt: {
        name: "executed-at",
        access: "read_only",
        args: [{ name: "proposal", type: "trait_reference" }],
        outputs: { type: { optional: "uint128" } },
      } as TypedAbiFunction<
        [proposal: TypedAbiArg<string, "proposal">],
        bigint | null
      >,
      isExtension: {
        name: "is-extension",
        access: "read_only",
        args: [{ name: "extension", type: "principal" }],
        outputs: { type: "bool" },
      } as TypedAbiFunction<
        [extension: TypedAbiArg<string, "extension">],
        boolean
      >,
    },
    maps: {
      executedProposals: {
        name: "executed-proposals",
        key: "principal",
        value: "uint128",
      } as TypedAbiMap<string, bigint>,
      extensions: {
        name: "extensions",
        key: "principal",
        value: "bool",
      } as TypedAbiMap<string, boolean>,
    },
    variables: {
      errAlreadyExecuted: {
        name: "err-already-executed",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errInvalidExtension: {
        name: "err-invalid-extension",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      executive: {
        name: "executive",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
    },
    constants: {
      errAlreadyExecuted: {
        isOk: false,
        value: 1_001n,
      },
      errInvalidExtension: {
        isOk: false,
        value: 1_002n,
      },
      errUnauthorised: {
        isOk: false,
        value: 1_000n,
      },
      executive: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "bitcoin-dao",
  },
  btcMonkeysBananas: {
    functions: {
      adminAirdrop: {
        name: "admin-airdrop",
        access: "public",
        args: [
          { name: "address", type: "principal" },
          { name: "amount", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          address: TypedAbiArg<string, "address">,
          amount: TypedAbiArg<number | bigint, "amount">,
        ],
        Response<boolean, bigint>
      >,
      burn: {
        name: "burn",
        access: "public",
        args: [{ name: "burn-amount", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [burnAmount: TypedAbiArg<number | bigint, "burnAmount">],
        Response<boolean, bigint>
      >,
      contractChange: {
        name: "contract-change",
        access: "public",
        args: [{ name: "address", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [address: TypedAbiArg<string, "address">],
        Response<boolean, bigint>
      >,
      harvestBananas: {
        name: "harvest-bananas",
        access: "public",
        args: [
          { name: "sender", type: "principal" },
          { name: "blocks", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          sender: TypedAbiArg<string, "sender">,
          blocks: TypedAbiArg<number | bigint, "blocks">,
        ],
        Response<boolean, bigint>
      >,
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
        ],
        Response<boolean, bigint>
      >,
      getBalance: {
        name: "get-balance",
        access: "read_only",
        args: [{ name: "owner", type: "principal" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [owner: TypedAbiArg<string, "owner">],
        Response<bigint, null>
      >,
      getDecimals: {
        name: "get-decimals",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getName: {
        name: "get-name",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 6 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getSymbol: {
        name: "get-symbol",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 3 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getTokenUri: {
        name: "get-token-uri",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: {
              ok: { optional: { "string-utf8": { length: 25 } } },
              error: "none",
            },
          },
        },
      } as TypedAbiFunction<[], Response<string | null, null>>,
      getTotalSupply: {
        name: "get-total-supply",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
    },
    maps: {},
    variables: {
      BANANA_CAP: {
        name: "BANANA-CAP",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      CONTRACT_OWNER: {
        name: "CONTRACT-OWNER",
        type: "principal",
        access: "constant",
      } as TypedAbiVariable<string>,
      ERR_INVALID_STAKE: {
        name: "ERR-INVALID-STAKE",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_NO_MORE_BANANAS: {
        name: "ERR-NO-MORE-BANANAS",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_NOT_AUTHORIZED: {
        name: "ERR-NOT-AUTHORIZED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      contract: {
        name: "contract",
        type: "principal",
        access: "variable",
      } as TypedAbiVariable<string>,
      shutoffValve: {
        name: "shutoff-valve",
        type: "bool",
        access: "variable",
      } as TypedAbiVariable<boolean>,
    },
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [{ name: "BANANA" }],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "btc-monkeys-bananas",
  },
  commissionTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "commission-trait",
  },
  daoFeesTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "dao-fees-trait",
  },
  daoOtherFees: {
    functions: {
      calcFees: {
        name: "calc-fees",
        access: "private",
        args: [{ name: "xbtc", type: "uint128" }],
        outputs: { type: "uint128" },
      } as TypedAbiFunction<
        [xbtc: TypedAbiArg<number | bigint, "xbtc">],
        bigint
      >,
      xbtcTransferTo: {
        name: "xbtc-transfer-to",
        access: "private",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "amount", type: "uint128" },
          { name: "to", type: "principal" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          amount: TypedAbiArg<number | bigint, "amount">,
          to: TypedAbiArg<string, "to">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, bigint>
      >,
      holdFees: {
        name: "hold-fees",
        access: "public",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "xbtc", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          xbtc: TypedAbiArg<number | bigint, "xbtc">,
        ],
        Response<boolean, bigint>
      >,
      isDaoOrExtension: {
        name: "is-dao-or-extension",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      payFees: {
        name: "pay-fees",
        access: "public",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "xbtc", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          xbtc: TypedAbiArg<number | bigint, "xbtc">,
        ],
        Response<boolean, bigint>
      >,
      releaseFees: {
        name: "release-fees",
        access: "public",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "xbtc", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          xbtc: TypedAbiArg<number | bigint, "xbtc">,
        ],
        Response<boolean, bigint>
      >,
      getFees: {
        name: "get-fees",
        access: "read_only",
        args: [{ name: "xbtc", type: "uint128" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [xbtc: TypedAbiArg<number | bigint, "xbtc">],
        Response<bigint, null>
      >,
    },
    maps: {},
    variables: {
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      feeReceiver: {
        name: "fee-receiver",
        type: "principal",
        access: "constant",
      } as TypedAbiVariable<string>,
    },
    constants: {
      errUnauthorised: {
        isOk: false,
        value: 401n,
      },
      feeReceiver: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-swap-fees",
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "dao-other-fees",
  },
  daoSwapFees: {
    functions: {
      calcFees: {
        name: "calc-fees",
        access: "private",
        args: [{ name: "xbtc", type: "uint128" }],
        outputs: { type: "uint128" },
      } as TypedAbiFunction<
        [xbtc: TypedAbiArg<number | bigint, "xbtc">],
        bigint
      >,
      xbtcTransferTo: {
        name: "xbtc-transfer-to",
        access: "private",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "amount", type: "uint128" },
          { name: "to", type: "principal" },
          { name: "memo", type: { buffer: { length: 34 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          amount: TypedAbiArg<number | bigint, "amount">,
          to: TypedAbiArg<string, "to">,
          memo: TypedAbiArg<Uint8Array, "memo">,
        ],
        Response<boolean, bigint>
      >,
      holdFees: {
        name: "hold-fees",
        access: "public",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "xbtc", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          xbtc: TypedAbiArg<number | bigint, "xbtc">,
        ],
        Response<boolean, bigint>
      >,
      isDaoOrExtension: {
        name: "is-dao-or-extension",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      payFees: {
        name: "pay-fees",
        access: "public",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "xbtc", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          xbtc: TypedAbiArg<number | bigint, "xbtc">,
        ],
        Response<boolean, bigint>
      >,
      releaseFees: {
        name: "release-fees",
        access: "public",
        args: [
          { name: "token", type: "trait_reference" },
          { name: "xbtc", type: "uint128" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          token: TypedAbiArg<string, "token">,
          xbtc: TypedAbiArg<number | bigint, "xbtc">,
        ],
        Response<boolean, bigint>
      >,
      getFees: {
        name: "get-fees",
        access: "read_only",
        args: [{ name: "xbtc", type: "uint128" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [xbtc: TypedAbiArg<number | bigint, "xbtc">],
        Response<bigint, null>
      >,
    },
    maps: {},
    variables: {
      errUnauthorised: {
        name: "err-unauthorised",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      feeReceiver: {
        name: "fee-receiver",
        type: "principal",
        access: "constant",
      } as TypedAbiVariable<string>,
    },
    constants: {
      errUnauthorised: {
        isOk: false,
        value: 401n,
      },
      feeReceiver: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-swap-fees",
    },
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "dao-swap-fees",
  },
  extensionTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "extension-trait",
  },
  ftTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "ft-trait",
  },
  governanceTokenTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "governance-token-trait",
  },
  miamicoinToken: {
    functions: {
      checkErr: {
        name: "check-err",
        access: "private",
        args: [
          {
            name: "result",
            type: { response: { ok: "bool", error: "uint128" } },
          },
          {
            name: "prior",
            type: { response: { ok: "bool", error: "uint128" } },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          result: TypedAbiArg<Response<boolean, number | bigint>, "result">,
          prior: TypedAbiArg<Response<boolean, number | bigint>, "prior">,
        ],
        Response<boolean, bigint>
      >,
      isAuthorizedAuth: {
        name: "is-authorized-auth",
        access: "private",
        args: [],
        outputs: { type: "bool" },
      } as TypedAbiFunction<[], boolean>,
      sendToken: {
        name: "send-token",
        access: "private",
        args: [
          {
            name: "recipient",
            type: {
              tuple: [
                { name: "amount", type: "uint128" },
                {
                  name: "memo",
                  type: { optional: { buffer: { length: 34 } } },
                },
                { name: "to", type: "principal" },
              ],
            },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          recipient: TypedAbiArg<
            {
              amount: number | bigint;
              memo: Uint8Array | null;
              to: string;
            },
            "recipient"
          >,
        ],
        Response<boolean, bigint>
      >,
      sendTokenWithMemo: {
        name: "send-token-with-memo",
        access: "private",
        args: [
          { name: "amount", type: "uint128" },
          { name: "to", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          to: TypedAbiArg<string, "to">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
        ],
        Response<boolean, bigint>
      >,
      burn: {
        name: "burn",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<boolean, bigint>
      >,
      mint: {
        name: "mint",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<boolean, bigint>
      >,
      sendMany: {
        name: "send-many",
        access: "public",
        args: [
          {
            name: "recipients",
            type: {
              list: {
                type: {
                  tuple: [
                    { name: "amount", type: "uint128" },
                    {
                      name: "memo",
                      type: { optional: { buffer: { length: 34 } } },
                    },
                    { name: "to", type: "principal" },
                  ],
                },
                length: 200,
              },
            },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          recipients: TypedAbiArg<
            {
              amount: number | bigint;
              memo: Uint8Array | null;
              to: string;
            }[],
            "recipients"
          >,
        ],
        Response<boolean, bigint>
      >,
      setTokenUri: {
        name: "set-token-uri",
        access: "public",
        args: [
          {
            name: "newUri",
            type: { optional: { "string-utf8": { length: 256 } } },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [newUri: TypedAbiArg<string | null, "newUri">],
        Response<boolean, bigint>
      >,
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "from", type: "principal" },
          { name: "to", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          from: TypedAbiArg<string, "from">,
          to: TypedAbiArg<string, "to">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
        ],
        Response<boolean, bigint>
      >,
      getBalance: {
        name: "get-balance",
        access: "read_only",
        args: [{ name: "user", type: "principal" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [user: TypedAbiArg<string, "user">],
        Response<bigint, null>
      >,
      getCoinbaseThresholds: {
        name: "get-coinbase-thresholds",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: {
              ok: {
                tuple: [
                  { name: "coinbaseThreshold1", type: "uint128" },
                  { name: "coinbaseThreshold2", type: "uint128" },
                  { name: "coinbaseThreshold3", type: "uint128" },
                  { name: "coinbaseThreshold4", type: "uint128" },
                  { name: "coinbaseThreshold5", type: "uint128" },
                ],
              },
              error: "uint128",
            },
          },
        },
      } as TypedAbiFunction<
        [],
        Response<
          {
            coinbaseThreshold1: bigint;
            coinbaseThreshold2: bigint;
            coinbaseThreshold3: bigint;
            coinbaseThreshold4: bigint;
            coinbaseThreshold5: bigint;
          },
          bigint
        >
      >,
      getDecimals: {
        name: "get-decimals",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getName: {
        name: "get-name",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 9 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getSymbol: {
        name: "get-symbol",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 3 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getTokenUri: {
        name: "get-token-uri",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: {
              ok: { optional: { "string-utf8": { length: 256 } } },
              error: "none",
            },
          },
        },
      } as TypedAbiFunction<[], Response<string | null, null>>,
      getTotalSupply: {
        name: "get-total-supply",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
    },
    maps: {},
    variables: {
      CONTRACT_OWNER: {
        name: "CONTRACT_OWNER",
        type: "principal",
        access: "constant",
      } as TypedAbiVariable<string>,
      ERR_TOKEN_ALREADY_ACTIVATED: {
        name: "ERR_TOKEN_ALREADY_ACTIVATED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_TOKEN_NOT_ACTIVATED: {
        name: "ERR_TOKEN_NOT_ACTIVATED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      ERR_UNAUTHORIZED: {
        name: "ERR_UNAUTHORIZED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      STATE_ACTIVE: {
        name: "STATE_ACTIVE",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      STATE_DEPLOYED: {
        name: "STATE_DEPLOYED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      STATE_INACTIVE: {
        name: "STATE_INACTIVE",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      TOKEN_HALVING_BLOCKS: {
        name: "TOKEN_HALVING_BLOCKS",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      coinbaseThreshold1: {
        name: "coinbaseThreshold1",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      coinbaseThreshold2: {
        name: "coinbaseThreshold2",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      coinbaseThreshold3: {
        name: "coinbaseThreshold3",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      coinbaseThreshold4: {
        name: "coinbaseThreshold4",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      coinbaseThreshold5: {
        name: "coinbaseThreshold5",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      tokenActivated: {
        name: "tokenActivated",
        type: "bool",
        access: "variable",
      } as TypedAbiVariable<boolean>,
      tokenUri: {
        name: "tokenUri",
        type: {
          optional: {
            "string-utf8": {
              length: 256,
            },
          },
        },
        access: "variable",
      } as TypedAbiVariable<string | null>,
    },
    constants: {
      CONTRACT_OWNER: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      ERR_TOKEN_ALREADY_ACTIVATED: 2_002n,
      ERR_TOKEN_NOT_ACTIVATED: 2_001n,
      ERR_UNAUTHORIZED: 2_000n,
      STATE_ACTIVE: 1n,
      STATE_DEPLOYED: 0n,
      STATE_INACTIVE: 2n,
      TOKEN_HALVING_BLOCKS: 210_000n,
      coinbaseThreshold1: 0n,
      coinbaseThreshold2: 0n,
      coinbaseThreshold3: 0n,
      coinbaseThreshold4: 0n,
      coinbaseThreshold5: 0n,
      tokenActivated: false,
      tokenUri: "https://cdn.citycoins.co/metadata/miamicoin.json",
    },
    non_fungible_tokens: [],
    fungible_tokens: [{ name: "miamicoin" }],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "miamicoin-token",
  },
  nftTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "nft-trait",
  },
  nftTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "nft-trait",
  },
  ownableTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "ownable-trait",
  },
  paymentGatewayTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "payment-gateway-trait",
  },
  proposalTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "proposal-trait",
  },
  satoshibles: {
    functions: {
      checkErr: {
        name: "check-err",
        access: "private",
        args: [
          {
            name: "result",
            type: { response: { ok: "bool", error: "uint128" } },
          },
          {
            name: "prior",
            type: { response: { ok: "bool", error: "uint128" } },
          },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          result: TypedAbiArg<Response<boolean, number | bigint>, "result">,
          prior: TypedAbiArg<Response<boolean, number | bigint>, "prior">,
        ],
        Response<boolean, bigint>
      >,
      isSenderOwner: {
        name: "is-sender-owner",
        access: "private",
        args: [{ name: "id", type: "uint128" }],
        outputs: { type: "bool" },
      } as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], boolean>,
      premint: {
        name: "premint",
        access: "private",
        args: [{ name: "count", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [count: TypedAbiArg<number | bigint, "count">],
        Response<boolean, bigint>
      >,
      trnsfr: {
        name: "trnsfr",
        access: "private",
        args: [
          { name: "id", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          id: TypedAbiArg<number | bigint, "id">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<boolean, bigint>
      >,
      buyInUstx: {
        name: "buy-in-ustx",
        access: "public",
        args: [
          { name: "id", type: "uint128" },
          { name: "comm", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          id: TypedAbiArg<number | bigint, "id">,
          comm: TypedAbiArg<string, "comm">,
        ],
        Response<boolean, bigint>
      >,
      freezeMetadata: {
        name: "freeze-metadata",
        access: "public",
        args: [],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<[], Response<boolean, bigint>>,
      listInUstx: {
        name: "list-in-ustx",
        access: "public",
        args: [
          { name: "id", type: "uint128" },
          { name: "price", type: "uint128" },
          { name: "comm", type: "trait_reference" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          id: TypedAbiArg<number | bigint, "id">,
          price: TypedAbiArg<number | bigint, "price">,
          comm: TypedAbiArg<string, "comm">,
        ],
        Response<boolean, bigint>
      >,
      mint: {
        name: "mint",
        access: "public",
        args: [{ name: "new-owner", type: "principal" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [newOwner: TypedAbiArg<string, "newOwner">],
        Response<boolean, bigint>
      >,
      premintMany: {
        name: "premint-many",
        access: "public",
        args: [
          { name: "count", type: { list: { type: "uint128", length: 5000 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [count: TypedAbiArg<number | bigint[], "count">],
        Response<boolean, bigint>
      >,
      setBaseUri: {
        name: "set-base-uri",
        access: "public",
        args: [
          { name: "new-base-uri", type: { "string-ascii": { length: 80 } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [newBaseUri: TypedAbiArg<string, "newBaseUri">],
        Response<boolean, bigint>
      >,
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "id", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          id: TypedAbiArg<number | bigint, "id">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<boolean, bigint>
      >,
      unlistInUstx: {
        name: "unlist-in-ustx",
        access: "public",
        args: [{ name: "id", type: "uint128" }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [id: TypedAbiArg<number | bigint, "id">],
        Response<boolean, bigint>
      >,
      getBalance: {
        name: "get-balance",
        access: "read_only",
        args: [{ name: "account", type: "principal" }],
        outputs: { type: "uint128" },
      } as TypedAbiFunction<[account: TypedAbiArg<string, "account">], bigint>,
      getContractUri: {
        name: "get-contract-uri",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 53 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getLastTokenId: {
        name: "get-last-token-id",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getListingInUstx: {
        name: "get-listing-in-ustx",
        access: "read_only",
        args: [{ name: "id", type: "uint128" }],
        outputs: {
          type: {
            optional: {
              tuple: [
                { name: "commission", type: "principal" },
                { name: "price", type: "uint128" },
              ],
            },
          },
        },
      } as TypedAbiFunction<
        [id: TypedAbiArg<number | bigint, "id">],
        {
          commission: string;
          price: bigint;
        } | null
      >,
      getOwner: {
        name: "get-owner",
        access: "read_only",
        args: [{ name: "id", type: "uint128" }],
        outputs: {
          type: { response: { ok: { optional: "principal" }, error: "none" } },
        },
      } as TypedAbiFunction<
        [id: TypedAbiArg<number | bigint, "id">],
        Response<string | null, null>
      >,
      getTokenUri: {
        name: "get-token-uri",
        access: "read_only",
        args: [{ name: "id", type: "uint128" }],
        outputs: {
          type: {
            response: {
              ok: { optional: { "string-ascii": { length: 80 } } },
              error: "none",
            },
          },
        },
      } as TypedAbiFunction<
        [id: TypedAbiArg<number | bigint, "id">],
        Response<string | null, null>
      >,
    },
    maps: {
      market: {
        name: "market",
        key: "uint128",
        value: {
          tuple: [
            { name: "commission", type: "principal" },
            { name: "price", type: "uint128" },
          ],
        },
      } as TypedAbiMap<
        number | bigint,
        {
          commission: string;
          price: bigint;
        }
      >,
      tokenCount: {
        name: "token-count",
        key: "principal",
        value: "uint128",
      } as TypedAbiMap<string, bigint>,
    },
    variables: {
      BRIDGE_CONTRACT: {
        name: "BRIDGE-CONTRACT",
        type: "principal",
        access: "constant",
      } as TypedAbiVariable<string>,
      CONTRACT_OWNER: {
        name: "CONTRACT-OWNER",
        type: "principal",
        access: "constant",
      } as TypedAbiVariable<string>,
      ERR_LISTING: {
        name: "ERR-LISTING",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      ERR_METADATA_FROZEN: {
        name: "ERR-METADATA-FROZEN",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      ERR_MINT_ALREADY_SET: {
        name: "ERR-MINT-ALREADY-SET",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      ERR_NOT_AUTHORIZED: {
        name: "ERR-NOT-AUTHORIZED",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      ERR_NOT_FOUND: {
        name: "ERR-NOT-FOUND",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      ERR_SOLD_OUT: {
        name: "ERR-SOLD-OUT",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      ERR_WRONG_COMMISSION: {
        name: "ERR-WRONG-COMMISSION",
        type: {
          response: {
            ok: "none",
            error: "uint128",
          },
        },
        access: "constant",
      } as TypedAbiVariable<Response<null, bigint>>,
      SATOSHIBLES_LIMIT: {
        name: "SATOSHIBLES-LIMIT",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      contractUri: {
        name: "contract-uri",
        type: {
          "string-ascii": {
            length: 53,
          },
        },
        access: "constant",
      } as TypedAbiVariable<string>,
      baseUri: {
        name: "base-uri",
        type: {
          "string-ascii": {
            length: 80,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
      lastId: {
        name: "last-id",
        type: "uint128",
        access: "variable",
      } as TypedAbiVariable<bigint>,
      metadataFrozen: {
        name: "metadata-frozen",
        type: "bool",
        access: "variable",
      } as TypedAbiVariable<boolean>,
    },
    constants: {},
    non_fungible_tokens: [{ name: "Satoshibles", type: "uint128" }],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "satoshibles",
  },
  sip010TraitFtStandard: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "sip-010-trait-ft-standard",
  },
  sip010FtTrait: {
    functions: {},
    maps: {},
    variables: {},
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch25",
    clarity_version: "Clarity2",
    contractName: "sip010-ft-trait",
  },
  unwrappedStxToken: {
    functions: {
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
        ],
        Response<boolean, bigint>
      >,
      getBalance: {
        name: "get-balance",
        access: "read_only",
        args: [{ name: "account", type: "principal" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [account: TypedAbiArg<string, "account">],
        Response<bigint, null>
      >,
      getDecimals: {
        name: "get-decimals",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getName: {
        name: "get-name",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 19 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getSymbol: {
        name: "get-symbol",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 4 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getTokenUri: {
        name: "get-token-uri",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: {
              ok: { optional: { "string-utf8": { length: 256 } } },
              error: "none",
            },
          },
        },
      } as TypedAbiFunction<[], Response<string | null, null>>,
      getTotalSupply: {
        name: "get-total-supply",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
    },
    maps: {},
    variables: {
      ERR_NOT_AUTHORIZED: {
        name: "ERR_NOT_AUTHORIZED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      tokenUri: {
        name: "token-uri",
        type: {
          "string-utf8": {
            length: 256,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
    },
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "unwrapped-stx-token",
  },
  usdaToken: {
    functions: {
      burn: {
        name: "burn",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
        ],
        outputs: { type: { response: { ok: "none", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
        ],
        Response<null, bigint>
      >,
      burnForDao: {
        name: "burn-for-dao",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
        ],
        Response<boolean, bigint>
      >,
      mintForDao: {
        name: "mint-for-dao",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "recipient", type: "principal" },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          recipient: TypedAbiArg<string, "recipient">,
        ],
        Response<boolean, bigint>
      >,
      setTokenUri: {
        name: "set-token-uri",
        access: "public",
        args: [{ name: "value", type: { "string-utf8": { length: 256 } } }],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [value: TypedAbiArg<string, "value">],
        Response<boolean, bigint>
      >,
      transfer: {
        name: "transfer",
        access: "public",
        args: [
          { name: "amount", type: "uint128" },
          { name: "sender", type: "principal" },
          { name: "recipient", type: "principal" },
          { name: "memo", type: { optional: { buffer: { length: 34 } } } },
        ],
        outputs: { type: { response: { ok: "bool", error: "uint128" } } },
      } as TypedAbiFunction<
        [
          amount: TypedAbiArg<number | bigint, "amount">,
          sender: TypedAbiArg<string, "sender">,
          recipient: TypedAbiArg<string, "recipient">,
          memo: TypedAbiArg<Uint8Array | null, "memo">,
        ],
        Response<boolean, bigint>
      >,
      getBalance: {
        name: "get-balance",
        access: "read_only",
        args: [{ name: "account", type: "principal" }],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<
        [account: TypedAbiArg<string, "account">],
        Response<bigint, null>
      >,
      getDecimals: {
        name: "get-decimals",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
      getName: {
        name: "get-name",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 4 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getSymbol: {
        name: "get-symbol",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: { ok: { "string-ascii": { length: 4 } }, error: "none" },
          },
        },
      } as TypedAbiFunction<[], Response<string, null>>,
      getTokenUri: {
        name: "get-token-uri",
        access: "read_only",
        args: [],
        outputs: {
          type: {
            response: {
              ok: { optional: { "string-utf8": { length: 256 } } },
              error: "none",
            },
          },
        },
      } as TypedAbiFunction<[], Response<string | null, null>>,
      getTotalSupply: {
        name: "get-total-supply",
        access: "read_only",
        args: [],
        outputs: { type: { response: { ok: "uint128", error: "none" } } },
      } as TypedAbiFunction<[], Response<bigint, null>>,
    },
    maps: {},
    variables: {
      ERR_NOT_AUTHORIZED: {
        name: "ERR-NOT-AUTHORIZED",
        type: "uint128",
        access: "constant",
      } as TypedAbiVariable<bigint>,
      tokenUri: {
        name: "token-uri",
        type: {
          "string-utf8": {
            length: 256,
          },
        },
        access: "variable",
      } as TypedAbiVariable<string>,
    },
    constants: {},
    non_fungible_tokens: [],
    fungible_tokens: [{ name: "usda" }],
    epoch: "Epoch21",
    clarity_version: "Clarity1",
    contractName: "usda-token",
  },
} as const;

export const accounts = {
  deployer: {
    address: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    balance: "100000000000000",
  },
  wallet_1: {
    address: "ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5",
    balance: "100000000000000",
  },
  wallet_2: {
    address: "ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG",
    balance: "100000000000000",
  },
  wallet_3: {
    address: "ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC",
    balance: "100000000000000",
  },
  wallet_4: {
    address: "ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND",
    balance: "100000000000000",
  },
  wallet_5: {
    address: "ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB",
    balance: "100000000000000",
  },
  wallet_6: {
    address: "ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0",
    balance: "100000000000000",
  },
  wallet_7: {
    address: "ST3PF13W7Z0RRM42A8VZRVFQ75SV1K26RXEP8YGKJ",
    balance: "100000000000000",
  },
  wallet_8: {
    address: "ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP",
    balance: "100000000000000",
  },
  wallet_9: {
    address: "STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6",
    balance: "100000000000000",
  },
} as const;

export const identifiers = {
  wrappedBitcoin: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.Wrapped-Bitcoin",
  arkadikoDao: "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-dao",
  arkadikoDaoTokenTraitV1:
    "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-dao-token-trait-v1",
  arkadikoToken: "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-token",
  bde000GovernanceToken:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde000-governance-token",
  bde001ProposalVoting:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde001-proposal-voting",
  bde002ProposalSubmission:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde002-proposal-submission",
  bde003CoreProposals:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde003-core-proposals",
  bde004CoreExecute:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde004-core-execute",
  bde006Treasury: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde006-treasury",
  bde030FtSwapManager:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde030-ft-swap-manager",
  bdp000Bootstrap: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-bootstrap",
  bdp000CoreTeamSunsetHeight:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-core-team-sunset-height",
  bdp000ExecutiveTeamSunsetHeight:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-executive-team-sunset-height",
  bdp000RegisterTokenContracts:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-register-token-contracts",
  bitcoinDao: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bitcoin-dao",
  btcMonkeysBananas:
    "SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C.btc-monkeys-bananas",
  commissionTrait: "SP6P4EJF0VG8V0RB3TQQKJBHDQKEF6NVRD1KZE3C.commission-trait",
  daoFeesTrait: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-fees-trait",
  daoOtherFees: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-other-fees",
  daoSwapFees: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-swap-fees",
  extensionTrait: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.extension-trait",
  ftTrait: "SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C.ft-trait",
  governanceTokenTrait:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.governance-token-trait",
  miamicoinToken: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.miamicoin-token",
  nftTrait: "SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait",
  ownableTrait: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ownable-trait",
  paymentGatewayTrait:
    "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.payment-gateway-trait",
  proposalTrait: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-trait",
  satoshibles: "SP6P4EJF0VG8V0RB3TQQKJBHDQKEF6NVRD1KZE3C.satoshibles",
  sip010TraitFtStandard:
    "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard",
  sip010FtTrait: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip010-ft-trait",
  unwrappedStxToken:
    "SP3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSQP2HGT6.unwrapped-stx-token",
  usdaToken: "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.usda-token",
} as const;

export const simnet = {
  accounts,
  contracts,
  identifiers,
} as const;

export const deployments = {
  wrappedBitcoin: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.Wrapped-Bitcoin",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.Wrapped-Bitcoin",
    testnet: null,
    mainnet: null,
  },
  arkadikoDao: {
    devnet: "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-dao",
    simnet: "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-dao",
    testnet: null,
    mainnet: null,
  },
  arkadikoDaoTokenTraitV1: {
    devnet:
      "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-dao-token-trait-v1",
    simnet:
      "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-dao-token-trait-v1",
    testnet: null,
    mainnet: null,
  },
  arkadikoToken: {
    devnet: "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-token",
    simnet: "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-token",
    testnet: null,
    mainnet: null,
  },
  bde000GovernanceToken: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde000-governance-token",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde000-governance-token",
    testnet: null,
    mainnet: null,
  },
  bde001ProposalVoting: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde001-proposal-voting",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde001-proposal-voting",
    testnet: null,
    mainnet: null,
  },
  bde002ProposalSubmission: {
    devnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde002-proposal-submission",
    simnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde002-proposal-submission",
    testnet: null,
    mainnet: null,
  },
  bde003CoreProposals: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde003-core-proposals",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde003-core-proposals",
    testnet: null,
    mainnet: null,
  },
  bde004CoreExecute: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde004-core-execute",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde004-core-execute",
    testnet: null,
    mainnet: null,
  },
  bde006Treasury: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde006-treasury",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde006-treasury",
    testnet: null,
    mainnet: null,
  },
  bde030FtSwapManager: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde030-ft-swap-manager",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bde030-ft-swap-manager",
    testnet: null,
    mainnet: null,
  },
  bdp000Bootstrap: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-bootstrap",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-bootstrap",
    testnet: null,
    mainnet: null,
  },
  bdp000CoreTeamSunsetHeight: {
    devnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-core-team-sunset-height",
    simnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-core-team-sunset-height",
    testnet: null,
    mainnet: null,
  },
  bdp000ExecutiveTeamSunsetHeight: {
    devnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-executive-team-sunset-height",
    simnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-executive-team-sunset-height",
    testnet: null,
    mainnet: null,
  },
  bdp000RegisterTokenContracts: {
    devnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-register-token-contracts",
    simnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp000-register-token-contracts",
    testnet: null,
    mainnet: null,
  },
  bitcoinDao: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bitcoin-dao",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bitcoin-dao",
    testnet: null,
    mainnet: null,
  },
  btcMonkeysBananas: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.btc-monkeys-bananas",
    simnet: "SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C.btc-monkeys-bananas",
    testnet: null,
    mainnet: "SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C.btc-monkeys-bananas",
  },
  commissionTrait: {
    devnet: "SP6P4EJF0VG8V0RB3TQQKJBHDQKEF6NVRD1KZE3C.commission-trait",
    simnet: "SP6P4EJF0VG8V0RB3TQQKJBHDQKEF6NVRD1KZE3C.commission-trait",
    testnet: null,
    mainnet: null,
  },
  daoFeesTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-fees-trait",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-fees-trait",
    testnet: null,
    mainnet: null,
  },
  daoOtherFees: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-other-fees",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-other-fees",
    testnet: null,
    mainnet: null,
  },
  daoSwapFees: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-swap-fees",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-swap-fees",
    testnet: null,
    mainnet: null,
  },
  extensionTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.extension-trait",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.extension-trait",
    testnet: null,
    mainnet: null,
  },
  ftTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ft-trait",
    simnet: "SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C.ft-trait",
    testnet: null,
    mainnet: null,
  },
  governanceTokenTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.governance-token-trait",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.governance-token-trait",
    testnet: null,
    mainnet: null,
  },
  miamicoinToken: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.miamicoin-token",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.miamicoin-token",
    testnet: null,
    mainnet: null,
  },
  nftTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.nft-trait",
    simnet: "SP6P4EJF0VG8V0RB3TQQKJBHDQKEF6NVRD1KZE3C.nft-trait",
    testnet: null,
    mainnet: "SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait",
  },
  ownableTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ownable-trait",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ownable-trait",
    testnet: null,
    mainnet: null,
  },
  paymentGatewayTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.payment-gateway-trait",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.payment-gateway-trait",
    testnet: null,
    mainnet: null,
  },
  proposalTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-trait",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-trait",
    testnet: null,
    mainnet: null,
  },
  satoshibles: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.satoshibles",
    simnet: "SP6P4EJF0VG8V0RB3TQQKJBHDQKEF6NVRD1KZE3C.satoshibles",
    testnet: null,
    mainnet: "SP6P4EJF0VG8V0RB3TQQKJBHDQKEF6NVRD1KZE3C.satoshibles",
  },
  sip010TraitFtStandard: {
    devnet:
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip-010-trait-ft-standard",
    simnet:
      "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard",
    testnet: null,
    mainnet:
      "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard",
  },
  sip010FtTrait: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip010-ft-trait",
    simnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip010-ft-trait",
    testnet: null,
    mainnet: null,
  },
  unwrappedStxToken: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.unwrapped-stx-token",
    simnet: "SP3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSQP2HGT6.unwrapped-stx-token",
    testnet: null,
    mainnet: "SP3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSQP2HGT6.unwrapped-stx-token",
  },
  usdaToken: {
    devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usda-token",
    simnet: "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.usda-token",
    testnet: null,
    mainnet: "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.usda-token",
  },
} as const;

export const project = {
  contracts,
  deployments,
} as const;
