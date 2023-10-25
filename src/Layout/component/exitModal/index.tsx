import React, { useState } from 'react';
import { Button, Modal, Space, Typography } from 'antd';
import type { ModalProps } from 'antd';
import logo_img from '@/assets/images/logo/logo.png';
import { useWeb3Provider } from '@/hooks_web3';
import style from './index.module.scss';
import { address_formatter } from '@/hooks_web3/utils';
import share_svg from '@/assets/images/icon/share.svg';
const { Text } = Typography;

interface exitModal extends ModalProps {
  view: any;
}

const App: React.FC<exitModal> = (props) => {
  const { account, disconnect } = useWeb3Provider();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {props.view && <div onClick={showModal}>{props.view}</div>}
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className={style.exitModal}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <div className="flex-center">
            <img src={logo_img} alt="" />
          </div>
          <div className="flex-center">
            <div className={style.exitModalAddres}>
              <Text copyable={{ text: account || '' }}>
                {address_formatter(account || '', 6, 3)}
              </Text>
            </div>
          </div>
          <div className="flex-between">
            <Text strong>Network</Text>
            <Text strong>Fibo chain</Text>
          </div>
          <Button
            onClick={disconnect}
            block
            type="primary"
            size="large"
            className={style.exitModalBtn}
          >
            退出钱包
          </Button>
          <div className="flex-center">
            <Space
              className="cursor"
              onClick={() => {
                window.open('https://scan.fibochain.org/');
              }}
            >
              View on fiboscan
              <img src={share_svg} alt="" />
            </Space>
          </div>
        </Space>
      </Modal>
    </>
  );
};

export default App;
