import { FC } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter
        {...(process.env.NODE_ENV === 'production' ? { basename: process.env.PUBLIC_URL || '' } : {})}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;