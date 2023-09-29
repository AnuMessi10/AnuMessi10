import Navbar from "./components/Navbar";
import About from "./sections/About";
import HeroSection from "./sections/Hero";
import Projects from "./sections/Projects";
import { projectCardsConfig } from "./sections/Projects/projects";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <Projects projects={projectCardsConfig} />
                <About />
            </main>
        </>
    );
}
