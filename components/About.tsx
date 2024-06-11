import React from 'react'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
            <div>
                <h1 className="text-[20px] font-bold uppercase text-[#2DDC9A] mb-[1rem]">About Me</h1>
                <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                Learning and <span className="text-[#FC8700]">Evolving</span></h2>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden  md:block h-[5px] bg-slate-400 rounded-sm"></span>
                    <p className="text-[19px] text-slate-300 w-[80%]">Hello! My name is <strong>Mart Lowie Santiago</strong>,
                     a recent graduate with a Bachelor&apos;s degree in <i>Information Technology </i>  from 
                     <i> Dalubhasaang Politekniko ng Lungsod ng Baliwag</i>. I&apos;m driven by a passion for
                      continuous learning and personal growth.
                     Let&apos;s connect and explore how we can achieve great things together!</p>
                </div>
                <button className="px-[2rem] hover:bg-[#FC8700] transition-all duratioon-200 py-[1rem] text-[18px] font-bold uppercase bg-[#2DDC9A] text-black flex items-center space-x-2">
                <p>Download CV</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
              </button>
            </div>
            <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                <Image src="/images/about.png" alt="user" layout="fill" objectFit="contain" className="realtive z-[11] w-[100%] h-[100%] object-contain"/>
                <div className="absolute w-[100%] h-[100%] z-[10] bg-[#2DDC9A] top-[-2rem] right-[-2rem]"></div>
            </div>
      </div>
    </div>
  )
}

export default About
