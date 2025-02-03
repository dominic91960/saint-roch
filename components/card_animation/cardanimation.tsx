import React from 'react'
import Image from "next/image";
import Card01 from '../../assets/images/landing/card01.png'
import '../card_animation/cardanimationstyle.css'
import { Button } from "../ui/button";
import { BiCategory } from "react-icons/bi";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { GoArrowRight } from "react-icons/go";
function cardanimation() {
  return (
    <div>
        <div className='mx-[10px] sm:mx-[50px] md:mx-[100px] '>
        <div className='container mx-auto mb-[50px] mt-[100px] '>
            
        <h1 className="title-text-stroke font-semibold leading-none text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] 2xl:text-[200px]">
          Residential <br /> Boilers
        </h1>
        <div className='bg-red-600 w-[200px] h-[5px] mt-[20px]'></div>
        <div className='bg-[#D9D9D9] w-full h-[40px] mt-[30px] flex items-center '>
            <p className='ml-[30px] font-semibold'>Effortless Warmth for Every Home</p>
        </div>
    </div>
    <div className='landingcardssection relative bg-white'>
      <div className='background w-[100%] h-[100vh]  bg-white sticky top-0 '></div>

      <div className='content container mx-auto mt-[-100vh]'>
        <div className='cards'>
            <div className='cards-grid'>
<div className='card'>
    <div className='card-inner bg-white border-t-4 border-black h-[900px]  md:h-[1000px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px] flex items-center'>
    <div className='grid grid-cols-1 lg:grid-cols-2 container'>
        <div className='flex justify-start lg:justify-end '>
        <Image
                className="aboutUs h-[350px]  lg:h-[470px] xl:h-[500px] 2xl:h-[750px] w-auto p-[30px] lg:p-[50px]"
                src={Card01}
                alt="product"
          />
        </div>
        <div className='p-[50px] lg:p-[50px] flex justify-center items-center '>
            <div className=''>
                <div className='flex items-center gap-2'>
            <BiCategory />
            <p>Main Categories</p>
            </div>
            <h1 className='text-[40px] sm:text-[60px] lg:text-[40px] xl:text-[50px] font-semibold leading-none'>Residential<br></br>Boilers</h1>
            <div className="bg-red-600 w-[100px] sm:w-[200px] h-[2px] sm:h-[5px]"></div>
            <br></br>
            <p className='text-[20px] xl:text-[15px] 2xl:text-[20px] font-semibold xl:mt-[-20px]'>Effortless Warmth for Every Home</p>
            <br></br>
            <p className='text-[15px] sm:text-[25px] lg:text-[15px] xl:text-[15px] 2xl:sm:text-[25px] mt-[-20px] xl:mt-[0px] '>When users hover over the main categories, the subcategories should appear along with their respective category images. </p>
            <ul className='ml-12 mt-6 text-[14px] sm:text-[20px] lg:text-[13px] xl:text-[13px] 2xl:text-[20px]'>
            <li className="flex items-center gap-2">
                <VscDebugBreakpointLog className="text-xl text-red-500" />
                Oil Fired Residential Boilers
            </li>
            <li className="flex items-center gap-2">
                <VscDebugBreakpointLog className="text-xl text-red-500" />
                Gas Fired Residential Boilers
            </li>
            </ul>
            <br></br>
            <div className='flex items-center gap-7 lg:gap-2 md:gap-7'>
                <div>
            <Button variant="primary">Explore Our Boilers</Button>
                </div>
                <div className='flex items-center gap-2 '>
            <p className="">Learn more</p>
            <GoArrowRight />

                </div>
            </div>
        </div>
        </div>
        
    </div>
    </div>
</div>

<div className='card'>
    <div className='card-inner bg-white border-t-4 border-black h-[900px] sm:h-[1100px]  md:h-[1000px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px] flex items-center'>
    <div className='grid grid-cols-1 lg:grid-cols-2 container'>
        <div className='flex justify-start lg:justify-end '>
        <Image
                className="aboutUs h-[350px]  lg:h-[470px] xl:h-[500px] 2xl:h-[750px] w-auto p-[30px] lg:p-[50px]"
                src={Card01}
                alt="product"
          />
        </div>
        <div className='p-[50px] lg:p-[50px] flex justify-center items-center '>
            <div className=''>
                <div className='flex items-center gap-2'>
            <BiCategory />
            <p>Main Categories</p>
            </div>
            <h1 className='text-[40px] sm:text-[60px] lg:text-[40px] xl:text-[50px] font-semibold leading-none'>Residential<br></br>Boilers</h1>
            <div className="bg-red-600 w-[100px] sm:w-[200px] h-[2px] sm:h-[5px]"></div>
            <br></br>
            <p className='text-[20px] xl:text-[15px] 2xl:text-[20px] font-semibold xl:mt-[-20px]'>Effortless Warmth for Every Home</p>
            <br></br>
            <p className='text-[15px] sm:text-[25px] lg:text-[15px] xl:text-[15px] 2xl:sm:text-[25px] mt-[-20px] xl:mt-[0px] '>When users hover over the main categories, the subcategories should appear along with their respective category images. </p>
            <ul className='ml-12 mt-6 text-[14px] sm:text-[20px] lg:text-[13px] xl:text-[13px] 2xl:text-[20px]'>
            <li className="flex items-center gap-2">
                <VscDebugBreakpointLog className="text-xl text-red-500" />
                Oil Fired Residential Boilers
            </li>
            <li className="flex items-center gap-2">
                <VscDebugBreakpointLog className="text-xl text-red-500" />
                Gas Fired Residential Boilers
            </li>
            </ul>
            <br></br>
            <div className='flex items-center gap-7 lg:gap-2 md:gap-7'>
                <div>
            <Button variant="primary">Explore Our Boilers</Button>
                </div>
                <div className='flex items-center gap-2 '>
            <p className="">Learn more</p>
            <GoArrowRight />

                </div>
            </div>
        </div>
        </div>
        
    </div>
    </div>
</div>


            </div>
        </div>
      </div>
     
      </div>
      

     


      
      </div>
    </div>
  )
}

export default cardanimation
