import React from 'react'

function ServiceCard({service}) {
  return (

    <>
    <div className='border-2 p-8 rounded-2xl hover:shadow-lg hover:scale-102 
    hover:border-accent transition duration-300 bg-white'>
        <div>
            {service.icon && <service.icon size={40} className='text-accent mb-4' />}
        </div>
        <h3 className='font-semibold text-lg mb-2 font-playfair text-primary'>
            {service.title}
        </h3>

        <p className='text-[#1A1A1A]'>{service.description}</p>
    </div>
   

    </>


 
  )
}

export default ServiceCard
