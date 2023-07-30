import { type dataType } from '@/data';
import config from '@/config';
export const DeliveryMethodDict: any = {};

// 搜索字典
export const SEARCH_TYPE: any = {
  1: 'Post',
  2: 'People',
  3: 'Curation',
  4: 'Node',
};

export const FOLLOWING_DIC: dataType<string> = {
  0: 'Follow',
  1: 'Following',
};

// Fibonacci
export const TARGET_LOCATION_ID: any = {
  1: 'Fibo',
  65: 'okexchain',
  2: 'Bitcoin',
  3: 'Ethereum',
  101: 'BSC',
  102: 'Polygon',
  103: 'Optimism',
  104: 'Arbitrum',
  ...dicMap(config.chainsList, 'chain', 'location_id'),
};

// 当前地址浏览器地址
export const TARGET_LOCATION_EthScanPath: any = {
  ...dicMap(config.chainsList, 'explorers', 'location_id'),
};

const defaultLabelName = 'label'; // 默认name
// 数组转对象(枚举类)
export function dicMap(
  arr: any[] = [],
  label: string = defaultLabelName,
  value: string = 'value',
) {
  return arr.reduce((acc: any, cur: any) => {
    return {
      ...acc,
      [cur[value]]: cur[label],
    };
  }, {});
}

// 对象转数组
export const mapDict = (
  myMap: dataType<any>,
  labelName: string = defaultLabelName,
) => {
  return Object.entries(myMap).map(([value, label]): any => {
    return {
      [labelName]: label,
      value: typeof value === 'string' && isNaN(Number(value)) ? value : +value,
    };
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  dicMap,
  mapDict,
};
