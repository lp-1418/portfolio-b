import Footer from './components/landing/Footer';
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import { useState } from 'react';
import Blog from './pages/Blog';
import BlogArticle from './components/blog/BlogArticle';
import Header from './components/landing/Header';

function App() {
  const [isAuth, setIsAuth] = useState(false);



  return (
    <div className="bg-gradient-to-r from-indigo-800 to-indigo-950 min-h-[100vh] scroll-smooth">
      <Router>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} >
          </Route>
          <Route path="blog/:blogTitle" element={<BlogArticle />} />
        </Routes>


        <footer>
          <Footer />
        </footer>

      </Router>
    </div>
  );
}

export default App;
