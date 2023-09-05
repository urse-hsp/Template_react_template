import React, { memo, useEffect } from 'react';
import { Dropdown, Space } from 'antd';
// import type { MenuProps } from 'antd';
import { resources, type localesType } from '@/locales';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { themeColor } from '@/pages/app';
import { GlobalOutlined } from '@ant-design/icons';

// : MenuProps['items']
const items = (language?: string) => {
  return (
    Object.entries(resources).map((item): any => {
      return {
        key: item[0],
        label: (
          <div
            style={
              item[0] === language
                ? { fontWeight: 'bolder', color: themeColor }
                : {}
            }
          >{`${item[0].split('-')[1].toUpperCase()} ${item[1].name}`}</div>
        ), // toLowerCase,toUpperCase
      };
    }) ?? []
  );
};

interface LanguageProps {
  showName?: boolean;
}

const Language: React.FC<LanguageProps> = (props) => {
  const { showName } = props;
  const { i18n } = useTranslation();

  const handleMenuClick = (e: any) => {
    const key: localesType = e.key;
    i18n.changeLanguage(key);
    dayjs.locale(resources[key]?.dayjsType);
  };
  useEffect(() => {
    const language_Key: string = i18n?.language;
    dayjs.locale(resources[language_Key]?.dayjsType);
  });

  const language: any = items().find(
    (item: any) => item.key === i18n?.language,
  );
  return (
    <Dropdown
      menu={{ items: items(i18n?.language), onClick: handleMenuClick }}
      arrow
      destroyPopupOnHide // 处理首次渲染 首次切换页面 重复渲染一次问题
    >
      <Space>
        {showName && <strong>{language?.label}</strong>}
        <GlobalOutlined style={{ fontSize: '26px' }} className="cursor" />
      </Space>
    </Dropdown>
  );
};
export default memo(Language);
