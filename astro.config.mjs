import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://mejorfibraoptica.site/",
  integrations: [react(), tailwind(), sitemap(), icon()],
  redirects: {
    '/protege-tu-red-guia-paso-a-paso-para-configurar-opendns-en-tu-router-wi-fi/': '/protege-tu-red-configura-opendns/',
    '/proveedor/': '/',
    '/buscar-por-ciudad/': '/internet-en/',
  }
});