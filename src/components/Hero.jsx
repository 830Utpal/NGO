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
    }, 2500); // Change slide every 1.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
   <section className="relative min-h-screen w-full text-white flex flex-col justify-center items-center bg-green-50 overflow-hidden">
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
  {/* Optional overlay */}
  <div className="absolute inset-0 bg-black/40 z-10"></div>

  {/* Text content */}
  <div className="relative z-20 px-6 max-w-3xl text-center p-8">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
      Empowering Communities in Education, Health & Environment
    </h1>
    <p className="mb-8 text-lg">
      Join us in creating sustainable impact through education, health programs, and environmental conservation.
    </p>
    <Link
  to="/work"
  className="inline-block bg-edu px-8 py-3 rounded text-white font-semibold hover:bg-blue-700 transition"
>
  Learn More
</Link>
  </div>
</section>

  );
}
