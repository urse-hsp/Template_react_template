import React, { memo } from 'react';
import { Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo_img from '@/assets/images/logo/logo.png';
import { Web3Button } from '@infte/web3modal-react';
import './index.scss';

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
        <div>
          <Web3Button />
        </div>
      </div>
    </nav>
  );
};
export default memo(HeaderView);
