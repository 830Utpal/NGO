export default function Donate() {
  return (
    <section className="bg-blue-600 text-white py-16 px-6 rounded-xl max-w-3xl mx-auto my-20 shadow-lg text-center">
      <h2 className="text-4xl font-bold mb-5 tracking-tight">Support Our Cause</h2>
      <p className="text-lg mb-7">
        Your donation empowers underserved communities with quality education, health, and environmental initiatives.
        <br />
        <span className="block font-semibold mt-3">
          Give today to help us build a brighter, healthier, and greener tomorrow.
        </span>
      </p>
      <button
        className="bg-yellow-400 text-green-900 font-bold px-10 py-4 rounded-full shadow hover:bg-yellow-300 transition text-xl"
        // onClick={() => window.open('https://your-payment-link.com', '_blank')}
      >
        Donate Now
      </button>
    </section>
  );
}
