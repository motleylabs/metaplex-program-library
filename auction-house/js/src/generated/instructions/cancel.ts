/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category Cancel
 * @category generated
 */
export type CancelInstructionArgs = {
  buyerPrice: beet.bignum;
  tokenSize: beet.bignum;
};
/**
 * @category Instructions
 * @category Cancel
 * @category generated
 */
export const cancelStruct = new beet.BeetArgsStruct<
  CancelInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['buyerPrice', beet.u64],
    ['tokenSize', beet.u64],
  ],
  'CancelInstructionArgs',
);
/**
 * Accounts required by the _cancel_ instruction
 *
 * @property [_writable_] wallet
 * @property [_writable_] tokenAccount
 * @property [] tokenMint
 * @property [] authority
 * @property [] auctionHouse
 * @property [_writable_] auctionHouseFeeAccount
 * @property [_writable_] tradeState
 * @category Instructions
 * @category Cancel
 * @category generated
 */
export type CancelInstructionAccounts = {
  wallet: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  tokenMint: web3.PublicKey;
  authority: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  auctionHouseFeeAccount: web3.PublicKey;
  tradeState: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const cancelInstructionDiscriminator = [232, 219, 223, 41, 219, 236, 220, 190];

/**
 * Creates a _Cancel_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Cancel
 * @category generated
 */
export function createCancelInstruction(
  accounts: CancelInstructionAccounts,
  args: CancelInstructionArgs,
  programId = new web3.PublicKey('nightTsJBrqSQfZRbQcgg9WDVKUM78GpwUJwKt64zWr'),
) {
  const [data] = cancelStruct.serialize({
    instructionDiscriminator: cancelInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.wallet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.auctionHouse,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.auctionHouseFeeAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tradeState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc);
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
