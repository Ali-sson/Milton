import React from 'react'
import Hero from '../components/Hero'
import ServiceImage from '../assets/ServiceImage.jpg'
import Footer from '../components/Footer'
import {
  FaMapMarkedAlt,
  FaPassport,
  FaPlaneDeparture,
  FaHotel,
  FaSuitcaseRolling,
  FaHandsHelping,
  FaUserShield,
} from "react-icons/fa";

function Services() {

  const services = [
    {
      id: 1,
      title: "Travel Planning & Coordination",
      description: "We design complete itineraries tailored to your travel purpose, timeline, and budget. From initial consultation to final checklist, every detail is mapped out.",
      icon:  FaMapMarkedAlt,
    },
    {
      id: 2,
      title: "Visa & Documentation Guidance",
      description: "Navigating visa requirements can be complex. We guide you through document preparation, application procedures, and embassy requirements to present the strongest case..",
      icon: FaPassport,
    },
    {
      id: 3,
      title: "Flight Booking Support",
      description: "We find the best routes, connections, and fares for your journey. Whether economy or business class, we handle the logistics so you travel with ease.",
      icon: FaPlaneDeparture,
    },

    {
      id: 4,
      title: "Accommodation Arrangements",
      description: "We curate accommodation options that fit your comfort and budget. From hotels to serviced apartments, we ensure you have a welcoming place to stay.",
      icon: FaHotel,
    
    },

    {
      id: 5,
      title: "Tourism Packages",
      description: " Explore curated tourism experiences designed to give you the best of your destination — from city tours to cultural excursions and adventure activities.",
      icon: FaSuitcaseRolling,
    },
    {
      id: 6,
      title: "Arrival & Local Support",
      description: "We provide on-ground assistance when you land. From airport transfers to local guidance, we ensure a smooth transition to your new environment.",
      icon: FaHandsHelping,
    },
    
    {
      id: 7,
      title: "Specialized Travel Support",
      description: "For medical travel, family reunification, or other specialized journeys, we offer custom coordination tailored to your unique circumstances..",
      icon: FaUserShield,
    },
  ];


  return (
    <>
      <div>
        <Hero
          image={ServiceImage}
          title={"Our Services"}
          description={"Comprehensive support for every stage of your international journey."}
          className="h-[40vh] md:h-[60vh] "
        />
      </div>

      <div className='mx-5 my-10'>
        {services.map((service) => (
          <section key={service.id} className='py-5 w-full px-0 md:px-20 md:max-w-8xl md:m-auto'>
            <div className="flex flex-col gap-4 items-start border-2 border-gray-200 rounded-lg py-6 px-6 hover:shadow-lg transition duration-300 bg-mainBg w-full">
              {service.icon && (
                <service.icon size={50} className="text-accent shrink-0" />
              )}

              <div>
                <h2 className="text-lg font-playfair font-bold text-primary mb-2">
                  {service.title}
                </h2>
                <p className="text-base text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className='text-center py-20 bg-primary'>
        <h1 className='text-3xl font-playfair mb-2 text-white'>Your journey begins here</h1>
        <p className='px-4 text-white'>
          Let us handle the details while you focus on your destination. We make international travel
          <br />
          simple and stress-free.
        </p>
        <a
          href="/packages"
          className='text-primary py-2 px-4 mt-10 font-inter inline-block font-medium hover:bg-hover bg-accent transition duration-300 rounded-lg text-center mx-auto'
        >
          View Packages
        </a>
      </div>

      <Footer />
    </>
  )
}

export default Services