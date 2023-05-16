/* eslint-disable @babel/object-curly-spacing */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir:"public/pictures"
  /* build:{
    outDir:"perso",
    minify:,

    rollupOptions:{
      input:["./public/js/essai.js","./public/js/style.scss"],
      output:{
        assetFileNames:`[name].[ext]`,
        chunkFileNames:`[name].[ext]`,
        entryFileNames:`[name].js`,
      }

    }
  }
 */

})
