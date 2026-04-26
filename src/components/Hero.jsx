import React from 'react'
import Image from '../assets/hero-travel.jpg'



function Hero({ image, subtitle, title, description, showButtons, className }){
  return (
   <div
      style={{ backgroundImage: `url(${image})` }}
      className={`bg-cover bg-center relative items-center flex flex-col justify-start px-0 py-30 ${className || ""}`}
    >

    {/* Overlay */}
   <div className='absolute inset-0 bg-[#0B3D91]/70'></div>

  <div className='z-10 text-center flex flex-col items-center justify-center mt-20 w-full px-4'>
  
  <p data-aos="fade-up" data-aos-delay="50" 
     className='text-yellow-400 text-xs mb-4 md:mt-20 tracking-[0.25em] font-bold'>
    {/* MILTON SERVICES */}
    {subtitle}
  </p>

  <h1 data-aos="fade-in" data-aos-delay="100"  
      className={`w-full text-white text-4xl md:text-6xl lg:text-7xl font-bold font-playfair tracking-wide whitespace-pre-line`}>
    {/* Trusted international  <br/> Travel Support */}
    {title}
  </h1>

  <p data-aos="fade-up" data-aos-delay="200"  
     className='font-inter text-white mx-auto md:mt-6 mt-2 max-w-3xl text-lg '>
    {/* From planning to arrival, we help you navigate every step of your international
     journey with clarity and confidence. */}
      {description}
  </p>
  
{showButtons && (
  <div className="mt-6 flex flex-col md:flex-row w-full   gap-4 justify-center ">
    <a href="/packages" className='bg-[#D4AF37] text-[#0B3D91] px-6 py-3 rounded-md hover:bg-[#B8962E] transition duration-300 font-inter font-medium'>
      View Packages
    </a>
    <a href="/contact" className='bg-white text-primary px-10 py-3 rounded-md hover:bg-hover hover:text-white transition duration-300 font-inter font-medium'>
      Book Consultation
    </a>
  </div>
)}
</div>
    </div>
  )
}

export default Hero