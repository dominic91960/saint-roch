import React from 'react'
import Image from "next/image";
import Card01 from '../../assets/images/landing/card01.png'
import '../card_animation/cardanimationstyle.css'
import { Button } from "../ui/button";
function cardanimation01() {
  return (
    <div>
        <div className='container mx-auto mb-[50px] mt-[100px]'>
        <h1 className="title-text-stroke text-[40px] font-semibold leading-none sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[95px] 2xl:text-[108px]
        ml-[15px]">
          Residential <br /> Boilers
        </h1>
        <div className='bg-red-600 w-[200px] h-[5px] mt-[20px] ml-[15px]'></div>
        <div className='bg-[#D9D9D9] w-full h-[40px] mt-[30px] flex items-center '>
            <p className='ml-[30px] font-semibold'>Effortless Warmth for Every Home</p>
        </div>
    </div>
    <div className='landingcardssection relative bg-white'>
      <div className='background w-[100%] h-[100vh] lg:h-[100vh] bg-white sticky top-0 '></div>

      <div className='content container mx-auto mt-[-100vh]'>
        <div className='cards'>
            <div className='cards-grid'>
<div className='card'>
    <div className='card-inner bg-white border-t-4 border-black h-[1100px]  sm:h-[1100px]  md:h-[1000px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px] flex items-center'>
    <div className='grid grid-cols-1 lg:grid-cols-2 container'>
        <div className=''>
        <Image
                className="aboutUs h-[400px]  lg:h-[500px] xl:h-[500px] 2xl:h-[700px] w-auto p-[30px] lg:p-[50px]"
                src={Card01}
                alt="product"
          />
        </div>
        <div className='p-[50px] lg:p-[50px] flex justify-center items-center '>
            <div className=''>
            <p>Main Categories</p>
            <h1 className='text-[40px] sm:text-[60px] lg:text-[40px] xl:text-[50px] font-semibold leading-none'>Residential<br></br>Boilers</h1>
            <div className="bg-red-600 w-[100px] sm:w-[200px] h-[2px] sm:h-[5px]"></div>
            <br></br>
            <p className='text-[20px] xl:text-[15px] 2xl:text-[20px] font-semibold xl:mt-[-20px]'>Effortless Warmth for Every Home</p>
            <br></br>
            <p className='text-[15px] sm:text-[25px] lg:text-[15px] xl:text-[15px] 2xl:sm:text-[25px] mt-[-20px] xl:mt-[0px] '>When users hover over the main categories, the subcategories should appear along with their respective category images. </p>
            <ul className='ml-12 mt-6 text-[14px] sm:text-[20px] lg:text-[13px] xl:text-[13px] 2xl:text-[20px]'>
                <li>Oil Fired Residential Boilers</li>
                <li>Gas Fired Residential Boilers</li>
            </ul>
            <br></br>
            <div className='flex items-center gap-7'>
                <div>
            <Button variant="primary">Explore Our Boilers</Button>
                </div>
                <div>
            <p className="">Learn more</p>
                </div>
            </div>
        </div>
        </div>
        
    </div>
    </div>
</div>

<div className='card'>
    <div className='card-inner bg-white border-t-4 border-black h-[1100px]  md:h-[1000px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px] flex items-center mt-[500px] sm:mt-[500px] lg:mt-[100px]'>
    <div className='grid grid-cols-1 lg:grid-cols-2 container'>
        <div className=''>
        <Image
                className="aboutUs h-[400px]  lg:h-[500px] xl:h-[500px] 2xl:h-[700px] w-auto p-[30px] lg:p-[50px]"
                src={Card01}
                alt="product"
          />
        </div>
        <div className='p-[50px] lg:p-[50px] flex justify-center items-center '>
            <div className=''>
            <p>Main Categories</p>
            <h1 className='text-[40px] sm:text-[60px] lg:text-[40px] xl:text-[50px] font-semibold leading-none'>Residential<br></br>Boilers</h1>
            <div className="bg-red-600 w-[100px] sm:w-[200px] h-[2px] sm:h-[5px]"></div>
            <br></br>
            <p className='text-[20px] xl:text-[15px] 2xl:text-[20px] font-semibold xl:mt-[-20px]'>Effortless Warmth for Every Home</p>
            <br></br>
            <p className='text-[15px] sm:text-[25px] lg:text-[15px] xl:text-[15px] 2xl:sm:text-[25px] mt-[-20px] xl:mt-[0px] '>When users hover over the main categories, the subcategories should appear along with their respective category images. </p>
            <ul className='ml-12 mt-6 text-[14px] sm:text-[20px] lg:text-[13px] xl:text-[13px] 2xl:text-[20px]'>
                <li>Oil Fired Residential Boilers</li>
                <li>Gas Fired Residential Boilers</li>
            </ul>
            <br></br>
            <div className='flex items-center gap-7'>
                <div>
            <Button variant="primary">Explore Our Boilers</Button>
                </div>
                <div>
            <p className="">Learn more</p>
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
<div className='bg-white h-[500px] sm:h-[10px] md:h-[100px] lg:h-[250px] xl:h-[100px] '></div>
      {/* section 02 */}


      

    </div>
  )
}

export default cardanimation01
