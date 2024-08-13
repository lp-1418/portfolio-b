import React from 'react'
import './App.css';
import About from './components/landing/About';
import Contact from './components/landing/Contact';
import Footer from './components/landing/Footer';
import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import Progress from './components/landing/Progress';
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
        <div className='flex flex-col '>
          <About />
          <Skills />
        </div>
        <Projects />
        <div className="flex flex-col items-center gap-10">
          <Progress />
          <Contact />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
