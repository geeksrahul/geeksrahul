import React from 'react'
import SkillCard from './SkillCard'

function SkillList({
    title,
    skillArray = [],
}) {
  return (
    <div className="skill flex flex-col gap-2 rounded-md flex-wrap sm:text-xl">
        <h3 className='text-2xl font-semibold '> {title} </h3>
        <div className="skills flex gap-3 flex-wrap">
            {skillArray.map((skill,idx) => (<SkillCard skill={skill} key={idx} />))}
        </div>
    </div>
  )
}

export default SkillList