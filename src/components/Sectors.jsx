import { useRef, useEffect, useState } from "react";

const sectors = [
  {
    title: "Education",
    imgUrl: "/edu.png",
    description:
      "Providing quality education and resources to underserved communities. We build schools, train teachers, distribute books, and mentor students to empower the next generation.",
    extra:
      "Our programs also focus on digital literacy, scholarship opportunities, and lifelong learning initiatives for all ages.",
    headingClass: "text-blue-900 text-3xl text-center font-semibold mb-4"
  },
  {
    title: "Health",
    imgUrl: "/health.png",
    description:
      "Healthcare access, awareness campaigns, and wellness programs for all ages. From immunization drives to mental health support, we care for whole communities.",
    extra:
      "Our health outreach includes mobile clinics, nutrition education, maternal and child health, and preventive care.",
    headingClass: "text-blue-500 text-3xl text-center font-semibold mb-4"
  },
  {
    title: "Environment",
    imgUrl: "/env.png",
    description:
      "Promoting environmental sustainability through conservation efforts, clean energy projects, tree planting campaigns, and education on climate change.",
    extra:
      "We engage communities in sustainable farming, waste reduction, water conservation, and renewable energy adoption.",
    headingClass: "text-green-600 text-3xl text-center font-semibold mb-4"
  },
];

export default function AlternatingSectorsWithColoredHeadings() {
  const sectionsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -51% 0px",
      threshold: 0,
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveIndex(index);
        }
      });
    }, options);
    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => {
      sectionsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Build a vertical gradient for the colored fill
  const gradient = "linear-gradient(to bottom, #2563eb, #60a5fa, #6ee7b7)";

  return (
    <div className="relative max-w-6xl mx-auto py-20">
      {/* Vertical line in the middle */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 rounded-full z-0 overflow-hidden">
        <div
          className="w-full rounded-full transition-all duration-700"
          style={{
            background: gradient,
            height: `${((activeIndex + 1) / sectors.length) * 100}%`,
          }}
        />
      </div>

      <div className="space-y-40 relative z-10">
        {sectors.map((sector, index) => {
          const even = index % 2 === 0;
          const mt = index === 1 ? "md:mt-[-25vh]" : "";
          return (
            <section
              key={sector.title}
              ref={el => (sectionsRef.current[index] = el)}
              data-index={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${mt}`}
              style={{ minHeight: "500px" }}
            >
              {even ? (
                <img
                  src={sector.imgUrl}
                  alt={sector.title}
                  className="w-full max-h-[380px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                  style={{ filter: "none", boxShadow: "none" }}
                />
              ) : null}
              <div className="p-6 bg-white rounded-lg border border-gray-200 text-gray-700">
                <h2 className={`text-3xl font-semibold mb-4 ${sector.headingClass}`}>{sector.title}</h2>
                <p className="text-lg font-normal mb-2">{sector.description}</p>
                <p className="text-base">{sector.extra}</p>
              </div>
              {!even ? (
                <img
                  src={sector.imgUrl}
                  alt={sector.title}
                  className="w-full max-h-[380px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                  style={{ filter: "none", boxShadow: "none" }}
                />
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
