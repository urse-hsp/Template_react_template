import React, { memo, useState, useEffect } from 'react';
import { Avatar, Grid, Input, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import logo_img from '@/assets/images/logo/logo.png';
import { JudgmentBytes } from '@/utils';
import './index.scss';

const { Search } = Input;
const { useBreakpoint } = Grid;

interface HeaderProps {
  isVisible?: boolean;
  onClose?: () => any;
}

const Leftview = memo(() => {
  const navigate = useNavigate();

  return (
    <div className="flex-item-center flex1">
      <Avatar
        src={logo_img}
        size={42}
        className="cursor root-header-logo"
        onClick={() => {
          navigate('/');
        }}
      />

    </div>
  );
});

const HeaderView: React.FC<HeaderProps> = () => {
  return (
    <nav className="root-header">
      <div className="root-header-main flex-between">
        <Leftview />
        &nbsp;
        <div>right</div>
      </div>
    </nav>
  );
};
export default memo(HeaderView);
