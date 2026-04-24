import React, { useState } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Faq from "../assets/FaqImage.jpg";
import { ChevronDown } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "Do you guarantee visa approval?",
      answer: "No. Visa decisions are made by embassies. We provide guidance to prepare strong applications, but final decisions are not ours.",
    },
    {
      id: 2,
      question: "Is visa support included?",
      answer: "Visa support is a separate paid service...",
    },

    {
      id: 3,
      question: " Is travel insurance required?",
      answer: "Yes. Travel insurance is mandatory for all travelers.",
    },

    {
      id: 4,
      question: " Do you handle hospital payments?",
      answer: "Yes, optionally. We can coordinate and handle payments or guide clients who prefer to manage independently.",

   



      
    }
     
  ];

  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <Hero
        image={Faq}
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services and travel planning."
        className="h-[40vh] md:h-[60vh]"
      />

      <div className="max-w-4xl mx-auto py-10 px-4 md:px-20">
        <h2 className="text-2xl text-center font-bold mb-4 text-primary font-playfair">
          What services do you offer?
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          We provide comprehensive travel planning and coordination services,
          including visa assistance, flight booking, accommodation arrangements,
          and local support.
        </p>

        {/* FAQ Section */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border rounded-lg p-4 cursor-pointer"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="flex justify-between items-center w-full"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      
        <div className=' text-center py-20 bg-primary'>
          <h1 className='text-3xl font-playfair mb-2 text-white '>Still have questions?</h1>
          <p className='px-4 text-white'>Our team is here to provide clear guidance and support for your travel plans. <br/> Reach out to us and get the answers you need to move forward with confidence.</p>
            <a href="/contact" className='text-primary py-2 px-4 mt-10 font-inter inline-block font-medium hover:bg-hover bg-accent transition 
          duration-300 rounded-lg
          text-center mx-auto'>
            Contact Us
        </a>
        </div>

      <Footer />
    </div>
  );
}

export default FAQ;