import React from 'react';
import { ThemeConfigProvider } from '@infte/components';
import Router from '@/router';
import { resources } from '@/locales';
import { useTranslation } from 'react-i18next';
// import {
//   StyleProvider,
//   legacyLogicalPropertiesTransformer,
// } from '@ant-design/cssinjs';

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
      <Router />
    </ThemeConfigProvider>
    // </StyleProvider>
  );
};
export default Index;
