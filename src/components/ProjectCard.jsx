import React from 'react'

function ProjectCard(
    {
        project
    }
) {
  return (
    
    <div className="w-[80%] rounded-lg bg-gray-800 p-4 flex flex-col sm:w-[45%] lg:w-[30%] gap-3 opacity-90 hover:opacity-100 hover:scale-105">
        <img
        src={project.image}
        alt="image not found"
        className="w-full object-cover aspect-video rounded-sm shadow-black shadow-sm transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <span className="font-medium text-lg sm:text-xl truncate text-white">
        {project.title}
        </span>
        <p className="text-gray-300 text-sm opacity-90">{project.description}</p>
        <p className="text-gray-400 text-sm">
        <strong>Technology:</strong> {project.technologies}
        </p>
        <a
        href={project.url}
        className="bg-green-700 text-white text-center py-2 rounded-sm hover:bg-green-600 transition duration-200"
        >
        View Project
        </a>
     </div>
  
  )
}

export default ProjectCard