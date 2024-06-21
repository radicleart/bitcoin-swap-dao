import { test, expect, describe } from "vitest";
import { alice, bitcoinDao, bob, charlie, constructDao, createFTSwap, daoOtherFees, daoSwapFees, deployer, errors, getAccountBalance, getBalance, governanceToken, mintToken, passProposalBySignals, swapManager, token_btcMonkeysBananas, token_miamicoinToken, token_satoshibles, token_unwrappedStxToken, token_usdaToken, token_wrappedBitcoin, treasury } from "../helpers";
import { rov, txErr, txOk } from '@clarigen/test';
import { accounts } from "../clarigen-types";

describe("swap-manager : submit swap", () => {

  test("can cancel - after stx/xbtc swap expires", async () => {
    const bobB = BigInt(accounts.wallet_2.balance);
    const aliceB = BigInt(accounts.wallet_1.balance);
    expect(BigInt(accounts.wallet_1.balance)).toBe(bobB)
    expect(BigInt(accounts.wallet_2.balance)).toBe(aliceB)
    simnet.transferSTX(1000000n, accounts.wallet_1.address, accounts.wallet_2.address)
    const b1 = aliceB + 1000000n
    const newSTXBalances = simnet.getAssetsMap().get("STX");
    expect(newSTXBalances?.get(accounts.wallet_1.address)).toBe(b1);
  })

  test("cant submit with different fee contract", async () => {
    createFTSwap(1000n, 200n, bob, daoSwapFees.identifier);

    mintToken(20n, token_unwrappedStxToken.identifier, bob)
    const response2 = txErr(swapManager.submitSwap(0n, token_wrappedBitcoin.identifier, token_miamicoinToken.identifier, daoOtherFees.identifier), bob);
    expect(response2.value).toBe(errors.swapManager.errUnknownFeeTrait)
  });

  test("cant submit with different token-a contract", async () => {
    createFTSwap(1000n, 200n, bob, daoSwapFees.identifier);

    mintToken(20n, token_unwrappedStxToken.identifier, bob)
    const response2 = txErr(swapManager.submitSwap(0n, token_miamicoinToken.identifier, token_miamicoinToken.identifier, daoOtherFees.identifier), bob);
    expect(response2.value).toBe(errors.swapManager.errUnknownTokenBuying)
  });

  test("cant submit with different token-b contract", async () => {
    createFTSwap(1000n, 200n, bob, daoSwapFees.identifier);

    mintToken(20n, token_unwrappedStxToken.identifier, bob)
    const response2 = txErr(swapManager.submitSwap(0n, token_wrappedBitcoin.identifier, token_wrappedBitcoin.identifier, daoOtherFees.identifier), bob);
    expect(response2.value).toBe(errors.swapManager.errUnknownTokenSelling)
  });

  test("cant submit with same sender", async () => {
    createFTSwap(1000n, 200n, alice, daoSwapFees.identifier);

    mintToken(20n, token_unwrappedStxToken.identifier, alice)
    const response2 = txErr(swapManager.submitSwap(0n, token_wrappedBitcoin.identifier, token_miamicoinToken.identifier, daoSwapFees.identifier), alice);
    expect(response2.value).toBe(1052n)
  });

  test("cant submit with insufficient ", async () => {
    createFTSwap(1000n, 200n, bob, daoSwapFees.identifier);

    simnet.transferSTX(Number(accounts.wallet_2.balance), bob, charlie)
    mintToken(10n, token_unwrappedStxToken.identifier, bob)
    const response2 = txErr(swapManager.submitSwap(0n, token_wrappedBitcoin.identifier, token_miamicoinToken.identifier, daoSwapFees.identifier), bob);
    expect(response2.value).toBe(1051n)
  });

});

