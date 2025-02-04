import React from "react";
import Image from "next/image";
import Card01 from "../../assets/images/landing/card01.png";
import "../card_animation/cardanimationstyle.css";
import { Button } from "../ui/button";
import { BiCategory } from "react-icons/bi";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { GoArrowRight } from "react-icons/go";
function cardanimation() {
  return (
    <div>
      <div className="mx-[10px] sm:mx-[50px] md:mx-[100px]">
        <div className="container mx-auto mb-[50px] mt-[100px]">
          <h1 className="title-text-stroke text-[50px] font-semibold leading-none sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] 2xl:text-[200px]">
            Residential <br /> Boilers
          </h1>
          <div className="mt-[20px] h-[5px] w-[200px] bg-red-600"></div>
          <div className="mt-[30px] flex h-[40px] w-full items-center bg-[#D9D9D9]">
            <p className="ml-[30px] font-semibold">
              Effortless Warmth for Every Home
            </p>
          </div>
        </div>
        <div className="landingcardssection relative bg-white">
          <div className="background sticky top-0 h-[100vh] w-[100%] bg-white"></div>

          <div className="content container mx-auto mt-[-100vh]">
            <div className="cards">
              <div className="cards-grid">
                <div className="card">
                  <div className="card-inner flex h-[900px] items-center bg-white md:h-[1000px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px]">
                    <div className="container grid grid-cols-1 lg:grid-cols-2">
                      <div className="flex justify-start lg:justify-end">
                        <Image
                          className="aboutUs h-[350px] w-auto p-[30px] lg:h-[470px] lg:p-[50px] xl:h-[500px] 2xl:h-[750px]"
                          src={Card01}
                          alt="product"
                        />
                      </div>
                      <div className="flex items-center justify-center p-[50px] lg:p-[50px]">
                        <div className="">
                          <div className="flex items-center gap-2">
                            <BiCategory />
                            <p>Main Categories</p>
                          </div>
                          <h1 className="text-[40px] font-semibold leading-none sm:text-[60px] lg:text-[40px] xl:text-[50px]">
                            Residential<br></br>Boilers
                          </h1>
                          <div className="h-[2px] w-[100px] bg-red-600 sm:h-[5px] sm:w-[200px]"></div>
                          <br></br>
                          <p className="text-[20px] font-semibold xl:mt-[-20px] xl:text-[15px] 2xl:text-[20px]">
                            Effortless Warmth for Every Home
                          </p>
                          <br></br>
                          <p className="mt-[-20px] text-[15px] sm:text-[25px] lg:text-[15px] xl:mt-[0px] xl:text-[15px] 2xl:sm:text-[25px]">
                            When users hover over the main categories, the
                            subcategories should appear along with their
                            respective category images.{" "}
                          </p>
                          <ul className="ml-12 mt-6 text-[14px] sm:text-[20px] lg:text-[13px] xl:text-[13px] 2xl:text-[20px]">
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
                          <div className="flex items-center gap-7 md:gap-7 lg:gap-2">
                            <div>
                              <Button variant="primary">
                                Explore Our Boilers
                              </Button>
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="">Learn more</p>
                              <GoArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-inner flex h-[900px] items-center sm:h-[1100px] md:h-[1000px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px]">
                    <div className="container grid grid-cols-1 rounded-[1em] bg-[#f7f7f7] shadow-sm lg:grid-cols-2">
                      <div className="flex justify-start lg:justify-end">
                        <Image
                          className="aboutUs h-[350px] w-auto p-[30px] lg:h-[470px] lg:p-[50px] xl:h-[500px] 2xl:h-[750px]"
                          src={Card01}
                          alt="product"
                        />
                      </div>
                      <div className="flex items-center justify-center p-[50px] lg:p-[50px]">
                        <div className="">
                          <div className="flex items-center gap-2">
                            <BiCategory />
                            <p>Main Categories</p>
                          </div>
                          <h1 className="text-[40px] font-semibold leading-none sm:text-[60px] lg:text-[40px] xl:text-[50px]">
                            Residential<br></br>Boilers
                          </h1>
                          <div className="h-[2px] w-[100px] bg-red-600 sm:h-[5px] sm:w-[200px]"></div>
                          <br></br>
                          <p className="text-[20px] font-semibold xl:mt-[-20px] xl:text-[15px] 2xl:text-[20px]">
                            Effortless Warmth for Every Home
                          </p>
                          <br></br>
                          <p className="mt-[-20px] text-[15px] sm:text-[25px] lg:text-[15px] xl:mt-[0px] xl:text-[15px] 2xl:sm:text-[25px]">
                            When users hover over the main categories, the
                            subcategories should appear along with their
                            respective category images.{" "}
                          </p>
                          <ul className="ml-12 mt-6 text-[14px] sm:text-[20px] lg:text-[13px] xl:text-[13px] 2xl:text-[20px]">
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
                          <div className="flex items-center gap-7 md:gap-7 lg:gap-2">
                            <div>
                              <Button variant="primary">
                                Explore Our Boilers
                              </Button>
                            </div>
                            <div className="flex items-center gap-2">
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
  );
}

export default cardanimation;
