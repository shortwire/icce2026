import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: "./",
	  plugins: [react()],
	  preview: {
		      allowedHosts: ['203.171.240.118'], // allow your host
		      port: 5173, // optional: specify preview port
          host: '0.0.0.0',
		    },
})

