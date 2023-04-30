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
 * @category Sell
 * @category generated
 */
export type SellInstructionArgs = {
  tradeStateBump: number;
  freeTradeStateBump: number;
  programAsSignerBump: number;
  buyerPrice: beet.bignum;
  tokenSize: beet.bignum;
};
/**
 * @category Instructions
 * @category Sell
 * @category generated
 */
export const sellStruct = new beet.BeetArgsStruct<
  SellInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['tradeStateBump', beet.u8],
    ['freeTradeStateBump', beet.u8],
    ['programAsSignerBump', beet.u8],
    ['buyerPrice', beet.u64],
    ['tokenSize', beet.u64],
  ],
  'SellInstructionArgs',
);
/**
 * Accounts required by the _sell_ instruction
 *
 * @property [] wallet
 * @property [_writable_] tokenAccount
 * @property [] metadata
 * @property [] authority
 * @property [] auctionHouse
 * @property [_writable_] auctionHouseFeeAccount
 * @property [_writable_] sellerTradeState
 * @property [_writable_] freeSellerTradeState
 * @property [] programAsSigner
 * @category Instructions
 * @category Sell
 * @category generated
 */
export type SellInstructionAccounts = {
  wallet: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  metadata: web3.PublicKey;
  authority: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  auctionHouseFeeAccount: web3.PublicKey;
  sellerTradeState: web3.PublicKey;
  freeSellerTradeState: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  programAsSigner: web3.PublicKey;
  rent?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const sellInstructionDiscriminator = [51, 230, 133, 164, 1, 127, 131, 173];

/**
 * Creates a _Sell_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Sell
 * @category generated
 */
export function createSellInstruction(
  accounts: SellInstructionAccounts,
  args: SellInstructionArgs,
  programId = new web3.PublicKey('nightTsJBrqSQfZRbQcgg9WDVKUM78GpwUJwKt64zWr'),
) {
  const [data] = sellStruct.serialize({
    instructionDiscriminator: sellInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.wallet,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
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
      pubkey: accounts.sellerTradeState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.freeSellerTradeState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.programAsSigner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
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
