import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  { url: "/slide1.jpg", alt: "Children studying in a classroom" },
  { url: "/slide2.jpg", alt: "Community health program" },
  { url: "/slide3.jpg", alt: "Environmental conservation" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={slide.alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 md:px-10 max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Empowering Communities in Education, Health & Environment
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Join us in creating sustainable impact through education, health programs, and environmental conservation.
        </p>
        <Link
          to="/work"
          className="inline-block bg-edu px-6 sm:px-8 py-2.5 sm:py-3 rounded text-white font-semibold hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
