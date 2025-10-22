import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: "http://localhost:4321", // 👈 Adicione esta linha
  integrations: [tailwind(), react()],
});
