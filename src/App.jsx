import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProjectPage from "./layout/ProjectPage";
import LandingPage from "./layout/LandingPage";
import Layout from "./layout/Layout";
import "./index.css";

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout showWelcome={showWelcome}>
                            <LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />
                        </Layout>
                    }
                />
                <Route
                    path="/project/:id"
                    element={
                        <Layout>
                            <ProjectPage />
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
