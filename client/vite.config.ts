import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://backend-study-one.vercel.app/',
  //       changeOrigin: true,
  //     },
  //   },
  // },
})