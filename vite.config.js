import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Permite que el servidor sea accesible desde la red
    port: 3001, // Puedes cambiarlo al puerto que prefieras
  },
  plugins: [react()],
})
