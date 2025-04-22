import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config

export default defineConfig({
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        [
            "script",
            {
                defer: "",
                "data-domain": "aboutme.johns-world.de",
                src: "https://plausible.johns-world.de/js/script.outbound-links.js",
            },
        ],
    ],
    title: "About John",
    description: "This is a site about me",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: "/JM-Logo.svg",
        nav: [
            { text: "Home", link: "/" },
            { text: "About me", link: "/life/" },
            { text: "My projects", link: "/projects/" },
        ],

        sidebar: {
            "/life/": [
                {
                    text: "My life",
                    items: [{ text: "Overview", link: "/life/" }],
                },
            ],

            "/projects/": [
                { text: "About my projects", link: "/projects/" },
                {
                    text: "My personal projects",
                    collapsed: false,
                    items: [
                        {
                            text: "Overview - Personal",
                            link: "/projects/personal/",
                        },
                        {
                            text: "Home Assistant",
                            link: "/projects/personal/home-assistant",
                        },
                        { text: "VPS", link: "/projects/personal/vps" },
                        {
                            text: "ChronoDiff",
                            link: "/projects/personal/chronodiff",
                        },
                    ],
                },
                {
                    text: "My work projects",
                    collapsed: false,
                    items: [
                        { text: "Overview - Work", link: "/projects/work/" },
                        {
                            text: "PalletPilot",
                            link: "/projects/work/palletpilot",
                        },
                    ],
                },
            ],
        },

        socialLinks: [
            { icon: "linkedin", link: "https://linkedin.com/john-mattheus" },
            { icon: "aboutdotme", link: "https://about.me/john.mattheus" },
            { icon: "nextdotjs", link: "https://aboutjohn.info" },
            { icon: "github", link: "https://github.com/InfiiiinitY" },
        ],

        footer: {
            message: "Powered by VitePress",
        },
    },
});
