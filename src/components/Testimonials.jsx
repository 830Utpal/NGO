const testimonials = [
  {
    quote:
      "EduHealthEnv provided incredible support to our community. Their educational programs have truly changed lives.",
    author: "Samantha Lee",
    role: "Community Leader",
  },
  {
    quote:
      "The health camps organized by EduHealthEnv have improved access to medical care in rural areas. Truly remarkable work.",
    author: "Dr. Mark Benson",
    role: "Medical Volunteer",
  },
  {
    quote:
      "Their environment initiatives inspired our youth to participate actively in conservation efforts. It's making a real difference.",
    author: "Priya Patel",
    role: "Environmentalist",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        What People Say
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ quote, author, role }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 sm:p-8 flex flex-col items-center text-center"
          >
            <p className="text-gray-700 italic mb-6 text-base sm:text-lg">
              "{quote}"
            </p>
            <h3 className="font-semibold text-lg sm:text-xl">{author}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
