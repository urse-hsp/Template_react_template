import { useNavigate } from 'react-router-dom';
import React, { memo } from 'react';
import { Avatar, Space } from 'antd';
import logo_img from '@/assets/images/logo/logo.png';
import { Web3Button } from '@infte/web3modal-react';
import { ThemeSwitch } from '@/components';
import Language from '../language';
import { useWeb3Provider } from '@/hooks_web3';
import DropdownBox from '../DropdownBox';
import { address_formatter } from '@/hooks_web3/utils';
import ExitModal from '../exitModal';
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
const RighrView = memo(() => {
  const { active, account } = useWeb3Provider();

  if (!active && !account) {
    return <Web3Button />;
  }

  return (
    <Space>
      <Language />
      <ThemeSwitch />
      <div>
        {account && (
          <ExitModal
            view={
              <DropdownBox
                currentUser={{
                  name: address_formatter(account || ''),
                }}
              />
            }
          />
        )}
      </div>
    </Space>
  );
});

const HeaderView: React.FC<HeaderProps> = () => {
  return (
    <nav className="root-header">
      <div className="root-header-main flex-between">
        <Leftview />
        &nbsp;
        <RighrView />
      </div>
    </nav>
  );
};
export default memo(HeaderView);