describe("swap-manager : cancellations", () => {

  test("cant cancel unknown swap", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    mintToken(101n, token_miamicoinToken.identifier, alice)
    const response1 = txOk(swapManager.createSwap(100n, 20n, null, token_miamicoinToken.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(getBalance(alice, token_miamicoinToken.identifier)).toBe(0n)
    expect(getBalance(daoSwapFees.identifier, token_miamicoinToken.identifier)).toBe(1n)
    expect(getBalance(swapManager.identifier, token_miamicoinToken.identifier)).toBe(100n)
    
    expect(response1.value).toBe(0n)
    const response = txErr(swapManager.cancel(1n, token_miamicoinToken.identifier, daoSwapFees.identifier), alice);
    expect(response.value).toBe(errors.swapManager.errUnknownSwap)

    expect(getBalance(alice, token_miamicoinToken.identifier)).toBe(0n)
    expect(getBalance(daoSwapFees.identifier, token_miamicoinToken.identifier)).toBe(1n)
    expect(getBalance(swapManager.identifier, token_miamicoinToken.identifier)).toBe(100n)
  });
  
  test("cant cancel before expiry", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    mintToken(100n, token_miamicoinToken.identifier, alice)
    const response1 = txOk(swapManager.createSwap(10n, 20n, null, token_miamicoinToken.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(0n)
    const response = txErr(swapManager.cancel(0n, token_miamicoinToken.identifier, daoSwapFees.identifier), alice);
    expect(response.value).toBe(errors.swapManager.errSwapNotExpired)
  });
  
  test("cant cancel with incorrect fee contract", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    mintToken(100n, token_miamicoinToken.identifier, alice)
    const response1 = txOk(swapManager.createSwap(10n, 20n, null, token_miamicoinToken.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(0n)
    const response = txErr(swapManager.cancel(0n, token_miamicoinToken.identifier, daoOtherFees.identifier), alice);
    expect(response.value).toBe(errors.swapManager.errUnknownFeeTrait)
  });
  
  test("cant cancel with incorrect token contract", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    mintToken(100n, token_miamicoinToken.identifier, alice)
    const response1 = txOk(swapManager.createSwap(10n, 20n, null, token_miamicoinToken.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(0n)
    const response = txErr(swapManager.cancel(0n, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response.value).toBe(errors.swapManager.errUnknownTokenBuying)
  });
  
  test("cant cancel - not expired", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    mintToken(100n, token_miamicoinToken.identifier, alice)
    const response1 = txOk(swapManager.createSwap(10n, 20n, null, token_miamicoinToken.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(0n)
    const response = txErr(swapManager.cancel(0n, token_miamicoinToken.identifier, daoSwapFees.identifier), alice);
    expect(response.value).toBe(errors.swapManager.errSwapNotExpired)
  });
  
  test("cant cancel - swap is complete", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    mintToken(100n, token_miamicoinToken.identifier, alice)
    let response1 = txOk(swapManager.createSwap(10n, 20n, null, token_miamicoinToken.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(0n)

    mintToken(20n, token_unwrappedStxToken.identifier, bob)
    const response2 = txOk(swapManager.submitSwap(0n, token_miamicoinToken.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), bob);
    expect(response2.value).toBe(true)

    simnet.mineEmptyBlocks(99)
    const response = txErr(swapManager.cancel(0n, token_miamicoinToken.identifier, daoSwapFees.identifier), alice);
    expect(response.value).toBe(errors.swapManager.errSwapIsComplete);
  });

  test("can cancel - after xbtc/stx swap expires", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    mintToken(101n, token_wrappedBitcoin.identifier, alice)
    let response1 = txOk(swapManager.createSwap(100n, 20n, null, token_wrappedBitcoin.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(0n)

    expect(getBalance(alice, token_wrappedBitcoin.identifier)).toBe(0n)
    expect(getBalance(daoSwapFees.identifier, token_wrappedBitcoin.identifier)).toBe(1n)
    expect(getBalance(swapManager.identifier, token_wrappedBitcoin.identifier)).toBe(100n)

    simnet.mineEmptyBlocks(100)
    const response = txOk(swapManager.cancel(0n, token_wrappedBitcoin.identifier, daoSwapFees.identifier), alice);
    expect(response.value).toBe(true);

    expect(getBalance(alice, token_wrappedBitcoin.identifier)).toBe(101n)
    expect(getBalance(daoSwapFees.identifier, token_wrappedBitcoin.identifier)).toBe(0n)
    expect(getBalance(swapManager.identifier, token_wrappedBitcoin.identifier)).toBe(0n)
  });

  test("can cancel - after stx/xbtc swap expires", async () => {

    const aliceB = getAccountBalance(alice);
    const deployerB = getAccountBalance(deployer);
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    expect(getBalance(alice, token_unwrappedStxToken.identifier)).toBe(aliceB)
    expect(getBalance(deployer, token_unwrappedStxToken.identifier)).toBe(deployerB)
    //mintToken(101n, token_unwrappedStxToken.identifier, alice)
    simnet.transferSTX(101n, alice, deployer)

    //const b1 = aliceB + 101n
    //const b2 = deployerB - 101n
    //expect(getBalance(deployer, token_unwrappedStxToken.identifier)).toBe(b2)
    //expect(getBalance(alice, token_unwrappedStxToken.identifier)).toBe(b1)

    let response1 = txOk(swapManager.createSwap(100n, 20n, null, token_unwrappedStxToken.identifier, token_wrappedBitcoin.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(0n)

    let newSTXBalances = simnet.getAssetsMap().get("STX");
    expect(newSTXBalances?.get(daoSwapFees.identifier)).toBe(1n);
    expect(newSTXBalances?.get(swapManager.identifier)).toBe(100n);
    expect(newSTXBalances?.get(alice)).toBe(100000000000000n);

    simnet.mineEmptyBlocks(100)
    const response = txOk(swapManager.cancel(0n, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response.value).toBe(true);

    newSTXBalances = simnet.getAssetsMap().get("STX");
    expect(newSTXBalances?.get(daoSwapFees.identifier)).toBe(0n);
    expect(newSTXBalances?.get(swapManager.identifier)).toBe(0n);
    expect(newSTXBalances?.get(alice)).toBe((100000000000000n + 101n));

  });

});


describe("swap-manager : setup", () => {

  test("construct - bootstrap proposal sets resource manager extensions", async () => {
    constructDao()
    expect(rov(bitcoinDao.isExtension(treasury.identifier))).toBe(true);
    expect(rov(bitcoinDao.isExtension(governanceToken.identifier))).toBe(true);
    expect(rov(bitcoinDao.isExtension(swapManager.identifier))).toBe(true);
  });

  test("set-registered-token token swap contracts", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts')
    expect(rov(swapManager.isRegisteredToken(token_unwrappedStxToken.identifier))).toBe(true);
    expect(rov(swapManager.isRegisteredToken(token_usdaToken.identifier))).toBe(true);
    expect(rov(swapManager.isRegisteredToken(token_wrappedBitcoin.identifier))).toBe(true);
    expect(rov(swapManager.isRegisteredToken(token_btcMonkeysBananas.identifier))).toBe(false);
    expect(rov(swapManager.isRegisteredToken(token_miamicoinToken.identifier))).toBe(true);
    expect(rov(swapManager.isRegisteredToken(token_satoshibles.identifier))).toBe(false);
  });
});

describe("swap-manager : create swaps", () => { 

  test("create-swap not allowed if token-a is unregistered", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    const response1 = txErr(swapManager.createSwap(10n, 20n, bob, token_satoshibles.identifier, token_usdaToken.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(errors.swapManager.errUnregisteredToken)
  });
 
  test("create-swap not allowed if token-b is unregistered", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    const response1 = txErr(swapManager.createSwap(10n, 20n, bob, token_miamicoinToken.identifier, token_btcMonkeysBananas.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(errors.swapManager.errUnregisteredToken)
  });
 
  test("create-swap not allowed if user is has insufficient funds for escrow", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    const response1 = txErr(swapManager.createSwap(10n, 20n, bob, token_miamicoinToken.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(errors.swapManager.errNotEnoughBalance)
  });
 
  test("create-swap is allowed if sender is buyer", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    mintToken(100n, token_miamicoinToken.identifier, alice)
    const response1 = txOk(swapManager.createSwap(10n, 20n, alice, token_miamicoinToken.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(0n)
  });
 
  test("create-swap is allowed if seller is not specified", async () => {
    constructDao()
    passProposalBySignals('bdp000-register-token-contracts');
    mintToken(100n, token_miamicoinToken.identifier, alice)
    const response1 = txOk(swapManager.createSwap(10n, 20n, null, token_miamicoinToken.identifier, token_unwrappedStxToken.identifier, daoSwapFees.identifier), alice);
    expect(response1.value).toBe(0n)
  });
 
});

