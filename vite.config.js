import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["react-chat-engine-advanced"],
    },
  },
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
});
