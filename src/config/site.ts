export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Code-Image",
    description: "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Image",
            href: "/",
        },
        {
            label: "Docs",
            href: "/docs",
        },
        {
            label: "Blog",
            href: "/blog",
        },
    ],
    navMenuItems: [
        {
            label: "Image",
            href: "/",
        },
        {
            label: "Docs",
            href: "/docs",
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label:"Sponsor",
            href: "/sponsor",
            icon: "love"
        }
    ],
    links: {
        github: "https://github.com/frontio-ai/heroui",
        twitter: "https://twitter.com/hero_ui",
        docs: "https://heroui.com",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
    },
};
