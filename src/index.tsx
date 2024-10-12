import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter/BrowserRouter,
import App from '@/pages/app';
import reportWebVitals from '@/utils/reportWebVitals';
import ModelsState from '@/models';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import '@/styles/index.scss';

import '@/locales';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-hk';
dayjs.extend(relativeTime);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ModelsState>
      <App />
    </ModelsState>
  </BrowserRouter>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
