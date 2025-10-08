import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",   // ✅ safer than "::", works on all systems
    port: 5173,        // ✅ default Vite port (can change to 8080 if you prefer)
  },
  plugins: [
    react(),
    // You can keep your lovable-tagger here if you need it in dev mode
    // mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // ✅ Allows "@/components/..."
    },
  },
  build: {
    outDir: "dist",          // ✅ standard Vite output
    sourcemap: mode === "development",
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // ✅ ensures React is pre-bundled correctly
  },
}));
