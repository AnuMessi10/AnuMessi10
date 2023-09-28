import { IProjectCard } from "@/app/components/ProjectCard/@types";
import retailStore from "@/app/assets/images/RetailStore.png";
import flickr30k from "@/app/assets/images/Flickr30k.png";
import encryptofy from "@/app/assets/images/Encryptofy.png";
import foodSupplyChain from "@/app/assets/images/FoodSupplyChain.png";

export const projectCardsConfig: IProjectCard[] = [
    {
        image: {
            img: foodSupplyChain,
            alt: "Food Supply Chain Traceability Using Hyperledger Fabric",
        },
        title: "Food Supply Chain Traceability Using Hyperledger Fabric",
        description:
            "📲 A mobile app for real-time food product tracking in the supply chain with image capturing and a decentralized architecture by leveraging the power of blockchain.",
        tags: [
            "React Native",
            "TypeScript",
            "CouchDB",
            "Hyperledger Fabric",
            "Docker",
            "Shell",
        ],
        repoLink: "https://github.com/AnuMessi10/hyperledger-food-supply-chain",
    },
    {
        image: {
            img: encryptofy,
            alt: "Encryptofy",
        },
        title: "Encryptofy",
        description:
            "🔒 Aimed at securing your data and privacy to exchange messages securely and confidently, with a robust encryption algorithm and custom key generation mechanism that has got you covered at all times.",
        tags: ["React", "JavaScript", "Bootstrap", "CSS"],
        demoLink: "https://encryptofy.netlify.app/",
        repoLink: "https://github.com/AnuMessi10/encryptofy",
    },
    {
        image: {
            img: flickr30k,
            alt: "Flickr30k - Image Caption Generator",
        },
        title: "Flickr30k - Image Caption Generator",
        description:
            "📸 Confused about captioning your images while sharing them? 🤔💭 Do not worry, encryptofy is here to take away your hassles by generating captions for your images using a deep learning model trained on the Flickr30k dataset.",
        tags: [
            "Python",
            "Deep Learning",
            "Tensorflow",
            "Convolution Neural Networks",
        ],
        repoLink:
            "https://github.com/AnuMessi10/flickr30k-image-caption-generator",
    },
    {
        image: {
            img: retailStore,
            alt: "Retail Store Customer Segmentation",
        },
        title: "Retail Store Customer Segmentation",
        description:
            "🛍 A custom model trained on the behavourial patterns and demographics of customers to segment them into different groups based on their spending habits and other attributes.",
        tags: [
            "Python",
            "Pandas",
            "Numpy",
            "Scipy",
            "K-Means",
            "DBSCAN",
            "Birch",
            "Excel",
        ],
        repoLink: "https://github.com/AnuMessi10/customer-segmentation",
    },
];
