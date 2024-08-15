import React, { useState } from 'react'
import ProjectCard from '../extras/ProjectCard'
import "./landing.css"

function Projects() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectSlides = [
    { side: true, title: "Proyecto 1" },
    { side: false, title: "Proyecto 2" },
    { side: true, title: "Proyecto 3" },
    { side: false, title: "Proyecto 4" },
  ];

  // Group the projects in pairs for each slide
  const groupedSlides = [];
  for (let i = 0; i < projectSlides.length; i += 2) {
    groupedSlides.push(projectSlides.slice(i, i + 2));
  }

  const hasSlides = groupedSlides.length > 0;
  const isFirstSlide = hasSlides && currentSlide === 0;
  const isLastSlide = hasSlides && currentSlide === groupedSlides.length - 1;

  const handleNextSlide = () => {
    if (!isLastSlide) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % groupedSlides.length);
    }
  };

  const handlePrevSlide = () => {
    if (!isFirstSlide) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide - 1 + groupedSlides.length) % groupedSlides.length);
    }
  };

  // Reset transition state after transition ends
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div id='proyectos' className="text-gray-400 hero mb-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='h-[100vh] flex justify-center items-center'>
          <div className='relative w-[65vw] h-[100vh]'>
            <h2 className='text-3xl font-bold text-left mb-10'><span className='text-second'>3. </span>Proyectos</h2>
            <button
              onClick={handlePrevSlide}
              disabled={isFirstSlide}
              className="btn btn-circle absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10"
            >
              ❮
            </button>
            <button
              onClick={handleNextSlide}
              disabled={isLastSlide}
              className="btn btn-circle absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10"
            >
              ❯
            </button>
            <div className="carousel flex justify-center">
              <div className="relative flex flex-col items-center w-full">
                {groupedSlides[currentSlide].map((project, index) => (
                  <div key={index} className="p-2">
                    <ProjectCard side={project.side} title={project.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default Projects
