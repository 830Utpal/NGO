import React, { useState, useEffect } from 'react';

const teamMembers = [
  { name: 'Jane Doe', role: 'Founder & CEO', imgUrl: 'p1.jpg' },
  { name: 'John Smith', role: 'Director of Programs', imgUrl: 'p3.jpg' },
  { name: 'Emily Clark', role: 'Community Outreach', imgUrl: 'p2.jpg' },
  { name: 'Michael Brown', role: 'Financial Officer', imgUrl: 'p3.jpg' },
  { name: 'Linda Johnson', role: 'Volunteer Coordinator', imgUrl: 'p2.jpg' },
  { name: 'Robert Wilson', role: 'Field Operations', imgUrl: 'p1.jpg' },
  { name: 'Susan Lee', role: 'Fundraising Manager', imgUrl: 'p3.jpg' },
  { name: 'Alex Martinez', role: 'Communications Lead', imgUrl: 'p2.jpg' },
  { name: 'Nina Patel', role: 'Project Manager', imgUrl: 'p1.jpg' },
  { name: 'Carlos Gomez', role: 'Data Analyst', imgUrl: 'p3.jpg' }
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((idx) => (idx + 1) % teamMembers.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);

  const displayedMembers = [];
  for (let i = 0; i < cardsPerView; i++) {
    displayedMembers.push(teamMembers[(currentIndex + i) % teamMembers.length]);
  }

  return (
    <section id="team" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Meet Our Team</h2>
      <div className="relative flex justify-center items-center">
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-3 shadow transition"
        >
          &#8592;
        </button>
        <div className="flex flex-1 overflow-hidden space-x-4 px-8">
          {displayedMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 transition-transform duration-500"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 text-center h-full flex flex-col items-center justify-center">
                <img
                  src={member.imgUrl}
                  alt={member.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mb-4 object-cover border-4 border-gray-200"
                />
                <h3 className="font-semibold text-xl sm:text-2xl mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm sm:text-lg">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-3 shadow transition"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
