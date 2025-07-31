import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/test/",
  // server: {
  //   proxy: {
  //     "/test/api": {
  //       target: "http://localhost:5000",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/test\/api/, "/api"),
  //     },
  //   },
  // },
  plugins: [react()],
});
