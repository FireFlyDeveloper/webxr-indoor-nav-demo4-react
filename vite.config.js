import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const certDir = path.resolve(__dirname, '.certs');
const cert = {
  key: fs.readFileSync(path.join(certDir, 'key.pem')),
  cert: fs.readFileSync(path.join(certDir, 'cert.pem')),
};

// https://vitejs.dev/config/server-options.html#server-https
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    https: cert,
    allowedHosts: ['nav.ffly.site', '.ffly.site', 'localhost', '127.0.0.1', 'homelab.local'],
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    https: cert,
  },
});
