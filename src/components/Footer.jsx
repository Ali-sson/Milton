import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>

   <section className='flex flex-col md:flex-row justify-between bg-FooterBg text-white py-10 px-6 md:px-20 mt-0
   items-start gap-20'>
    <div>
        <h1 className='text-2xl text-accent font-inter font-semibold'>Milton services</h1>
        <p className='text-sm tracking-wider leading-[1.75] mt-2'>Trusted international travel support for <br/> individuals and families. 
        From planning <br/> to arrival.</p>
    </div>

    <div>
        <h2 className='text-base font-serif text-accent'>Quick Links</h2>
        <ul className='text-sm mt-2 leading-[1.75]'>
            <li><a href='#' className='hover:text-green-500 '>Home</a></li>
            <li><a href='#' className='hover:text-green-500'>Services</a></li>
            <li><a href='#' className='hover:text-green-500'>About Us</a></li>
            <li><a href='#' className='hover:text-green-500'>Contact</a></li>
        </ul>

    </div>

    <div className='leading-[1.75]'>
        <h2 className='text-base font-serif text-accent'>Contact Us</h2>
        <p className='text-sm mt-2'>Reach out via WhatsApp for personalized guidance.</p>
        <FaWhatsapp className="text-green-500 text-3xl mt-2" />
    </div>
   
   </section>
   <hr className="border-t border-black-300" />
 <footer className='text-center text-sm bg-FooterBg py-4 text-subText'>
        <p>&copy; {new Date().getFullYear()} Milton services. All rights reserved.</p>
    </footer>
   
    </>
   
  )
}

export default Footer