import type { LibraryFormats } from 'vite'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'

const LIB_NAME_SCOPED = packageJson.name
const LIB_NAME = LIB_NAME_SCOPED.match(/\w+/)?.at(-1) || ''
const LIB_NAME_CAMEL_CASE = LIB_NAME.replace(/-./g, char => char[1].toUpperCase())

const fileName: Partial<Record<LibraryFormats, string>> = {
  es: `index.js`,
  cjs: `index.cjs`,
  iife: `index.iife.js`,
}

export default defineConfig({
  plugins: [
    dts({ entryRoot: 'src' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: LIB_NAME_CAMEL_CASE,
      fileName: format => fileName[format],
      formats: Object.keys(fileName) as LibraryFormats[],
    },
    minify: 'terser',
    terserOptions: {
      keep_classnames: true,
      keep_fnames: true,
    },
  },
})
