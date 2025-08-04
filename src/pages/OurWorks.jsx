export default function OurWorks() {
  return (
    <section
      id="work"
      className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-emerald-100 py-24 px-6 sm:px-12 lg:px-24"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-edu via-green-600 to-lime-500 mb-16">
        Our Work
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Education Card */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border-t-4 border-blue-700 border-edu hover:shadow-2xl transition-all duration-300">
          <h3 className="text-3xl font-bold text-edu mb-4">📘 Education</h3>
          <p className="text-gray-700 mb-5 text-lg">
            We provide access to quality education for children and adults by constructing schools,
            training teachers, and providing scholarships. Our digital learning initiatives prepare
            communities for a brighter future.
          </p>
          <ul className="text-gray-600 text-base space-y-2 list-disc list-inside pl-2">
            <li>School construction & renovation</li>
            <li>Teacher training programs</li>
            <li>Scholarships & digital literacy</li>
            <li>Community learning centers</li>
          </ul>
        </div>

        {/* Health Card */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border-t-4 border-green-500 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-3xl font-bold text-green-600 mb-4">🩺 Health</h3>
          <p className="text-gray-700 mb-5 text-lg">
            Our health initiatives include free clinics, immunization drives, maternal care, and
            mental health support, reaching the most rural and marginalized.
          </p>
          <ul className="text-gray-600 text-base space-y-2 list-disc list-inside pl-2">
            <li>Mobile health camps</li>
            <li>Nutrition & wellness workshops</li>
            <li>Maternal & child health</li>
            <li>Public health awareness</li>
          </ul>
        </div>

        {/* Environment Card */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border-t-4 border-lime-500 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-3xl font-bold text-lime-600 mb-4">🌿 Environment</h3>
          <p className="text-gray-700 mb-5 text-lg">
            We protect the planet through reforestation, sustainable farming, clean energy advocacy,
            and climate change education for local resilience.
          </p>
          <ul className="text-gray-600 text-base space-y-2 list-disc list-inside pl-2">
            <li>Tree planting & restoration</li>
            <li>Sustainable agriculture training</li>
            <li>Clean energy projects</li>
            <li>Community climate education</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
