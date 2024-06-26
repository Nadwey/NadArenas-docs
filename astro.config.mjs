import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "NadArenas",
            social: {
                github: "https://github.com/Nadwey/NadArenas",
            },
            customCss: [
                // Relative path to your custom CSS file
                "./src/styles/custom.css",
            ],
            sidebar: [
                {
                    label: "Guides",
                    autogenerate: { directory: "guides" },
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
            ],
        }),
    ],
});
