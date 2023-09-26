import Image from "next/image";
import Typography from "./components/Typography";

export default function Home() {
    return (
        <main className="px-5 flex flex-col min-h-screen items-center justify-center">
            <Typography variant="h1">Coming Soon...</Typography>
            <Typography variant="h2">In a portfolio near you</Typography>
            <Typography variant="body" color="primary">
                Hi, I am Anurag Yadav, a software engineer, full stack
                developer, and a tech enthusiast. I am currently working at
                Mithya Labs as a junior full stack developer.
            </Typography>
        </main>
    );
}
