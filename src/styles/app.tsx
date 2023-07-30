import React, { type ReactNode, useLayoutEffect } from 'react';
import { ConfigProvider, theme } from 'antd';
import utils from '@/models/utils';
import { useTranslation } from 'react-i18next';
import { resources } from '@/locales';
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from '@ant-design/cssinjs';
const { useToken } = theme;

interface AppPageType {
  children: ReactNode;
}

const algorithmList: any = {
  dark: theme.darkAlgorithm,
  light: theme.defaultAlgorithm,
};

const App: React.FC<AppPageType> = (props) => {
  const { theme: themeType } = utils.useContainer();
  const { token } = useToken();

  // colorPrimary // 主题色
  // colorSuccess // 成功色
  // colorWarning // 警告色
  // colorError // 危险/报错

  // colorWhite // 不随主题变化的纯白色
  // colorText 文本颜色

  // colorBorder // 边框
  // colorBgElevated// 盒子容器背景
  // colorBgBase // 背景颜色
  useLayoutEffect(() => {
    const r: any = document.querySelector(':root');
    r.style.backgroundColor = token.colorBgBase; // 背景色
    r.style.color = token.colorTextBase; // 文字色
    r.style.setProperty('--colorBgLayout', token.colorBgLayout); // 页面布局色
    r.style.setProperty('--colorBgBase', token.colorBgBase); // 背景色梯度的基础变量
    r.style.setProperty('--colorTextBase', token.colorTextBase); // 文本色梯度的基础变量
    r.style.setProperty('--colorPrimary', token.colorPrimary); // 主题色
    r.style.setProperty('--colorBorder', token.colorBorder); // 边框颜色
    r.style.setProperty('--colorSplit', token.colorSplit); // 分割线
    r.style.setProperty('--colorPrimaryBg', token.colorPrimaryBg); // 主色浅色背景颜色，一般用于视觉层级较弱的选中状态。

    // colorBorderBg边框背景
  }, [themeType]);

  return <>{props.children}</>;
};

export const themeColor = '#006FC4';
const AppPage: React.FC<AppPageType> = (props) => {
  const { theme: themeType } = utils.useContainer();
  const { i18n } = useTranslation();

  const algorithm = algorithmList[themeType];
  return (
    // 关闭 :where 降权后，你可能需要手动调整一些样式的优先级。
    <StyleProvider
      hashPriority="high"
      transformers={[legacyLogicalPropertiesTransformer]}
    >
      <ConfigProvider
        csp={{ nonce: 'YourNonceCode' }}
        locale={resources[i18n.language]?.locale}
        theme={{
          algorithm: [algorithm],
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
        <App>{props.children}</App>
      </ConfigProvider>
    </StyleProvider>
  );
};
export default AppPage;
