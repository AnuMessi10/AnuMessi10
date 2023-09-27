import Navbar from "./components/Navbar";
import HeroSection from "./sections/hero";
import Projects from "./sections/Projects";
import { projectCardsConfig } from "./sections/Projects/projects";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <Projects projects={projectCardsConfig} />
            </main>
        </>
    );
}
