import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hexschool-resume/",
  plugins: [react()],
  optimizeDeps: {
    include: ["@workspace/ckeditor5-custom-build"],
  },
  build: {
    commonjsOptions: {
      include: [/@workspace\/ckeditor5-custom-build/, /node_modules/],
    },
  },
});
