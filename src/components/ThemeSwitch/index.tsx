import React from 'react';
import light_img from './images/light.png';
import dark_img from './images/dark.png';
import style from './index.module.scss';
import { useUtils } from '@/models/utils';
import classNames from 'classnames';

const ThemeSwitch = () => {
  const { setTheme, darkMode } = useUtils();

  return (
    <div
      className={classNames(style.themeSwitch, 'cursor')}
      onClick={() => setTheme()}
    >
      <img src={light_img} alt="" />
      <img src={dark_img} alt="" />
      <div
        className={classNames(
          style.themeSwitchActive,
          !darkMode ? style.light : style.dark,
        )}
      />
    </div>
  );
};
export default ThemeSwitch;
