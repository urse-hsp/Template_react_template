import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // 检测浏览器语言
import config from '@/config';

import en_US from './en_US.json';
import zh_CN from './zh_CN.json';
import zh_HK from './zh_HK.json';

// antd-locale
import antd_enUS from 'antd/locale/en_US';
import antd_zhCN from 'antd/locale/zh_CN';
import antd_zh_HK from 'antd/locale/zh_HK';
import { type localeKeys } from '@infte/web3modal-react/dist/locales';

export type { localeKeys };
export type localesType = 'en-US' | 'zh-CN' | 'zh-HK';
const baseLocale: localesType = config.BaseLocale;

export const Web3Modallocale: Record<
  localesType | string,
  localeKeys | string
> = {
  'en-US': 'en-us',
  'zh-CN': 'zh-cn',
  'zh-HK': 'zh-hk',
};

// 国际化管理
export const resources: Record<
  localesType | string,
  {
    translation: any; // 项目语言包
    name: string; //
    locale: any; // antd
    dayjsType: string; // dayjs
  }
> = {
  'zh-CN': {
    translation: zh_CN,
    name: '简体中文',
    locale: antd_zhCN,
    dayjsType: 'zh-cn',
  },
  'zh-HK': {
    translation: zh_HK,
    name: '繁体中文',
    locale: antd_zh_HK,
    dayjsType: 'zh-hk',
  },
  'en-US': {
    translation: en_US,
    name: 'English',
    locale: antd_enUS,
    dayjsType: 'en',
  },
};

// const Web3ModalLocale = dicMap(mapDict(resources, 'value'), 'value');

// export const resourcesItem = resources[baseLocale];

void i18next
  .use(LanguageDetector) // 检测浏览器语言
  .use(initReactI18next)
  .init({
    resources,
    backend: {
      loadPath: './locales/{{lng}}.json', // 2.
    },
    // lng: baseLocale,
    fallbackLng: baseLocale,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
    preload: [baseLocale],
    keySeparator: false,
  });

export default i18next;
