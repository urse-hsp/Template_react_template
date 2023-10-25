import React from 'react';
import styles from './index.module.scss';
import { Avatar, Grid } from 'antd';
import { Loader } from '@/components';
import classNames from 'classnames';
import botton_svg from '@/assets/images/icon/botton.svg';
import wallet_svg from '@/assets/images/icon/wallet.svg';
import wallet_white_svg from '@/assets/images/icon/wallet_white.svg';

import { useTheme } from '@infte/components/dist/ThemeModels';

const { useBreakpoint } = Grid;

export interface DropdownUserBoxProps {
  currentUser: {
    avatar?: string;
    name: string;
  };
  icon?: boolean;
  isShowPopover?: boolean;
  loading?: boolean;
  isBeijingtransparent?: boolean;
  loadingNum?: number;
}

const DropdownUserBox = (props: DropdownUserBoxProps) => {
  const screens = useBreakpoint();
  const {
    currentUser,
    icon = true,
    loading,
    isBeijingtransparent,
    loadingNum,
  } = props;
  const baseLoading = !!loadingNum || loading;
  const { darkMode } = useTheme();

  return (
    <div
      className={classNames(
        styles.dropdownUserBox,
        isBeijingtransparent ? styles.dropdownUserBoxTransparent : null,
      )}
    >
      {baseLoading ? (
        <div style={{ marginLeft: '5px' }}>
          <Loader size="25px" />
        </div>
      ) : currentUser.avatar ? (
        <Avatar src={currentUser.avatar} alt="avatar" />
      ) : (
        <div className={styles.avatarBox}>
          <img
            src={darkMode ? wallet_white_svg : wallet_svg}
            alt=""
            style={{ color: 'red' }}
          />
        </div>
      )}

      <div className={`${styles.name}`}>
        {baseLoading && loadingNum ? (
          <>
            <b>{loadingNum} </b>
            <b>loading...</b>
          </>
        ) : (
          currentUser.name
        )}
      </div>
      {icon && (
        <img
          src={botton_svg}
          alt=""
          style={{
            fontSize: '13px',
            marginRight: '13px',
            marginLeft: !screens.xs ? '' : '6px',
          }}
        />
      )}
    </div>
  );
};

export default DropdownUserBox;
