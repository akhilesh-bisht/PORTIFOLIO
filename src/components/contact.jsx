import React from "react";

function Contact() {
  return (
    <section className="bg-black py-16" id="contact">
      <h2 className="text-2xl text-center font-semibold">Contact us</h2>
      <div className="container mx-auto flex items-center justify-center mt-9">
        <div className="w-full max-w-lg bg-black p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md text-white bg-transparent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md text-white bg-transparent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md text-white bg-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 transition-all text-sm"
              onClick={() => alert('"this functionality add soon..."')}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
