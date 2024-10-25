import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: '/portfolio',
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Exemples pour découper les chunks des librairies principales
          'vue-vendors': ['vue'],
          'three-vendors': ['three'],
        },
      },
    },
  },
});
