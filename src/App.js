import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Posts from "./pages/Search";
import NewPost from "./pages/PostDetail";
import NewPost from "./pages/NewPost";

function App() {
    return (
        <Routes>
            <Route excat path="/" element={<Home />} />
            <Route excat path="/home" element={<Home />} />
            <Route excat path="/dashboard" element={<Dashboard />} />
            <Route excat path="/profile" element={<Profile />} />
            <Route excat path="/posts" element={<Posts />} />
            <Route excat path="/postdetail" element={<PostDetail />} />
            <Route excat path="/newPost" element={<NewPost />} />
        </Routes>
    );
}

export default App;
