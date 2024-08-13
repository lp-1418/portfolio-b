import About from './components/landing/About';
import Contact from './components/landing/Contact';
import Footer from './components/landing/Footer';
import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import Progress from './components/landing/Progress';
import Projects from './components/landing/Projects';
import Skills from './components/landing/Skills';
import "./App.css"
import SlideInSection from './components/extras/SlideInSection';

function App() {


  return (
    <div className="bg-gradient-to-r from-indigo-800 to-indigo-950 min-h-[100vh] scroll-smooth">
      <header>
        <Header />
      </header>

      <div>
        <Hero />
        <div className='flex flex-col app-content'>
          <SlideInSection direction="slide-in">
            <About />
            <Skills />
          </SlideInSection>
        </div>
        <div className='app-content'>
          <SlideInSection direction="slide-in">
            <Projects />
          </SlideInSection>
        </div>
        <div className="flex flex-col items-center gap-10 app-content">
          <SlideInSection direction="slide-in">
            <Progress />
            <Contact />
          </SlideInSection>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
