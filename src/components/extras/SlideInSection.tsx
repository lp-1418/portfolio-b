import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function SlideInSection({ children, direction }) {
  const elementRef = useIntersectionObserver(
    () => {
      if (elementRef.current) {
        elementRef.current.classList.add(direction);
      }
    },
    { threshold: 0.1 } // Opciones del observador
  );

  return (
    <div ref={elementRef} className={`opacity-0`}>
      {children}
    </div>
  );
}

export default SlideInSection;
