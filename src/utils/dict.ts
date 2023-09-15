import { type dataType } from '@/data';
export const DeliveryMethodDict: any = {};

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
