import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                theme_color: '#242424',
                icons: [
                    {
                        src: '/192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    }
                ]
            }
        })
    ]
})
