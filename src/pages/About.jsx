import React from 'react'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import AboutImage from '../assets/aboutImage.jpg'
import AboutPic from '../assets/AboutPic.jpg'
import Footer from '../components/Footer'

import { FaBullseye, FaEye} from "react-icons/fa";


function About() {

const mission = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To become a leading global travel advisory firm, known for delivering clarity, trust, and seamless coordination in international travel experiences.",
     icon: FaBullseye,
  },
  
  {
    id: 2,
    title: "Our Vision",
    description: "To deliver structured, reliable, and personalized travel support that simplifies international journeys and empowers clients to access global opportunities.",
    icon: FaEye,},
];


  return (
    <>
    <div>
      <Hero
       image={AboutImage}
       title={"About Us"}
       description={"Clarity, structure, and professional guidance for every journey."}
         className="h-[40vh] md:h-[60vh] "
      />

      
      <section className='text-center py-20 bg-white'>
      
        <p data-aos="zoom in" data-aos-delay="200"  className="text-sm tracking-widest text-accent uppercase">
          About Us
        </p>
      
        <h1 data-aos="fade-up" data-aos-delay="200"  className='text-3xl font-serif font-bold text-primary mt-2'>
          Who We Are
        </h1>
      
        <div data-aos="fade-up" data-aos-delay="200"  className='flex flex-col lg:flex-row items-center gap-10 mt-10 px-4 md:px-20'>
          
          <img 
            src={AboutPic} 
            alt="About Us" 
            className='w-full lg:w-1/2' 
          />
      
          <div className="flex flex-col items-center md:items-start">
            
            <p  className='text-base font-inter mt-4 text-center md:text-left max-w-3xl text-[#1A1A1A]'>
             Milton Services is a travel and tourism company built to provide structured international travel
              support for individuals and families. We provide clarity, structure, and professional guidance for every journey.
            </p>

            <p className='text-base font-inter text-center md:text-left mt-4 '>Whether you're traveling for tourism, family matters, or specialized purposes, we coordinate every detail so your experience is seamless from start to finish.</p>
      
            <a href='/services' className='text-accent border-2 border-accent py-2 px-6 mt-6 font-inter font-medium bg-white hover:text-primary hover:bg-hover transition duration-300 rounded-lg self-center md:self-start ml-0'>
              Our Services
            </a>
      
          </div>
      
        </div>
      
      </section>

      <div className='grid md:grid-cols-2 gap-20 px-8 md:px-20 py-20 max-w-8xl m-auto bg-mainBg '>
        {mission.map((item)=> (
          <div key={item.id} className='border-2 py-10 px-5 rounded-lg bg-white hover:scale-105 transition duration-300 ' >
            <div>
              {item.icon && <item.icon size={40} className='text-accent mb-4' />}
            </div>
            <h2 className='text-xl font-playfair font-bold text-primary'>{item.title}</h2>
            <p className='mt-4 text-base text-subText'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

     <div className=' text-center py-20 bg-primary'>
          <h1 className='text-3xl font-playfair mb-2 text-white '>Let’s guide your journey forward</h1>
          <p className='px-4 text-white'>We provide clear, structured, and reliable support to help you navigate every stage of your international travel.</p>
            <a href='/contact' className='text-primary py-2 px-4 mt-10 font-inter inline-block font-medium hover:bg-hover bg-accent transition 
          duration-300 rounded-lg
          text-center mx-auto'>
            Contact Us
        </a>
        </div>

    <Footer/>

    </>


  )
}

export default About