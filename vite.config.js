import {defineConfig} from 'vite'
export default defineConfig({
    fs: {
      strict: false
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import './src/global/mixins/mixins.scss';`,
        }
      }
  }})