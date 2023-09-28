import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Portfolio | Anurag Yadav",
        short_name: "Anurag's Portfolio",
        description:
            "Portfolio of Anurag Yadav, a software engineer and full stack developer in MERN based out of Mumbai, India.",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#DD9C3C",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "48 x 48",
                type: "image/x-icon",
            },
        ],
    };
}
