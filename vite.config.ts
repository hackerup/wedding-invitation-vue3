import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(),
  VitePWA({
    mode: 'development',
    includeAssets: ["favicon.ico"],
    workbox: {
      globPatterns: ['**/*.{html,js,css,json,png,jpeg}'],
      runtimeCaching: [
        {
          urlPattern: /.*/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'music-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            },
          }
        }
      ],
    },
    manifest: {
      name: "Wedding Invitation",
      short_name: "婚礼邀请",
      description: "电子邀请函",
      theme_color: "#DB7093",
      lang: "zh-CN",
      start_url: "/index.html",
      scope: "/",
      background_color: "#FF69B4",
      icons: [
        {
          src: 'icon/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },       {
          src: 'icon/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icon/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ]
    }
  })],
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src'),
      'utils': resolve(__dirname, 'src/utils'),
    },
  }
})
