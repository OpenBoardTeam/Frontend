import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import PostDetail from "./pages/PostDetail";
import NewPost from "./components/newpost/NewPost";
import LegalDocuments from "./pages/LegalDocuments";

function App() {
    return (
        <Routes>
            <Route excat path="/" element={<Home />} />
            <Route excat path="/home" element={<Home />} />
            <Route excat path="/dashboard" element={<Dashboard />} />
            <Route excat path="/profile" element={<Profile />} />
            <Route excat path="/search" element={<Search />} />
            <Route excat path="/postdetail" element={<PostDetail />} />
            <Route excat path="/newpost" element={<NewPost />} />
            <Route excat path="/legaldocuments" element={<LegalDocuments />} />
        </Routes>
    );
}

export default App;
