import Footer from './components/landing/Footer';
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogArticle from './components/blog/BlogArticle';
import Header from './components/landing/Header';

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-800 to-indigo-950 min-h-[100vh] h-full scroll-smooth">
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
