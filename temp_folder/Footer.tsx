import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid'
import React from 'react'
//
const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-600 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#2DDC9A]">
                <MapIcon className="md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem] text-black"/>
           
            </div>
            <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                Address
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
                San Jose, <br/>San Luis, Pampanga
            </p>
            </div>
        </div>
        <div className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#2DDC9A]">
                <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem] text-black"/>
           
            </div>
            <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                Phone
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
                09615692458
            </p>
            </div>
        </div>
        <div className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#2DDC9A]">
                <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem] text-black"/>
           
            </div>
            <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                Send Me Email
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
                santiagomart<br/>lowie@gmail.com
            </p>
            </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 items-center justify-center">
  <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20 text-center">
    <p>Disclaimer: This website serves solely for application purposes. All materials are copyrighted by Mart Lowie Santiago. For business inquiries, kindly contact santiagomartlowie@gmail.com.</p>
  </div>
</div>

      </div>
  )
}

export default Footer
