import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: "https://Shoul136.github.io/",
  plugins: [
    react(), 
    VitePWA({
      manifest:{
        display: 'standalone',
        display_override: ['window-control-overlay'],
        lang: 'es-Es',
        name: 'Security Control',
        short_name: 'Ejemplo PWA',
        description: 'Ejemplo de PWA creada usando vite',
        theme_color: '#ffffff',
        background_color: '#d4d4d4',
        icons:[
          {
            src: 'arduino.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          }
        ],
      }
    })
  ]
})
