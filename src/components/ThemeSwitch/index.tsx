import React from 'react';
import { useUtils } from '@/models/utils';
import { ThemeSwitch } from '@infte/components';

const ThemeSwitch_ = () => {
  const { setTheme, darkMode } = useUtils();
  return <ThemeSwitch setTheme={() => setTheme()} darkMode={darkMode} />;
};
export default ThemeSwitch_;
