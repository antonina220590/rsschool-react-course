/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import {
  configDefaults,
  coverageConfigDefaults,
  defineConfig,
} from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'react-redux/es/exports',
        replacement: resolve(
          __dirname,
          './node_modules/react-redux/lib/exports'
        ),
      },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: 'v8',
      exclude: ['**/./src/test/setup.ts/**', ...coverageConfigDefaults.exclude],
      thresholds: {
        functions: 80,
        branches: 80,
        '**/index.ts': {
          statements: 0,
          functions: 0,
          branches: 0,
          lines: 0,
        },
      },
    },
    css: false,
  },
});
