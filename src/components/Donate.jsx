export default function Donate() {
  return (
    <section className="bg-blue-600 text-white py-12 px-4 sm:px-6 md:px-10 rounded-xl max-w-4xl mx-auto my-16 sm:my-20 shadow-lg text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight">
        Support Our Cause
      </h2>
      <p className="text-base sm:text-lg mb-6 sm:mb-7 leading-relaxed">
        Your donation empowers underserved communities with quality education, health, and environmental initiatives.
        <br />
        <span className="block font-semibold mt-3">
          Give today to help us build a brighter, healthier, and greener tomorrow.
        </span>
      </p>
      <button
        className="bg-yellow-400 text-green-900 font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow hover:bg-yellow-300 transition text-lg sm:text-xl"
        // onClick={() => window.open('https://your-payment-link.com', '_blank')}
      >
        Donate Now
      </button>
    </section>
  );
}
