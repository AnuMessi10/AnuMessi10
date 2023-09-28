import { StaticImageData } from "next/image";

export type Image = {
    img: StaticImageData;
    alt: string;
};

export interface IProjectCard {
    title: string;
    tags: string[];
    description: string;
    image: Image;
    repoLink?: string;
    demoLink?: string;
}
