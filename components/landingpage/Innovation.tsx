import React from 'react'
import '../style/Innovation.css'
import Innoimgae from '@/components/images/product.png'
import Image from 'next/image'

function Innovation() {
  return (
    <div className='mx-auto'>
   
        <div className='  h-full '>
        
         <div className='containerr bg-white ml-[10px] mr-[10px] sm:ml-[50px] sm:mr-[50px] mt-[50px]  no-scroll '>
          
           <Image className='square w-[140px] sm:w-[170px] md:w-[200px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px] h-auto '  src={Innoimgae} alt='product' />
           <h1 className='text-[100px] sm:text-[120px] md:text-[200px] lg:text-[300px] xl:text-[400px] 2xl:text-[600px] font-bold text-[#cccccc] mt-[-180px] sm:mt-[-230px] md:mt-[-270px]  lg:mt-[-450px] xl:mt-[-550px] 2xl:mt-[-700px] overflow-hidden '>INNOATION</h1>
        <div className='text grid grid-cols-2 gap-0 sm:gap-4 relative mt-[100px] '>
          <div className='  mt-[-200px]'></div>
          <div className='  h-[300px] mt-[-130px] sm:mt-[-140px] md:mt-[-160px] lg:mt-[-200px] xl:mt-[-240px] 2xl:mt-[-300px] '>
          <h1 className='text-[20px] sm:text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px]    font-bold '>INNOVATION</h1>
          <h1 className='text-[12px] sm:text-[13px] md:text-[16px] lg:text-[20px]  xl:text-[25px] 2xl:text-[30px] sm:mt-[-10px] md:mt-[-10px] xl:mt-[-20px]  2xl:mt-[-30px] text-[#9C9C9C]'>Texhnology Highlight</h1>
          <h1 className='text-[9px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[16px] mt-[2px] sm:mt-[5px]    '>At Saint Roch Devs, innovation drives everything we do. Our products feature cutting-edge technologies designed to deliver exceptional performance and efficiency. Highlights include:</h1>
          
          </div>
         
         
        </div> 
           <div className="innovation bg-[#eeeeee] w-full h-[280px] sm:h-[290px] md:h-[270px] lg:h-[250px] xl:h-[350px] 2xl:h-[350px] relative mt-[20px] sm:mt-[50px] md:mt-[100px] lg:mt-[250px] xl:mt-[300px] 2xl:mt-[500px] ">
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
           
           
           <div className='content'>
            
               
            </div>
            
        </div>
        </div>
       
        
        
    </div>
  )
}


export default Innovation
