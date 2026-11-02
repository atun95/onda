import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { createAdminApi } from './server/admin-api.js';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/',
  server: {
    port: 5173,
    open: false,
    host: true,
  },
  plugins: [
    {
      name: 'ondata-admin-api',
      configureServer(server) {
        server.middlewares.use(createAdminApi(root));
      },
      configurePreviewServer(server) {
        server.middlewares.use(createAdminApi(root));
      },
    },
  ],
});
