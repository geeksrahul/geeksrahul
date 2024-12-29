import React from 'react'

function PageHeading({
    text = "",
    alt = "",
}) {
  return (
    <div className='text-2xl font-medium'> 
        <span className='relative'>
          {text}
          {alt && <span className='w-20 h-1 bg-red-700 absolute bottom-3 -left-2 -rotate-3'> </span>}
        </span>
        {alt && <span> {alt} </span>}
    </div>
  )
}

export default PageHeading