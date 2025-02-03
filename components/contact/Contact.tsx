import React from 'react'
import Map from '../../assets/images/contact/map.png'
import Image from "next/image";

function Contact() {
  return (
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-7 '>
      
      {/* Centered Content */}
      <div className='lg:col-span-5 flex flex-col justify-center ml-[20px] sm:ml-[50px] md:ml-[80px] lg:ml-[80px] xl:ml-[100px] 2xl:ml-[200px] mb-[40px] sm:mb-[45px] md:mb-[50px] lg:mb-0 '>
        
        <p className='text-red-600 font-bold 2xl:text-[40px] mt-[50px] lg:mt-[0px]'>We&apos;re here to help</p>
        <h1 className="title-text-stroke font-semibold leading-none text-[50px] sm:text-[80px] md:text-[80px] lg:text-[80px] xl:text-[100px] 2xl:text-[170px]">
          LET&apos;S TALK
        </h1>

        <div className='w-[800px] max-w-full'>
          <p className='text-[10px] sm:text-[12px] lg:text-[14px] md:text-[14px] xl:text-[16px] 2xl:text-[20px] mt-4'>[Your Name]</p>
          <div className='bg-[#BDBDBD] h-[2px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[800px] my-4'></div>


          <p className='text-[10px] sm:text-[12px] lg:text-[14px] md:text-[14px] xl:text-[16px] 2xl:text-[20px] mt-4'>[Your Name]</p>
          <div className='bg-[#BDBDBD] h-[2px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[800px] my-4'></div>


          <p className='text-[10px] sm:text-[12px] lg:text-[14px] md:text-[14px] xl:text-[16px] 2xl:text-[20px] mt-4'>[Your Name]</p>
          <div className='bg-[#BDBDBD] h-[2px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[800px] my-4'></div>

        </div>
      </div>

      {/* Image Section */}
      <div className='lg:col-span-2 relative h-[200px] sm:h-[300px] md:h-[300px]  lg:h-[400px] xl:h-[500px] 2xl:h-[800px]'>
        <Image
          className="object-cover"
          src={Map}
          alt="map"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
    </div>
    <div className="w-full absolute">
 <div className="h-[300px] bg-black"></div>
</div>
    </div>
  )
}

export default Contact;
