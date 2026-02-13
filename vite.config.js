import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure root deployment
  build: {
    outDir: "dist", // Ensure build output directory is 'dist'
  },
  server: {
    host: "0.0.0.0", // Allow access from localhost and other network interfaces
    port: 3000,
    strictPort: true,
  },
});
