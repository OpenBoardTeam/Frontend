import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

function App() {
    return (
        <Routes>
            <Route excat path="/" element={<Home />} />
            <Route excat path="/Home" element={<Home />} />
            <Route excat path="/Dashboard" element={<Dashboard />} />
            <Route excat path="/Profile" element={<Profile />} />
            <Route excat path="/Posts" element={<Posts />} />
            <Route excat path="/PostDetail" element={<PostDetail />} />
        </Routes>
    );
}

export default App;
