import { CodeBracketIcon, CodeBracketSquareIcon, CubeTransparentIcon, SparklesIcon, SwatchIcon } from '@heroicons/react/20/solid';


import React from 'react'

const Service = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-[#FC8700]">Services</span></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
            <div data-aos="fade-right">
              <div className="bg-[#0047AB] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                  <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3faeB]"/>
                  <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Frontend</h1>
                  <p className="text-[15px] text-[#d3d2d2] font-normal">
                  During my time as an IT student, I&apos;ve consistently been the frontend developer for projects involving system creation, honing my skills for seamless user experiences. 
                  </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
                  <CubeTransparentIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3faeB]"/>
                  <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Ui/Ux Design</h1>
                  <p className="text-[15px] text-[#d3d2d2] font-normal">
                  As an IT student, I&apos;ve guided UI/UX design in our team&apos;s projects, refining skills for seamless user experiences, blending functionality with aesthetics.
                  </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="500">
              <div className="bg-[#109A41] hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
                  <SparklesIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3faeB]"/>
                  <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Graphic Design</h1>
                  <p className="text-[15px] text-[#d3d2d2] font-normal">
                  With digital marketing internship skills and TESDA Visual Graphic Design National Certificate Level III, I excel in content creation, design, layout, and frontend development.
                  </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Service
