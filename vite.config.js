import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base:"https://thecoderbutcher.github.io/phisiscare",
    plugins: [react()],
  })