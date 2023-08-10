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
  LOCATION_ID: string; // 网络位置
  SOCIAL_CONTRACTS_KEY: string; // 合约kei json
}
interface BaseConfigType extends BaseDataType {
  env: string | undefined;
  version: string;
  BaseLocale: localesType;
  BASE_NETWORK_ID: number;
  BASE_WALLET_TYPE: string;
  WEBSITE: string;
  precision: number;
  pageSize: number;
}

const BaseData: BaseDataType = {
  BASE_URL: 'https://nestapi.nest3.social',
  CHAIN_ID: chains[0].chainId,
  LOCATION_ID: chains[0].location_id.toString(),
  chainsList: chains,
  SOCIAL_CONTRACTS_KEY: 'social',
};
if (env === 'development') {
  // 建峰 //192.168.1.22:8888
  // 坤荣 //192.168.1.109:8888
  BaseData.BASE_URL = '//192.168.1.22:8888';
} else if (env === 'test') {
  BaseData.BASE_URL = 'https://nestapi.hzroc.art';
  BaseData.SOCIAL_CONTRACTS_KEY = 'text_social';
}

const { BASE_URL, CHAIN_ID, chainsList, LOCATION_ID, SOCIAL_CONTRACTS_KEY } =
  BaseData;
const config: BaseConfigType = {
  // 环境
  env,
  version,
  BASE_URL,
  BaseLocale: 'zh-CN', // 默认语言
  precision: 2,
  WEBSITE: 'Next',
  pageSize: 5,

  /**
   * @deprecated web3Modal
   */
  BASE_NETWORK_ID: CHAIN_ID,
  BASE_WALLET_TYPE: 'MetaMask',
  chainsList, // 支持链
  LOCATION_ID,

  CHAIN_ID, // 主网
  SOCIAL_CONTRACTS_KEY,
};
export default config;
