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
        github: "https://github.com/virtualharsh/code-image",
        sponsor: "https://buymeacoffee.com/harshsonegra",
    },
};
