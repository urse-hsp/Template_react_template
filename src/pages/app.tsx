import React from 'react';
import { ThemeConfigProvider } from '@infte/components';
import Router from '@/router';
import { resources } from '@/locales';
import { useTranslation } from 'react-i18next';

interface IndexType {
  isVisible?: boolean;
  onClose?: () => any;
}

export const themeColor = '#006FC4';

const Index: React.FC<IndexType> = () => {
  const { i18n } = useTranslation();

  return (
    <ThemeConfigProvider
      locale={resources[i18n.language]?.locale}
      theme={{
        token: {
          // colorPrimary: themeColor,
          // colorLink: themeColor,
        },
        components: {
          Button: {
            colorPrimary: themeColor,
          },
          Switch: {
            colorPrimary: themeColor,
          },
        },
      }}
    >
      <Router />
    </ThemeConfigProvider>
  );
};
export default Index;
