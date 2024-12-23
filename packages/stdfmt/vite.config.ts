import type { LibraryFormats } from 'vite'
import path from 'node:path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'

const LIB_NAME_SCOPED = packageJson.name
const LIB_NAME = LIB_NAME_SCOPED.match(/\w+/)?.at(-1) || ''
const LIB_NAME_CAMEL_CASE = LIB_NAME.replace(/-./g, char => char[1].toUpperCase())

const fileName: Partial<Record<LibraryFormats, string>> = {
  es: `index.js`,
  // cjs: `index.cjs`,
  // iife: `index.iife.js`,
}

const abs = (p: string) => path.resolve(__dirname, p)

export default defineConfig({
  plugins: [
    dts({ entryRoot: 'src' }),
  ],
  build: {
    rollupOptions: {
      plugins: [
        // TODO: think about disabling it in ci building env
        visualizer({
          filename: 'bundle_visualized.html',
          template: 'sunburst',
          // open: true,
        }),
      ],
    },
    lib: {
      entry: abs('src/index.ts'),
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
