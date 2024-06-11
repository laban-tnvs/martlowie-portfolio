import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">Education & <span className="text-[#FC8700]">Skill</span></h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
            <SkillsItem title="Tertiary" year="2020-2024" school="Dalubhasaang Politekniko ng Lungsod ng Baliwag"/>
            <SkillsItem title="Senior High" year="2018-2020" school="Dalubhasaang Politekniko ng Lungsod ng Baliwag"/>

            <SkillsLanguage skill1="html" skill2="css" skill3="javascript" level1="w-[75%]" level2="w-[50%]" level3="w-[35%]"/>
        </div>
        <div>
            <SkillsItem title="Secondary" year="2014-2018" school="Sulivan National High School"/>
            <SkillsItem title="Primary" year="2008-2014" school="San Jose Proper Elementary School"/>

            <SkillsLanguage skill1="React JS" skill2="Photoshop" skill3="Canva" level1="w-[40%]" level2="w-[80%]" level3="w-[80%]"/>
        </div>
      </div>
    </div>
  )
}

export default Skills
