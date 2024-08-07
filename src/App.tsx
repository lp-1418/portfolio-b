import React from 'react'
import './App.css';
import About from './components/landing/About';
import Footer from './components/landing/Footer';
import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import Projects from './components/landing/Projects';
import Skills from './components/landing/Skills';


function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-800 to-indigo-950 min-h-[100vh]">
      <header>
        <Header />
      </header>

      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
