// import logo from "./logo.svg";
import "./assets/scss/App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
