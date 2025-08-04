const testimonials = [
  {
    quote: "EduHealthEnv provided incredible support to our community. Their educational programs have truly changed lives.",
    author: "Samantha Lee",
    role: "Community Leader"
  },
  {
    quote: "The health camps organized by EduHealthEnv have improved access to medical care in rural areas. Truly remarkable work.",
    author: "Dr. Mark Benson",
    role: "Medical Volunteer"
  },
  {
    quote: "Their environment initiatives inspired our youth to participate actively in conservation efforts. It's making a real difference.",
    author: "Priya Patel",
    role: "Environmentalist"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {testimonials.map(({ quote, author, role }, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <p className="text-gray-700 italic mb-6">"{quote}"</p>
            <h3 className="font-semibold text-lg">{author}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
