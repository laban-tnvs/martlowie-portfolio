import React from 'react'
import Image from 'next/image'
import { CalendarDaysIcon, UserCircleIcon } from '@heroicons/react/20/solid'

const Workshops = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">Work<span className="text-[#FC8700]">shops</span></h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div>
            <div className="w-[100%] relative h-[400px]">
            <Image src="/images/w1.png" alt="workshop" layout="fill" className="object-cover"/>
            </div>
            <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-5rem]">
                <div className="w-fit px-[5.5rem] py-[1rem] bg-[#2DDC9A] relative mt-[-3rem] text-black font-semibold mx-auto">
                IRCITE 2024
                </div>
                <div className="flex flex-col items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                    <CalendarDaysIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#2DDC9A]"/>
                    <p className="text-white">March 08, 2024</p>
                </div>
                </div>
            </div>
        </div>
        <div>
            <div className="w-[100%] relative h-[400px]">
            <Image src="/images/w2.png" alt="workshop" layout="fill" className="object-cover"/>
            </div>
            <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-5rem]">
                <div className="w-fit px-[2rem] py-[1rem] bg-[#2DDC9A] relative mt-[-3rem] text-black font-semibold mx-auto">
                Cisco: Introduction to Cybersecurity
                </div>
                <div className="flex flex-col items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                    <CalendarDaysIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#2DDC9A]"/>
                    <p className="text-white">November 24, 2022</p>
                </div>
                </div>
            </div>
        </div>
        <div>
            <div className="w-[100%] relative h-[400px]">
            <Image src="/images/w3.png" alt="workshop" layout="fill" className="object-cover"/>
            </div>
            <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-5rem]">
                <div className="w-fit px-[2rem] py-[1rem] bg-[#2DDC9A] relative mt-[-3rem] text-black font-semibold mx-auto">
                Visual Graphics Design NC III
                </div>
                <div className="flex flex-col items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                    <CalendarDaysIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#2DDC9A]"/>
                    <p className="text-white">April 11, 2019</p>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Workshops
