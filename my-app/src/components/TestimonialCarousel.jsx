import React from "react";

const SLIDE_ANIMATION = {
  enter: 'opacity-0 translate-x-10',
  active: 'opacity-100 z-10 translate-x-0',
  exit: 'opacity-0 z-0 -translate-x-10',
};

function TestimonialCarousel({ testimonials, large }) {
  // Default testimonials if none provided
  const defaultTestimonials = [
    "They don't just manage our account — they think like owners.",
    "They scaled us on Flipkart and Amazon while fixing our returns mess. Legends.",
    "They don't just talk numbers — they explain, optimize, and own it.",
  ];
  
  const testimonialData = testimonials || defaultTestimonials;
  
  const [index, setIndex] = React.useState(0);
  const [prevIndex, setPrevIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1); // 1 for next, -1 for prev (future-proof)
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(index);
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonialData.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [index, testimonialData.length]);
  
  return (
    <div className={`relative h-32 sm:h-36 flex items-center justify-center overflow-hidden ${large ? 'md:h-64 sm:ml-[165px] sm:mt-4' : ''}`}>
      {testimonialData.map((text, i) => {
        let base = 'absolute left-0 right-0 mx-auto min-w-full transition-all duration-700 ease-in-out';
        let state = '';
        if (i === index) {
          state = 'opacity-100 z-10 translate-x-0';
        } else if (i === prevIndex) {
          state = `opacity-0 z-0 ${direction === 1 ? '-translate-x-10' : 'translate-x-10'}`;
        } else {
          state = 'opacity-0 z-0 translate-x-10';
        }
        return (
          <div
            key={i}
            className={`${base} ${state}`}
            style={{ pointerEvents: i === index ? 'auto' : 'none' }}
          >
            <div className={`bg-white border border-green-200 rounded-2xl shadow-xl flex flex-col items-center justify-center min-h-[6rem] sm:min-h-[7rem] ${large ? 'md:px-24 md:py-16 md:min-h-[16rem] md:max-w-2xl' : 'px-6 py-8 sm:px-10 sm:py-10'}`}>
              <span className="text-xl sm:text-2xl text-green-900 italic leading-relaxed">{text}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TestimonialCarousel; 