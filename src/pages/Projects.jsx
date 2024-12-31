import React, {useEffect} from 'react'
import {  ProjectCard } from '../components'
import { useProjects } from '../hooks'

function Projects() {
  useEffect(()=>{
      document.title = "Projects | Geeksrahul";
    },[])
    const projectList = useProjects();
  return (
    <div className='bg-gray-950 pl-0 flex min-h-screen justify-center items-center flex-col gap-5 py-7'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-xl pl-7 pr-2 font-medium lg:text-3xl'>
          Here Are The Details Of My<span className='text-yellow-500'> Projects </span> . . .
        </h2>
        <div className="w-full flex justify-start flex-wrap gap-10 pl-7 pr-0 pt-7 lg:justify-center">
          {projectList.map((prj,idx) => (
            <ProjectCard project={prj} key={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects