import contactImage from "../assets/images/hero-bg1.webp"; // Replace with your image path

const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="w-11/12 mx-auto md:px-6 md:px-10 md:my-10 grid grid-cols-1 md:grid-cols-2 md:gap-12 h-screen items-center">
        
        {/* Image Section */}
        <div className="w-full">
          <img
            src={contactImage}
            alt="Contact us"
            className="w-full md:h-screen object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            Fill out the form below and we will get back to you as soon as possible.
          </p>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+234 123 456 7890"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-3 w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
