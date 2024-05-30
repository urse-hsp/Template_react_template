import React, { useLayoutEffect } from 'react';
import { ThemeConfigProvider } from '@infte/components';
import Router from '@/router';
import { resources } from '@/locales';
import { useTranslation } from 'react-i18next';
// import {
//   StyleProvider,
//   legacyLogicalPropertiesTransformer,
// } from '@ant-design/cssinjs';
import { type ReactNode } from 'react';
import { useTheme } from '@infte/components/dist/ThemeModels/useTheme';
import { theme } from 'antd';
const { useToken } = theme;

interface AppPageType {
  children: ReactNode;
}

// theme
const Theme: React.FC<AppPageType> = (props) => {
  const { darkMode: themeType } = useTheme();
  const { token } = useToken();

  useLayoutEffect(() => {
    // 创建一个<style>元素
    const styleElement = document.createElement('style');
    // 定义CSS规则，包含变量
    const cssRule = `
    :root {
      background-color: ${token.colorBgBase};
      color: ${token.colorTextBase};
      --colorBgLayout: ${token.colorBgLayout};
      --colorBgBase: ${token.colorBgBase};
      --colorTextBase: ${token.colorTextBase};
      --colorPrimary: ${token.colorPrimary};
      --colorBorder: ${token.colorBorder};
      --colorSplit: ${token.colorSplit};
      --colorPrimaryBg: ${token.colorPrimaryBg};
    }`;

    // 将CSS规则添加到<style>元素中
    styleElement.appendChild(document.createTextNode(cssRule));
    // 将<style>元素添加到文档头部
    document.head.appendChild(styleElement);
  }, [themeType]);
  return <>{props.children}</>;
};

interface IndexType {
  isVisible?: boolean;
  onClose?: () => any;
}

export const themeColor = '#006FC4';

const Index: React.FC<IndexType> = () => {
  const { i18n } = useTranslation();

  // 可自定义css主题
  // useLayoutEffect(() => {}, []);

  return (
    /**
     * 样式兼容 hashPriority
     * 支持最近 2 个版本的现代浏览器。如果你需要兼容旧版浏览器，请根据实际需求进行降级处理：
     * `hashPriority` 默认为 `low`，配置为 `high` 后  会移除 `:where` 选择器封装
     * 关闭 :where 降权后，你可能需要手动调整一些样式的优先级。
     *
     * CSS 逻辑属性 transformers
     * 为了统一 LTR 和 RTL 样式，Ant Design 使用了 CSS 逻辑属性。例如原 margin-left 使用 margin-inline-start 代替，使其在 LTR 和 RTL 下都为起始位置间距。如果你需要兼容旧版浏览器（如 360 浏览器、QQ 浏览器 等等），可以通过 @ant-design/cssinjs 的 StyleProvider 配置 transformers 将其转换：
     */
    // <StyleProvider
    //   hashPriority="high"
    //   transformers={[legacyLogicalPropertiesTransformer]}
    // >
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
      <Theme>
        <Router />
      </Theme>
    </ThemeConfigProvider>
    // </StyleProvider>
  );
};
export default Index;
