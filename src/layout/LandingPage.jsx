import Home from "../pages/Home";
import About from "../pages/About";
import AnimatedBackground from "../components/Background";
import Navbar from "../components/Navbar";
import Portofolio from "../pages/Portofolio";
import ContactPage from "../pages/Contact";
import WelcomeScreen from "../pages/WelcomeScreen";

import { AnimatePresence } from "framer-motion";
const LandingPage = ({ showWelcome, setShowWelcome }) => {
    return (
        <>
            <AnimatePresence mode="wait">{showWelcome && <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />}</AnimatePresence>

            {!showWelcome && (
                <>
                    <Navbar />
                    <AnimatedBackground />
                    <Home />
                    <About />
                    <Portofolio />
                    <ContactPage />
                </>
            )}
        </>
    );
};

export default LandingPage;
