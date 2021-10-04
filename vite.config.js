import { defineConfig } from 'vite'

import postcssImport from "postcss-import"
import autoprefixer from 'autoprefixer'


export default ({ mode }) => {
  return defineConfig({
    base: './',
    css: {
      postcss: {
        plugins: [
          postcssImport,
          autoprefixer
        ]
      }
    }
  })
}