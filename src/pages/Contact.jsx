import React from "react";
import { FaWhatsapp, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Hero from "../components/Hero";
import ContactUs from "../assets/ContactUs.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  return (
     <>
     <Hero
       image={ContactUs}
       title={"Contact Us"}
       description={"Get in touch with us for any inquiries or assistance."}
         className="h-[40vh] md:h-[60vh] "
      />




    <section className="bg-[#f5f3ef] py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE */}
        <div className="space-y-10">
          
          {/* WhatsApp */}
                <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4"
                >
                <div className="bg-white text-green-600 p-3 rounded-full">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-gray-600 text-sm">
                  Reach out on WhatsApp for quick responses and personalized guidance.<br/>
                  <span className="text-green-500 italic">Chat with us</span>
                  </p>
                </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@travelcompany.com"
                  className="flex items-start gap-4"
                >
                  <div className="bg-white text-black p-3 rounded-full">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600 text-sm">
                Send us a detailed inquiry and we'll respond within 24 hours.
              </p>
            </div>
          </a>

        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-6">Send an Inquiry</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your travel plans..."
              className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 rounded-md flex items-center justify-center gap-2 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

      </div>
  </section>
      <Footer />
     </>
  

  );
};

export default Contact;