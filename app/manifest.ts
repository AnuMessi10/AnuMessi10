import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Portfolio | Anurag Yadav",
        short_name: "Anurag's Portfolio",
        description:
            "नमस्ते! 🙏🏻 Anurag Yadav is a software engineer and full stack developer in MERN based out of Mumbai, India.",
        start_url: "/",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#DD9C3C",
        icons: [
            {
                src: "/app/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/app/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
            {
                src: "/app/public/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/app/public/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/app/public/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                src: "/app/public/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
        ],
    };
}
