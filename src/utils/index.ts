import {
  localStorage,
  byteLength,
  JudgmentBytes,
  substringLength,
  isUrl,
  getFileType,
} from '@infte/utils';

export {
  localStorage,
  byteLength,
  JudgmentBytes,
  substringLength,
  isUrl,
  getFileType,
};
export function numConvert(num: number | string) {
  const newNum = Number(num) ?? 0;
  if (newNum >= 10000) {
    return `${Math.round(newNum / 1000) / 10} 'W'`;
  } else if (newNum >= 1000) {
    return `${Math.round(newNum / 100) / 10} 'K'`;
  } else {
    return newNum;
  }
}
