import Navbar from "./components/Navbar";
import About from "./sections/About";
import HomeSection from "./sections/Home";
import Projects from "./sections/Projects";
import { projectCardsConfig } from "./sections/Projects/projects";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HomeSection />
                <Projects projects={projectCardsConfig} />
                <About />
            </main>
        </>
    );
}
