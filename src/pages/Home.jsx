import React from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import AboutUs from '../assets/AboutUs.jpg'

import Image from '../assets/hero-travel.jpg'

import {
  FaMapMarkedAlt,
  FaPassport,
  FaPlaneDeparture,
  FaHotel,
  FaSuitcaseRolling,
  FaHandsHelping,
  FaUserShield,
} from "react-icons/fa";

import Footer from '../components/Footer';


function Home() {

  const services = [
    {
      id: 1,
      title: "Travel Planning & Coordination",
      description: "End-to-end itinerary design tailored to your needs.",
      icon:  FaMapMarkedAlt,
    },
    {
      id: 2,
      title: "Visa & Documentation",
      description: "Expert guidance to prepare strong applications.",
      icon: FaPassport,
    },
     {
      id: 3,
      title: "Flight Booking Support",
      description: "Best routes and fares for your journey.",
      icon: FaPlaneDeparture,
    },

   {
      id: 4,
      title: "Accommodation Arrangements",
      description: "Curated stays that fit your comfort and budget.",
      icon: FaHotel,
    },
     {
      id: 5,
      title: "Tourism Packages",
      description: "Handpicked experiences at your destination.",
      icon: FaSuitcaseRolling,
    },
     {
      id: 6,
      title: "Arrival & Local Support",
      description: "On-ground assistance when you land.",
      icon: FaHandsHelping,
    },
     {
      id: 7,
      title: "Specialized Travel Support",
      description: "Custom solutions for unique travel needs.",
      icon: FaUserShield,

    },

  ];

  return (
    <>
      <Hero
      className="h-[90vh] md:h-[100vh] "
        image={Image}
        subtitle="MILTON SERVICES"
        title={"Trusted international\n Travel Support"}
        description="From planning to arrival, we help you navigate every step of your international journey with clarity and confidence."
        showButtons={true}
        
      />



<section className='text-center py-20 bg-mainBg'>

  <p data-aos="zoom in" data-aos-delay="200"  className="text-sm tracking-widest text-accent uppercase">
    About Us
  </p>

  <h1 data-aos="fade-up" data-aos-delay="200"  className='text-3xl font-serif font-bold text-primary mt-2'>
    Who We Are
  </h1>

  <div data-aos="fade-up" data-aos-delay="200"  className='flex flex-col lg:flex-row items-center gap-10 mt-10 px-4 md:px-20'>
    
    <img 
      src={AboutUs} 
      alt="About Us" 
      className='w-full lg:w-1/2' 
    />

    <div className="flex flex-col items-center md:items-start">
      
      <p  className='text-base font-inter mt-4 text-center md:text-left max-w-3xl text-[#1A1A1A]'>
        Milton Services provides structured, professional support for international travel, tourism, and family-related journeys. 
        From planning to arrival, we help you navigate every step with clarity and confidence.
      </p>

      <a href="/about" className='text-accent border-2 border-accent py-2 px-6 mt-6 font-inter font-medium bg-white hover:bg-hover hover:text-primary transition duration-300 rounded-lg self-center md:self-start '>
        About Us
      </a>

    </div>

  </div>

</section>


      <section className=' py-5 px-2 bg-mainBg'>
      <div className='text-center bg-mainBg'>
        <p data-aos="zoom in" data-aos-delay="200"  className='text-sm tracking-widest text-accent uppercase font-inter'>
          WHAT WE DO
        </p>
        <h2 data-aos="fade-up" data-aos-delay="220"  className='text-4xl font-playfair mt-4 font-bold text-primary'>Our Services</h2>
        <p data-aos="fade-up" data-aos-delay="250"  className='text-base px-4 font-inter mt-4 text-[1A1A1A]'>
          We provide comprehensive travel support for international journeys, ensuring a smooth and enjoyable
          <br /> from planning to arrival.
        </p>
      </div>

      {/* Cards Section */}
      
        <div data-aos="fade-up" data-aos-delay="200"  className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 px-4 md:px-20 rounded-lg'>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
         
        </div>

        <div className='text-center'> 

          <a href="/services" className=' text-accent border-2 border-accent py-2 px-4 mt-10 font-inter font-medium bg-white hover:bg-hover hover:text-primary transition 
          duration-300 rounded-lg inline-block 
          text-center mx-auto my-10'>
            Learn More
        </a>
        </div>
        </section>
        
        <div className=' text-center py-20 bg-primary'>
          <h1 className='text-3xl font-playfair mb-2 text-white '>Ready to Start Your Journey?</h1>
          <p className='px-4 text-white'>Book a consultation and let us handle the details so you can focus on what matters.</p>
            <a href="/contact" className='text-primary py-2 px-4 mt-10 font-inter inline-block font-medium hover:bg-hover bg-accent transition 
          duration-300 rounded-lg
          text-center mx-auto'>
            Get in Touch
        </a>
        </div>

        <Footer/>
      </>
  
  )
}

export default Home