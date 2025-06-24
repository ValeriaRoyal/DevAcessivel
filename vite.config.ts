import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ignora avisos durante o build
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignora avisos específicos
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        // Use o comportamento padrão para outros avisos
        warn(warning);
      }
    }
  }
})
