import React from 'react'
import { PageHeading, Project } from '../components'
import projectList from './projectsList'
function Projects() {
  return (
    <div className='bg-gray-950 pr-2'>
          <PageHeading text="Projects" className="text-3xl" />
          <div className="flex flex-wrap justify-evenly gap-y-7 pt-5">
            {projectList.map((prj,idx) => (
              <Project project={prj} key={idx} />
            ))}
          </div>
    </div>
  )
}

export default Projects