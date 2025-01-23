import React from 'react'
import '../style/inven.css'
import Image from 'next/image'
import Innoimgae from '@/components/images/product.png'

import { TbPointFilled } from "react-icons/tb";

function inven() {
  return (
    <div>
        <div className='containerr h-[100vh] overflow-auto bg-white'>
            <div className='content container mx-auto sm:p-[2rem] '>
                <div className='h-[200vh] bg-white'>
                <Image
                        className="innoImag w-[140px] sm:w-[170px] md:w-[200px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px] h-auto mx-auto "
                        src={Innoimgae}
                        alt="product"
                    />
                    <Image
                        className="innoImag w-[140px] sm:w-[170px] md:w-[200px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px] h-auto mx-auto "
                        src={Innoimgae}
                        alt="product"
                    />
                </div>
                <div className='prograss w-[100%]  bg-white relative '>
                <div className="relative">
                    <h1 className="text-[100px] sm:text-[120px] md:text-[200px] lg:text-[300px] xl:text-[400px] 2xl:text-[600px] font-bold text-[#cccccc] mt-[-180px] sm:mt-[-230px] md:mt-[-270px] lg:mt-[-450px] xl:mt-[-550px] 2xl:mt-[-700px] overflow-hidden relative ">
                        INNOVATION
                    </h1>
                    <Image
                        className="innoImage w-[140px] sm:w-[170px] md:w-[200px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px] h-auto absolute z-10 "
                        src={Innoimgae}
                        alt="product"
                    />
                    <div className='text grid grid-cols-2  sm:gap-4 relative mt-[100px] '>
          <div className='  mt-[-200px]'></div>
          <div className='  h-[300px] mt-[-130px] sm:mt-[-140px] md:mt-[-160px] lg:mt-[-200px] xl:mt-[-240px] 2xl:mt-[-300px] '>
          <h1 className='text-[20px] sm:text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px]    font-bold '>INNOVATION</h1>
          <h1 className='text-[12px] sm:text-[13px] md:text-[16px] lg:text-[20px]  xl:text-[25px] 2xl:text-[30px] sm:mt-[-10px] md:mt-[-10px] xl:mt-[-20px]  2xl:mt-[-30px] text-[#9C9C9C]'>Texhnology Highlight</h1>
          <h1 className='text-[9px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[16px] mt-[2px] sm:mt-[5px]    '>At Saint Roch Devs, innovation drives everything we do. Our products feature cutting-edge technologies designed to deliver exceptional performance and efficiency. Highlights include:</h1>
          </div>
        </div> 

        <div className="innovation bg-[#eeeeee] w-full h-[280px] sm:h-[290px] md:h-[270px] lg:h-[250px] xl:h-[350px] 2xl:h-[350px] relative mt-[20px] sm:mt-[50px] md:mt-[100px] lg:mt-[250px] xl:mt-[300px] 2xl:mt-[350px] z-10 ">
            <div className='bg-black w-[1px] md:w-[2px] h-[280px] sm:h-[290px] md:h-[270px] lg:h-[250px] xl:h-[350px] 2xl:h-[350px] absolute ml-[50%] overflow-hidden'></div>
            <div className='grid grid-cols-2 gap-[20px]  sm:gap-[150px] m-[10px] sm:m-[20px] md:m-[30px] xl:m-[100px] '>
              <div className=' w-full h-[400px] mt-[50px]'>
                <h2 className='text-[15px] md:text-[18px] lg:text-[20px] xl:text-[40px] 2xl:text-[40px] font-bold  '>Advanced Heat Exchangers:</h2>
                <p className='text-[10px] md:text-[12px] lg:text-[15px] xl:text-[20px] ml-[20px] sm:ml-[40px] md:ml-[70px] mt-[20px]'>Engineered for maximum durability and efficiency, ensuring consistent heat distribution.</p>
                <div className='bg-red-500 w-[50px] sm:w-[100px] h-[5px] mt-[20px]'></div>
              </div>
              <div className=' w-full h-[400px] mt-[50px]'>
              <h2 className='text-[15px] md:text-[18px] lg:text-[20px] xl:text-[40px] 2xl:text-[40px] font-bold  '>Advanced Heat Exchangers:</h2>
                <p className='text-[10px] md:text-[12px] lg:text-[15px] xl:text-[20px] ml-[20px] sm:ml-[40px] md:ml-[70px] mt-[20px]'>Engineered for maximum durability and efficiency, ensuring consistent heat distribution.</p>
                <div className='bg-red-500 w-[50px] sm:w-[100px] h-[5px] mt-[20px]'></div>
              </div>
            </div>
           </div>
                    </div>
                </div>
                <div className='bg-white h-[15vh]'></div>
                <div className='h-[200vh] m-[15px] sm:m-0'>
                  <div className='grid sm:grid-cols-5 mb-4'>
                    <div className='col-span-2 '>
                      <p className='text-[50px] sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[80px] font-semibold'>Saint</p>
                      <p className='text-[50px] sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[80px] font-semibold lg:mt-[-20px]  xl:mt-[-40px]'>Roch Devs</p>
                      <div className='bg-black h-[3px] w-[80px] sm:w-[80px] md:w-[80px] lg:w-[150px] xl;w-[250px] '></div>
                      <p className='text-[30px] mb-6 sm:mb-0 sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[40px] font-semibold text-red-600'>Sustainability at</p>
                    </div>
                    <div className='col-span-3 '>
                      <div className='bg-[#F1F1F1] h-full rounded-xl  p-[15px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]'>
                        <div className='sustainability_text'>
                          <h1 className='text-[17px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[30px] font-semibold mb-[8px] sm:mb-[10px] md:mb-[7px] lg:mb-[10px] xl:mb-[30px] '>Green Technology Integration</h1>
                          <p className='text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]'>We incorporate advanced green technologies in our heating systems, including:</p><br></br>
                          <div className="flex space-x-2 ">
                              <TbPointFilled className="black mt-1 shrink-0" /> 
                              <span className='text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]'>Condensing Boilers: Utilizing waste heat to improve efficiency.</span>
                            </div>
                            <div className="flex space-x-2 ">
                              <TbPointFilled className="text-black mt-1 shrink-0" /> 
                              <span className='text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]'>Hybrid Systems: Combining traditional and renewable energy sources for a balanced approach. </span>
                            </div>
                            <div className="flex space-x-2 ">
                              <TbPointFilled className="text-black mt-1 shrink-0" /> 
                              <span className='text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]'>Smart Controls: Allowing precise management to avoid energy wastage.</span>
                            </div>            
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='grid grid-cols-2  h-[500px] gap-2 sm:gap-4 z-10'>
                    
                    <div className="">
                      <div className="grid grid-rows-5 h-full">
                        <div className="row-span-3 bg-[#F1F1F1] h-full rounded-xl mx-auto p-[15px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]"> 
                          <p className='text-[17px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[30px] font-semibold mb-[8px] sm:mb-[10px] md:mb-[7px] lg:mb-[10px] xl:mb-[30px] '>Energy-Efficient Heating Solutions</p>
                          <p className='text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]'>Our boilers are engineered for superior performance, reducing energy consumption without compromising on warmth. Whether you’re heating a cozy home or a large-scale facility like a military base, our solutions are optimized to lower utility bills and carbon footprints.</p>
                          <p className='text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]'>Our boilers are engineered for superior performance, reducing energy consumption without compromising on warmth. Whether you’re heating a cozy home or a large-scale facility like a military base.</p>
                        </div>
                        <div className=''>
                        </div>
                      </div>
                    </div>
                    
                    <div className="">
                      <div className="grid grid-rows-5 h-full gap-2 sm:gap-4">
                        <div className="row-span-2 bg-[#F1F1F1] h-full rounded-xl mx-auto p-[15px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]"> 
                          <p className='text-[17px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[30px] font-semibold mb-[8px] sm:mb-[10px] md:mb-[7px] lg:mb-[10px] xl:mb-[30px] '>Responsible Manufacturing</p>
                          <p className='text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]'>Sustainability starts from the ground up. Our manufacturing processes prioritize eco-friendly materials and reduced waste, ensuring that our products leave a smaller environmental footprint.</p>
                        </div>
                        <div className='row-span-3 bg-[#F1F1F1] h-full rounded-xl mx-auto p-[15px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] z-10'>
                        <p className='text-[17px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[30px] font-semibold mb-[8px] sm:mb-[10px] md:mb-[7px] lg:mb-[10px] xl:mb-[30px] '>Energy-Efficient Heating Solutions</p>
                        <p className='text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]'>Our boilers are engineered for superior performance, reducing energy consumption without compromising on warmth. Whether you’re heating a cozy home or a large-scale facility like a military base, our solutions are optimized to lower utility bills and carbon footprints Whether you’re heating a cozy home or a large-scale facility like a military base, our solutions are optimized to lower utility bills and carbon footprints.</p>
                        </div>
                      </div>
                      
                    </div>
                  
                  </div>
                  
                </div>
                <div className='mt-[-650px] sm:mt-[-1000px] md:mt-[-950px] lg:mt-[-900px]  xl:mt-[-600px] 2xl:mt-[-800px] relative'>
                <Image
                        className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[350px] 2xl:w-[450px] h-auto mx-auto relative"
                        src={Innoimgae}
                        alt="product"
                    />
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default inven
