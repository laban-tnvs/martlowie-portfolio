import React from 'react'

interface Props {
  title: string;
  year: string;
  school: string;
}

const SkillsItem = ({title, year, school}: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#2DDC9A] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#2DDC9A]">{year}</span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[20px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
        {school}
      </p>
    </div>
  )
}

export default SkillsItem
