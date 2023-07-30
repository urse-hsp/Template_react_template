import {
  isAddress,
  address_formatter as ADDRESS_FORMATTER,
  hash_formatter,
  getEthScanPath,
  toReturnState,
  type ethScanPathType,
  type ReturnState,
  type MethodArg,
  urf8_fex,
} from '@infte/web3-utils';

const address_formatter = (address: string, before = 5, after = 3) => {
  return ADDRESS_FORMATTER(address, before, after);
};

export {
  isAddress,
  address_formatter,
  hash_formatter,
  getEthScanPath,
  toReturnState,
  type ethScanPathType,
  type ReturnState,
  type MethodArg,
  urf8_fex,
};
