import React,{useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHouse as home, 
    faSquarePhone as contact, 
    faLaptopCode as skill , 
    faCircleInfo as about,
    faBriefcase as project,
    faArrowLeft as back
} from '@fortawesome/free-solid-svg-icons'

function MenuIcon({icon,to,text="hi"}) {
    const [tooltip, setTooptip] = useState(false);
    return (
        <li className='h-10 rounded-md text-xl relative'
            onMouseOver={()=>{
                setTooptip(true);
            }}
            onMouseOut={()=>{
                setTooptip(false);
            }}
        >
            <NavLink to={to} className={({isActive})=>`flex justify-center items-center w-full h-full rounded-md ${isActive ? ' text-cyan-400 scale-110':'text-gray-300'} hover:scale-110 hover:text-cyan-400`}>
                <FontAwesomeIcon icon={icon} />
            </NavLink>
        </li>   
    )
}

function Menubar() {
  return (
    <div className="w-10 fixed left-8 top-7">
    <Link to="/" className="text-2xl text-white">
      <FontAwesomeIcon icon={back} />
    </Link>
    <ul
      className="bg-gray-700 w-10 flex flex-col rounded-md fixed top-1/2 left-7"
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