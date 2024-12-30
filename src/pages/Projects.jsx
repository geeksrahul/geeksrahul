import React, {useEffect} from 'react'
import {  ProjectCard } from '../components'
import { useProjects } from '../hooks'

function Projects() {
  useEffect(()=>{
      document.title = "Projects | Geeksrahul";
    },[])
    const projectList = useProjects();
  return (
    <div className='bg-gray-950 pl-0 flex justify-center items-start flex-col gap-5 py-10 '>
        <h2 className='text-2xl pl-7'>
          Here Are The Details Of My<span className='text-yellow-500'> Projects </span> . . .
        </h2>
        <div className="w-full flex justify-start flex-wrap  gap-10 pl-7 pr-0 pt-7">
          {projectList.map((prj,idx) => (
            <ProjectCard project={prj} key={idx} />
          ))}
        </div>
    </div>
  )
}

export default Projects