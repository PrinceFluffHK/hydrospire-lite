// import logo from "./logo.svg";
import "./assets/scss/App.scss";
import { Routes, Route, BrowserRouter, HashRouter, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";

function App() {
    return (
        <div className="">
            <HashRouter>
                    <Link to="/team">Team</Link>
                    <Link to="/">Home</Link>
                <Routes>
                    <Route exact path="/team" Component={Team} />
                    <Route exact path="/" Component={Home} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
