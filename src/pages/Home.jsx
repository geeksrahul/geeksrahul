import React, { useEffect } from 'react'
import { PageHeading } from '../components'
import coder from '../assets/coder.png'
import { ReactTyped } from 'react-typed'
function Home() {
    useEffect(()=>{
      document.title = "Home | Geeksrahul";
    },[])
  return (
    <div className=''>
    <PageHeading text="Home" alt="" />
    <div className='bg-gray-950 h-screen flex justify-center items-center p-5 '>
      <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <img 
            src={coder} 
            alt="Coder Image" 
            className="w-full sm:w-1/3 md:w-1/2 lg:w-1/3 mx-auto object-contain" 
          />
          <h2 className='text-xs font-medium sm:text-2xl'>
            <span>Rahul Baraiya</span>
            <span> [ <ReactTyped className='text-yellow-400' strings={["Student","Programmer","Web Developer","Learner..."]} typeSpeed={40}  /> ] </span>
          </h2>
          <div className="cta p-2 flex flex-col sm:flex-row justify-between gap-3 text-sm">
          <a 
            className='p-2 bg-blue-700 rounded-sm font-bold hover:bg-blue-800 w-full sm:w-auto text-center' 
            href="" 
            target="_blank"
          >
            Download CV
          </a>
          <a 
            className='p-2 bg-blue-700 rounded-sm font-bold hover:bg-blue-800 w-full sm:w-auto text-center' 
            href="mailto:askgeeksrahul@gmail.com" 
            target="_blank"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Home


