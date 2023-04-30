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
 * @category AuctioneerCancel
 * @category generated
 */
export type AuctioneerCancelInstructionArgs = {
  buyerPrice: beet.bignum;
  tokenSize: beet.bignum;
};
/**
 * @category Instructions
 * @category AuctioneerCancel
 * @category generated
 */
export const auctioneerCancelStruct = new beet.BeetArgsStruct<
  AuctioneerCancelInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['buyerPrice', beet.u64],
    ['tokenSize', beet.u64],
  ],
  'AuctioneerCancelInstructionArgs',
);
/**
 * Accounts required by the _auctioneerCancel_ instruction
 *
 * @property [_writable_] wallet
 * @property [_writable_] tokenAccount
 * @property [] tokenMint
 * @property [] authority
 * @property [**signer**] auctioneerAuthority
 * @property [] auctionHouse
 * @property [_writable_] auctionHouseFeeAccount
 * @property [_writable_] tradeState
 * @property [] ahAuctioneerPda
 * @category Instructions
 * @category AuctioneerCancel
 * @category generated
 */
export type AuctioneerCancelInstructionAccounts = {
  wallet: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  tokenMint: web3.PublicKey;
  authority: web3.PublicKey;
  auctioneerAuthority: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  auctionHouseFeeAccount: web3.PublicKey;
  tradeState: web3.PublicKey;
  ahAuctioneerPda: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const auctioneerCancelInstructionDiscriminator = [197, 97, 152, 196, 115, 204, 64, 215];

/**
 * Creates a _AuctioneerCancel_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AuctioneerCancel
 * @category generated
 */
export function createAuctioneerCancelInstruction(
  accounts: AuctioneerCancelInstructionAccounts,
  args: AuctioneerCancelInstructionArgs,
  programId = new web3.PublicKey('nightTsJBrqSQfZRbQcgg9WDVKUM78GpwUJwKt64zWr'),
) {
  const [data] = auctioneerCancelStruct.serialize({
    instructionDiscriminator: auctioneerCancelInstructionDiscriminator,
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
      pubkey: accounts.auctioneerAuthority,
      isWritable: false,
      isSigner: true,
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
      pubkey: accounts.ahAuctioneerPda,
      isWritable: false,
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
