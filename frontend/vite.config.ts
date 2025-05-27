import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Vite default port
    proxy: {
      "/api": {
        target: "http://localhost:3001", // Backend URL
        changeOrigin: true,
      },
    },
  },
});
