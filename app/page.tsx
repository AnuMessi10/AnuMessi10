import Navbar from "./components/Navbar";
import HeroSection from "./sections/hero";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
            </main>
        </>
    );
}
