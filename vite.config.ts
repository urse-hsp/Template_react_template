import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './config/postcss.config';

const resolve = (dir) => require('path').resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const production = mode === 'production'; // 正式环境

  return {
    plugins: [react()],
    envDir: './config', // 加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径。
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@package': resolve('./package.json'),
      },
    },
    define: {
      'process.env': {
        REACT_APP_ENV_VITE: mode,
      },
    },
    css: {
      postcss: {
        plugins: postcss,
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: production
          ? {
              // 生产环境时移除console.log()
              drop_console: true,
              drop_debugger: true,
            }
          : {},
      },
    },
    // esbuild: {
    //   pure: ['console.log'], // 删除 console.log
    //   drop: ['debugger'], // 删除 debugger
    // },
  };
});
