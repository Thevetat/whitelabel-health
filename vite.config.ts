import path from "path"
import Pages from 'vite-plugin-pages'
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [
        react(),
        Pages({
            dirs: 'src/pages'
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
