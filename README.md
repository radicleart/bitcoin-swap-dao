# Swaps DAO

Wraps [Friedger Swaps](https://github.com/friedger/clarity-catamaranswaps) in
Marvins' [Executor DAO](https://github.com/Clarity-Innovation-Lab/ecosystem-dao)

See also;

- [bitcoin-dao](https://github.com/radicleart/bitcoin-dao)

Note: this is experimental code - use at your own risk

## Extensions

Swaps DAO will launch with the following additional features;

- bde000-governance-token
- bde001-proposal-voting
- bde002-proposal-submission
- bde003-core-proposals
- bde004-core-execute
- bde006-treasury
- bde020-swap-manager

## Clarigen

Project uses [Clarigen](https://www.clarigen.dev/docs/documentation). To keep the test framerwork up to date with clarity run;

```bash
npx clarigen --watch
```

## Tests

```bash
npm run test
npm run watch
```

## Running containers

Two scripts wrap the clarinet tools for starting and stopping docker containers

```bash
bin/up.sh
bin/down.sh
```

## License

MIT license, all good as long as the copyright and permission notice are included.
