import { defineConfig, loadEnv } from 'vite'
export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd())
  console.log( env.VITE_BASE); //輸出VITE_BASE的環境變數
  return {
  }
})