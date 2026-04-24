import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
return (
    <>

 <section className='flex flex-col md:flex-row justify-between bg-FooterBg text-white py-20 px-6 md:px-20 mt-0
 items-start gap-10'>
    <div>
            <h1 className='text-2xl text-accent font-playfair font-semibold'>Milton Services</h1>
            <p className='text-sm tracking-wider leading-[1.75] mt-2'>Trusted international travel support for <br/> individuals and families. 
            From planning <br/> to arrival.</p>
    </div>

    <div>
            <h2 className='text-base font-playfair text-accent'>Quick Links</h2>
            <ul className='text-sm mt-2 leading-[1.75]'>
                    <li><a href='/' className='hover:text-accent'>Home</a></li>
                    <li><a href='/services' className='hover:text-accent'>Services</a></li>
                    <li><a href='/about' className='hover:text-accent'>About Us</a></li>
                    <li><a href='/contact' className='hover:text-accent'>Contact</a></li>
            </ul>

    </div>

    <div className='leading-[1.75]'>
            <h2 className='text-base font-serif text-accent'>Contact Us</h2>
            <p className='text-sm mt-2'>Reach out via WhatsApp for personalized guidance.</p>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-green-500 text-3xl mt-2" />
            </a>
    </div>
 
 </section>
 <hr className="border-t border-black-300" />
 <footer className='text-center text-sm bg-FooterBg py-10 text-subText'>
            <p>&copy; {new Date().getFullYear()} Milton services. All rights reserved.</p>
    </footer>
 
    </>
 
)
}

export default Footer