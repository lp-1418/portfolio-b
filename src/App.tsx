import Footer from './components/landing/Footer';
import Header from './components/landing/Header';
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';
import Blog from './pages/Blog';

function App() {
  const [isAuth, setIsAuth] = useState(false);



  return (
    <div className="bg-gradient-to-r from-indigo-800 to-indigo-950 min-h-[100vh] scroll-smooth">
      <Router>
        <header>
          <Header isAuth={isAuth} setIsAuth={setIsAuth} />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="blog" element={<Blog />} />
        </Routes>


        <footer>
          <Footer />
        </footer>

      </Router>
    </div>
  );
}

export default App;
