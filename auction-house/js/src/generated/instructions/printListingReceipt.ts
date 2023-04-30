/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category PrintListingReceipt
 * @category generated
 */
export type PrintListingReceiptInstructionArgs = {
  receiptBump: number;
};
/**
 * @category Instructions
 * @category PrintListingReceipt
 * @category generated
 */
export const printListingReceiptStruct = new beet.BeetArgsStruct<
  PrintListingReceiptInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['receiptBump', beet.u8],
  ],
  'PrintListingReceiptInstructionArgs',
);
/**
 * Accounts required by the _printListingReceipt_ instruction
 *
 * @property [_writable_] receipt
 * @property [_writable_, **signer**] bookkeeper
 * @property [] instruction
 * @category Instructions
 * @category PrintListingReceipt
 * @category generated
 */
export type PrintListingReceiptInstructionAccounts = {
  receipt: web3.PublicKey;
  bookkeeper: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
  instruction: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const printListingReceiptInstructionDiscriminator = [207, 107, 44, 160, 75, 222, 195, 27];

/**
 * Creates a _PrintListingReceipt_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category PrintListingReceipt
 * @category generated
 */
export function createPrintListingReceiptInstruction(
  accounts: PrintListingReceiptInstructionAccounts,
  args: PrintListingReceiptInstructionArgs,
  programId = new web3.PublicKey('nightTsJBrqSQfZRbQcgg9WDVKUM78GpwUJwKt64zWr'),
) {
  const [data] = printListingReceiptStruct.serialize({
    instructionDiscriminator: printListingReceiptInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.receipt,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.bookkeeper,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.instruction,
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
