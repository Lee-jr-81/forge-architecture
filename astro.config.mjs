import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite"; // 1. The Import

export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // 2. The Plugin
  },
});
