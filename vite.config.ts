import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Only enable componentTagger in development mode
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ Ensures "@/components/..." works in Vercel
    },
  },
  build: {
    outDir: "dist", // 
    sourcemap: false, 
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
}));
