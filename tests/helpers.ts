import { rov, txOk } from "@clarigen/test";
import { project, accounts } from "./clarigen-types";
import { projectFactory, projectErrors } from "@clarigen/core";
import { expect } from "vitest";

export const contracts = projectFactory(project, "simnet");

export const deployer = accounts.deployer.address;
export const alice = accounts.wallet_1.address;
export const bob = accounts.wallet_2.address;
export const charlie = accounts.wallet_3.address;
export const fred = accounts.wallet_9.address;

export const swapManager = contracts.bde030FtSwapManager;

export const governanceToken = contracts.bde000GovernanceToken;
export const proposalVoting = contracts.bde001ProposalVoting;
export const proposalSubmission = contracts.bde002ProposalSubmission;
export const coreProposals = contracts.bde003CoreProposals;
export const coreExecute = contracts.bde004CoreExecute;
export const treasury = contracts.bde006Treasury;
export const daoSwapFees = contracts.bde031SwapFees;
export const bitcoinDao = contracts.bitcoinDao;
export const extensionTrait = contracts.extensionTrait;
export const proposalTrait = contracts.proposalTrait;
export const governanceTokenTrait = contracts.governanceTokenTrait;
export const ownableTrait = contracts.ownableTrait;
export const controllerId = `${accounts.deployer.address}.controller`;

export const token_unwrappedStxToken = contracts.unwrappedStxToken;
export const token_usdaToken = contracts.usdaToken;
export const token_wrappedBitcoin = contracts.wrappedBitcoin;
export const token_btcMonkeysBananas = contracts.btcMonkeysBananas;
export const token_miamicoinToken = contracts.miamicoinToken;
export const token_satoshibles = contracts.satoshibles;
export const daoOtherFees = contracts.daoOtherFees;

const _errors = projectErrors(project);

export const errors = {
  swapManager: _errors.bde030FtSwapManager,
  governanceToken: _errors.bde000GovernanceToken,
  proposalVoting: _errors.bde001ProposalVoting,
  proposalSubmission: _errors.bde002ProposalSubmission,
  coreProposals: _errors.bde003CoreProposals,
  coreExecute: _errors.bde004CoreExecute,
  treasury: _errors.bde006Treasury,
  bitcoinDao: _errors.bitcoinDao,
};

export function getAccountBalance(addr:string) {
  let b = 0n;
  Object.values(accounts).forEach((account) => {
    if (account.address === addr) {
      console.log('getAccountBalance of : ' + deployer + ' is ' + account.balance, account)
      b = BigInt(account.balance);
    }
  });
  return b;
}
export function constructDao() {
  const proposal = simnet.deployer + '.' + 'bdp000-bootstrap'
  const response = txOk(bitcoinDao.construct(proposal), simnet.deployer);
  expect(response.value).toBeTruthy()
  return proposal;
}
export function passProposalBySignals(contractName:string) {
  const proposal = simnet.deployer + '.' + contractName
  const response2 = txOk(coreExecute.executiveAction(proposal), alice);
  expect(response2.value).toBe(1n)
  const response3 = txOk(coreExecute.executiveAction(proposal), bob);
  expect(response3.value).toBe(2n)
  expect(rov(bitcoinDao.executedAt(proposal))).toBeGreaterThan(0);

}
export function mintToken(amount:bigint, token:string, to:string) {
  let mintResponse;
  if (token === token_wrappedBitcoin.identifier) {
    mintResponse = txOk(token_wrappedBitcoin.mintTokens(amount, to), deployer);
  } else if (token === token_unwrappedStxToken.identifier) {
    simnet.transferSTX(amount, to, deployer)
  } else if (token === token_miamicoinToken.identifier) {
    console.log('-------------------------')
    const bal = getBalance(deployer, token_miamicoinToken.identifier)
    console.log('mintToken: ' + bal)
    mintResponse = txOk(token_miamicoinToken.transfer(amount, deployer, to, Uint8Array.from(Buffer.from("0x636174616d6172616e2073776170", 'hex'))), deployer);
  } else if (token === token_btcMonkeysBananas.identifier) {
    mintResponse = txOk(token_btcMonkeysBananas.transfer(amount, deployer, to, new Uint8Array()), deployer);
  }
  if (mintResponse) expect(mintResponse.value).toBe(true);
  return mintResponse;
}

export function getBalance(who:string, token:string) {
  let bal = 0n;
  if (token === token_wrappedBitcoin.identifier) {
    bal = (rov(token_wrappedBitcoin.getBalance(who), deployer)).value || 0n
  } else if (token === token_unwrappedStxToken.identifier) {
    // cant mint stx - but the token contract can transfer it.
    bal = getAccountBalance(who)
    console.log('getBalanceyy : ' + who + ' is ' + bal)
  } else if (token === token_miamicoinToken.identifier) {
    bal = (rov(token_miamicoinToken.getBalance(who), deployer)).value || 0n
  } else if (token === token_btcMonkeysBananas.identifier) {
    bal = (rov(token_btcMonkeysBananas.getBalance(who), deployer)).value || 0n
  }
  return bal;

}

export function createFTSwap(amountA:bigint, amountB:bigint, senderB:string, fees:string) {
  constructDao()
  passProposalBySignals('bdp000-register-token-contracts');
  mintToken(1010n, token_wrappedBitcoin.identifier, alice)
  let receipt = rov(token_wrappedBitcoin.getBalance(alice), alice);
  expect(receipt.value).toEqual(1010n);

  let response1 = txOk(swapManager.createSwap(amountA, amountB, senderB, token_wrappedBitcoin.identifier, token_miamicoinToken.identifier, fees), alice);
  expect(response1.value).toBe(0n)

  return response1;
}

