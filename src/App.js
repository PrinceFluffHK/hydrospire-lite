import "./assets/scss/App.scss";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import TopBar from "./components/TopBar";
import Iri from "./components/Iri";
import Contact from "./components/Contact";
import React from "react";

function App() {
    return (
        <div className="">
            <HashRouter>
                <TopBar />
                <Routes>
                    <Route exact path="/team" Component={Team} />
                    <Route exact path="/iri" Component={Iri} />
                    <Route exact path="/contact" Component={Contact} />
                    <Route exact path="/" Component={Home} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
