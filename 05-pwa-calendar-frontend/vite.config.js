import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const manifest = {
  filename: 'sw.ts',
  includeAssets: ['*.svg'],
  devOptions: {
    enabled: true,
    type: 'module',
  },
  includeManifestIcons: false,
  injectRegister: false,
  manifest: {
    name: 'YT Playlist Notifier',
    short_name: 'YT Playlist Notifier',
    description: 'Get notifications when YouTube playlists are updated.',
    theme_color: '#ced4da',
    icons: [
      {
        src: 'icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  srcDir: 'src/service-worker',
  strategies: 'injectManifest',
};
// https://vitejs.dev/config/
/* export default defineConfig({
  plugins: [react(), VitePWA(manifest)],
});
 */

export default defineConfig({
  plugins: [react()],
});
