import React,{useEffect, useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    faHouse as home, 
    faSquarePhone as contact, 
    faLaptopCode as skill , 
    faCircleInfo as about,
    faBriefcase as project,
    faArrowLeft as back,
    faMoon as moon,
    faSun as sun
} from '@fortawesome/free-solid-svg-icons'

function MenuIcon({icon,to}) {
    return (
        <li className='h-8 rounded-md text-sm relative transition-all duration-300 ease-in-out 
               lg:text-sm lg:h-10 xl:h-12 xl:text-xl'
          
        >
            <NavLink to={to} className={({isActive})=>`flex justify-center items-center w-full h-full rounded-md 
            ${isActive ? 'text-cyan-400 scale-110' : 'text-gray-200'} 
            hover:scale-110 focus:scale-110 
            active:scale-105`}>
                <FontAwesomeIcon icon={icon} />
            </NavLink>
        </li>   
    )
}

function Menubar() {
  return (
    <div className="w-6 fixed left-5 top-7 lg:w-10 xl:w-10 ">
    <Link to="/" className="text-2xl text-white">
      <FontAwesomeIcon icon={back} />
    </Link>
    <ul
      className="bg-gray-900 w-8 flex flex-col rounded-md fixed top-1/2 left-5 lg:w-10 xl:w-10 "
      style={{ transform: "translateY(-50%)"}}
    >
      <MenuIcon text="home" icon={home} to="/home" />
      <MenuIcon text="about" icon={about} to="/about" />
      <MenuIcon text="skill" icon={skill} to="/skills" />
      <MenuIcon text="projects" icon={project} to="/projects" />
      <MenuIcon text="contact" icon={contact} to="/contact" />
    </ul>
  </div>
  
  )
}

export default Menubar