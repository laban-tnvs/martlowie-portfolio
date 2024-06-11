import React from 'react'
import ReferensesSlider from './ReferensesSlider'

const Referenses = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">refer<span className="text-[#FC8700]">ences</span></h1>
      <div className="pt-[5rem] pb-[4rem] w-[8-%] mx-auto">
        <ReferensesSlider/>
      </div>
    </div>
  )
}

export default Referenses
