import React from 'react'
function SkillCard({skill}) {
  return (
    <div className='w-full flex items-center gap-3 p-2 bg-gray-800 rounded-md hover:bg-gray-700 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl sm:w-auto'>
      <img src={skill.icon} alt="" className='w-8'/>
      <p>
        {skill.name}
      </p>
    </div>
  )
}

export default SkillCard