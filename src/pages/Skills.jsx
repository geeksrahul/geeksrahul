import React, { useState } from 'react'
import { PageHeading, SkillList } from '../components'
import { frontend, backend, databases, tools, programming} from './skill_list';

function Skills() {
  return (
    <div className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
        <PageHeading text="Skills"/>
        <div className="flex flex-col gap-3 h-full pt-5">
          <p className='text-gray-100'>
            Here’s a glimpse of my technical expertise, from building sleek user interfaces to creating robust backend systems. These skills reflect my dedication to delivering efficient, creative,   and impactful solutions as a web developer.
          </p>
          <SkillList title="Programming" skillArray={programming}/>
          <SkillList title="Frontend" skillArray={frontend}/>
          <SkillList title="Backend" skillArray={backend}/>
          <SkillList title="Databases" skillArray={databases}/>
          <SkillList title="Other Tools" skillArray={tools}/>
        </div>
    </div>

  )
}

export default Skills