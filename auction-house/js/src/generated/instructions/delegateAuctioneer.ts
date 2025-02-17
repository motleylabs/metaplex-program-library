/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { AuthorityScope, authorityScopeBeet } from '../types/AuthorityScope';

/**
 * @category Instructions
 * @category DelegateAuctioneer
 * @category generated
 */
export type DelegateAuctioneerInstructionArgs = {
  scopes: AuthorityScope[];
};
/**
 * @category Instructions
 * @category DelegateAuctioneer
 * @category generated
 */
export const delegateAuctioneerStruct = new beet.FixableBeetArgsStruct<
  DelegateAuctioneerInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['scopes', beet.array(authorityScopeBeet)],
  ],
  'DelegateAuctioneerInstructionArgs',
);
/**
 * Accounts required by the _delegateAuctioneer_ instruction
 *
 * @property [_writable_] auctionHouse
 * @property [_writable_, **signer**] authority
 * @property [] auctioneerAuthority
 * @property [_writable_] ahAuctioneerPda
 * @category Instructions
 * @category DelegateAuctioneer
 * @category generated
 */
export type DelegateAuctioneerInstructionAccounts = {
  auctionHouse: web3.PublicKey;
  authority: web3.PublicKey;
  auctioneerAuthority: web3.PublicKey;
  ahAuctioneerPda: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const delegateAuctioneerInstructionDiscriminator = [106, 178, 12, 122, 74, 173, 251, 222];

/**
 * Creates a _DelegateAuctioneer_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category DelegateAuctioneer
 * @category generated
 */
export function createDelegateAuctioneerInstruction(
  accounts: DelegateAuctioneerInstructionAccounts,
  args: DelegateAuctioneerInstructionArgs,
  programId = new web3.PublicKey('nightTsJBrqSQfZRbQcgg9WDVKUM78GpwUJwKt64zWr'),
) {
  const [data] = delegateAuctioneerStruct.serialize({
    instructionDiscriminator: delegateAuctioneerInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.auctionHouse,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.auctioneerAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ahAuctioneerPda,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
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
