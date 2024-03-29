import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   "/api": {
    //     target: 'https://inventory-billing-app-backend-roes.onrender.com',
    //     secure: false,
    //   },
    // },
  },

  plugins: [react()],
});

//
// 'https://inventory-billing-app-backend-roes.onrender.com'
