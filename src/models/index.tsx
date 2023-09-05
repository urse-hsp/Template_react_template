import React from 'react';
import appUserConfigState from './appUserConfigState';

import { Web3Modal } from '@infte/web3modal-react';
import config from '@/config';
import { useTranslation } from 'react-i18next';
import { type localesType } from '@/locales';
const baseLocale: localesType = config.BaseLocale;

// 注意排序
const models = { appUserConfigState };
const modelsData = Object.values(models);

function Web3ReactProvider({ children }: any) {
  return modelsData.reduceRight(
    (children: any, Container: any) => (
      <Container.Provider>{children}</Container.Provider>
    ),
    children,
  );
}

function Store({ children }: any) {
  const { i18n } = useTranslation();
  const language_Key: string = i18n?.language;

  return (
    <Web3Modal
      ethereumClient={{
        chainsList: config.chainsList,
        network_id: config.CHAIN_ID,
        locale: language_Key.toLowerCase() ?? baseLocale.toLowerCase(),
      }}
    >
      <Web3ReactProvider>{children}</Web3ReactProvider>
    </Web3Modal>
  );
}

export default React.memo(Store);
