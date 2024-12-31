import React, { useState,useEffect } from 'react'
import { PageHeading, SkillList } from '../components'
import { useSkills } from '../hooks';
function Skills() {
  const {frontend, backend, databases, tools, programming} = useSkills();
  useEffect(()=>{
      document.title = "Skills | Geeksrahul";
  },[])
  return (
    <div className='w-full min-h-screen flex justify-center items-center py-3'>
        <div className="flex flex-col gap-3 pt-5 w-4/5 lg:w-3/5">
          <p className='text-gray-100 text-lg'>
            Here’s a glimpse of my technical expertise, from building sleek user interfaces to creating robust backend systems. These skills reflect my dedication to delivering efficient, creative,   and impactful solutions as a web developer.
          </p>
          <div className='flex gap-3 flex-wrap'>
            <SkillList title="Frontend" skillArray={frontend}/>
            <SkillList title="Backend" skillArray={backend}/>
            <SkillList title="Databases" skillArray={databases}/>
            <SkillList title="Other Tools" skillArray={tools}/>
            <SkillList title="Programming" skillArray={programming}/>
          </div>
        </div>
    </div>

  )
}

export default Skills