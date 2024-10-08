import React from 'react'
import SlideInSection from '../components/extras/SlideInSection'
import About from '../components/landing/About'
import Contact from '../components/landing/Contact'
import Hero from '../components/landing/Hero'
import Progress from '../components/landing/Progress'
import Projects from '../components/landing/Projects'
import Skills from '../components/landing/Skills'

function Home() {
  return (
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
      <div className="flex text-gray-400 flex-col xl:items-center xl:justify-center gap-10 app-content w-full xl:w-[100vw] ">
        <SlideInSection direction="slide-in">
          <Progress />
          <Contact />
        </SlideInSection>
      </div>
    </div>
  )
}

export default Home
