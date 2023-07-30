import React from 'react';
import { Outlet } from 'react-router';
import Header from './component/header';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import './index.scss';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="app-main">
        <Outlet />
        <FloatButton.Group
          style={{ right: '5%' }}
          // trigger="hover"
          icon={<QuestionCircleOutlined rev={{}} />}
          type="primary"
        >
          {/* <FloatButton
            icon={
              <SyncOutlined
                rev={{}}
                onClick={() => {
                  window.location.reload();
                }}
              />
            }
          /> */}
          <FloatButton.BackTop visibilityHeight={1000} />
        </FloatButton.Group>
      </main>
    </>
  );
};

export default Layout;
