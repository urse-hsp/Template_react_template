import chains from './network.chains_support.json';
import { type localesType } from '@/locales';
import { type chainsType } from '@infte/web3modal-react/dist/config';
import packages from '../../package.json';

const { version } = packages;
const VITE_ENV = process.env?.REACT_APP_ENV_VITE; // VITE环境类型变量
const env = VITE_ENV ?? process.env?.REACT_APP_ENV;

console.warn(`当前打包工具${VITE_ENV ? 'vite' : 'webpack'}: ${env}`);

/**
 * @description 系统全局配置 统一调用接入【默认正式环境配置】
 *
 */

export interface contractsType {
  social: string;
}
export type { chainsType };

interface BaseDataType {
  BASE_URL: string;
  CHAIN_ID: number; // 默认链 ID
  chainsList: chainsType[];
}
interface BaseConfigType extends BaseDataType {
  env: string | undefined;
  version: string;
  BaseLocale: localesType;
  BASE_WALLET_TYPE: string;
  WEBSITE: string;
  precision: number;
  pageSize: number;
}

const BaseData: BaseDataType = {
  BASE_URL: '',
  CHAIN_ID: chains[0].chainId,
  chainsList: chains,
};
if (env === 'development') {
  BaseData.BASE_URL = '';
} else if (env === 'test') {
  BaseData.BASE_URL = '';
}

const { BASE_URL, CHAIN_ID, chainsList } = BaseData;
const config: BaseConfigType = {
  // 环境
  env,
  version,
  BASE_URL,
  BaseLocale: 'zh-CN', // 默认语言
  precision: 2,
  WEBSITE: 'Next',
  pageSize: 5,

  // 钱包
  BASE_WALLET_TYPE: 'MetaMask',
  chainsList, // 支持链
  // 主网id
  CHAIN_ID,
};
export default config;
