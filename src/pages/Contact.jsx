export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-xl mx-auto text-gray-700 bg-white rounded-3xl shadow-xl"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-center text-edu">
        Contact Us
      </h2>
      <p className="mb-10 text-center text-gray-800 font-medium leading-relaxed">
        We'd love to hear from you! Reach out to learn more about our programs, volunteer opportunities, partnerships, or how to support us.
      </p>
      <form className="space-y-8">
        <div>
          <label htmlFor="name" className="block mb-3 font-semibold text-gray-800">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-lg border border-gray-300 px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-edu focus:border-transparent transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-3 font-semibold text-gray-800">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-lg border border-gray-300 px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-edu focus:border-transparent transition"
            placeholder="Your email address"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-3 font-semibold text-gray-800">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full rounded-lg border border-gray-300 px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-edu focus:border-transparent transition"
            placeholder="Your phone number (optional)"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-3 font-semibold text-gray-800">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className="w-full rounded-lg border border-gray-300 px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-edu focus:border-transparent transition"
            placeholder="Subject of your message"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-3 font-semibold text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            className="w-full rounded-lg border border-gray-300 px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-edu focus:border-transparent transition resize-none"
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          className="bg-edu text-white rounded-lg px-8 py-4 font-semibold hover:bg-blue-700 transition w-full"
        >
          Send Message
        </button>
      </form>
      <div className="mt-12 text-center text-gray-500 text-base">
        <p className="mb-1"><span className="font-semibold">Email:</span> contact@eduhealthenv.org</p>
        <p className="mb-1"><span className="font-semibold">Phone:</span> +1 (234) 567-8901</p>
        <p><span className="font-semibold">Address:</span> 123 NGO Lane, City, Country</p>
      </div>
    </section>
  );
}
