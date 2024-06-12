import React from 'react'
import Link from 'next/link';
import Particle from './Particles'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { IoInformationCircleOutline } from 'react-icons/io5';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const Hero = () => {
  

  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center ">
      <Particle/>
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&apos;M <span className="text-[#FC8700]">LOWIE!</span>
          </h1>
          <TextEffect/>
          <p className="mt-[2rem] text-[20px] text-[#ffffff92] ">
          Fresh graduate skilled in UI/UX design, front-end development, and graphic design, with a background in digital marketing.
           I love turning creative ideas into user-friendly interfaces and thrive on learning and applying cutting-edge technologies to bring them to life. Let&apos;s create something amazing together!
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
          <a href="/CVResume.pdf" download className="px-[2rem] hover:bg-[#FC8700] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#2DDC9A] text-black flex items-center space-x-2">
      <p>Download CV</p>
      <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
    </a>      <button className="flex items-center space-x-2">
                <IoInformationCircleOutline  className="w-[4rem] h-[4rem] hover:text-[#FC8700] transition-all duration-200 text-[#2DDC9A]"/>
                <p className="text-[20px] font-semibold text-white">Know more</p>
              </button>
          </div>
        </div>
          <div className="w-[500px] hidden bg-[#2DDC9A] relative lg:flex items-center rounded-full h-[500px]">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image src="/images/u1.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero
