import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure root deployment
  build: {
    outDir: "dist", // Ensure build output directory is 'dist'
  },
  server: {
    host: "127.0.0.1", // Restrict access to localhost
    port: 3000,
    strictPort: true,
  },
});
