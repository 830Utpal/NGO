import { useRef, useEffect, useState } from "react";

const sectors = [
  {
    title: "Education",
    imgUrl: "/edu.png",
    description:
      "Providing quality education and resources to underserved communities. We build schools, train teachers, distribute books, and mentor students to empower the next generation.",
    extra:
      "Our programs also focus on digital literacy, scholarship opportunities, and lifelong learning initiatives for all ages.",
    headingClass: "text-blue-900 text-3xl text-center font-semibold mb-4",
  },
  {
    title: "Health",
    imgUrl: "/health.png",
    description:
      "Healthcare access, awareness campaigns, and wellness programs for all ages. From immunization drives to mental health support, we care for whole communities.",
    extra:
      "Our health outreach includes mobile clinics, nutrition education, maternal and child health, and preventive care.",
    headingClass: "text-blue-500 text-3xl text-center font-semibold mb-4",
  },
  {
    title: "Environment",
    imgUrl: "/env.png",
    description:
      "Promoting environmental sustainability through conservation efforts, clean energy projects, tree planting campaigns, and education on climate change.",
    extra:
      "We engage communities in sustainable farming, waste reduction, water conservation, and renewable energy adoption.",
    headingClass: "text-green-600 text-3xl text-center font-semibold mb-4",
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
      entries.forEach((entry) => {
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

  const gradient = "linear-gradient(to bottom, #2563eb, #60a5fa, #6ee7b7)";

  return (
    <div className="relative max-w-6xl mx-auto py-20 px-4">
      {/* Vertical progress line */}
      <div className="absolute top-0 left-4 md:left-1/2 transform translate-x-0 md:-translate-x-1/2 h-full w-1 bg-gray-300 rounded-full z-0 overflow-hidden">
        <div
          className="w-full rounded-full transition-all duration-700"
          style={{
            background: gradient,
            height: `${((activeIndex + 1) / sectors.length) * 100}%`,
          }}
        />
      </div>

      <div className="space-y-32 relative z-10">
        {sectors.map((sector, index) => (
          <section
            key={sector.title}
            ref={(el) => (sectionsRef.current[index] = el)}
            data-index={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center pl-10 md:pl-0`}
            style={{ minHeight: "500px" }}
          >
            {/* Image always on top in mobile; alternates on desktop */}
            <div
              className={`${
                index % 2 !== 0 ? "md:order-last" : ""
              } w-full max-h-[380px]`}
            >
              <img
                src={sector.imgUrl}
                alt={sector.title}
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 text-gray-700">
              <h2 className={`${sector.headingClass}`}>{sector.title}</h2>
              <p className="text-lg font-normal mb-2">{sector.description}</p>
              <p className="text-base">{sector.extra}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
