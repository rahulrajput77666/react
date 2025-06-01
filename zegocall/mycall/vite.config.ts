import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.APP_ID": JSON.stringify(env.APP_ID),
      "process.env.SERVER_SECRET": JSON.stringify(env.SERVER_SECRET),
    },
    plugins: [react()],
  };
});
