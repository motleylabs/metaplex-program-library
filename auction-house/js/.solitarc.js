// @ts-check
const path = require('path');
const programDir = path.join(__dirname, '..', 'program');
const idlDir = path.join(__dirname, 'idl');
const sdkDir = path.join(__dirname, 'src', 'generated');
const binaryInstallDir = path.join(__dirname, '.crates');

module.exports = {
  idlGenerator: 'anchor',
  programName: 'auction_house',
  programId: 'nightTsJBrqSQfZRbQcgg9WDVKUM78GpwUJwKt64zWr',
  idlDir,
  sdkDir,
  binaryInstallDir,
  programDir,
};
