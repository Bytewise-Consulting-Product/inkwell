import { Route, Routes } from "react-router-dom";
import BlogEditor from "./pages/WriteBlog";
import BackgroundPaths from "./pages/home";
import AllBlogs from "./pages/AllBlogs";
import Documentation from "./pages/documentation";
import BlogDetails from "./pages/BlogDetails";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import UserProfile from "./pages/UserProfile";

export default function Routing() {
  return (
    <Routes>
      <Route path="/user/writeblog" element={<BlogEditor />} />
      <Route path="/" element={<BackgroundPaths />} />
      <Route path="/blogs" element={<AllBlogs />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/blog/:blogid" element={<BlogDetails  />} />
      <Route path="/about" element={<AboutPage  />} />
      <Route path="/contact" element={<ContactPage  />} />
      <Route path="/profile" element={<UserProfile  />} />
    </Routes>
  );
}
