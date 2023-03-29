import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/profile/Profile";
import Project from "./components/project/Project";
import SideBar from "./components/SideBar/SideBar";
import GlobalStyles from "./styles/global";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <GlobalStyles />
                <SideBar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
