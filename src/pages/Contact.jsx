import React from 'react'
import { PageHeading } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
function SocialAccount({
  icon,
  username,
  url,
}){
  return (
    <a href={url} target='_blank' className='flex w-36 items-center gap-2 p-2 bg-gray-800 rounded-md'>
      <FontAwesomeIcon icon={icon}/>
      <span> @{username} </span>
    </a>
  );
}

function Contact() {
  return (
    <div className='max-h-screen '>
      <PageHeading text="Contact"/>
      <div className='p-20 flex justify-between'>
        <form action="" className='px-20 border-r border-white flex flex-col gap-3 w-3/4'>
          <h2 className='text-2xl'>Drop a message if you have any doubt, or queries...</h2>
          <input type="text" name="" id="" placeholder='Full name' className='bg-transparent border-white border p-2' />
          <input type="text" name="" id="" placeholder='Email address ' className='bg-transparent border-white border p-2' />
          <input type="text" name="" id="" placeholder='Contact' className='bg-transparent border-white border p-2' />
          <textarea name="" id="" rows='5' placeholder='Type your message here...' className='bg-transparent border-white border p-2'></textarea>
          <button type="submit" className='bg-green-700 p-2 border-white border'> Submit </button>
        </form>
        <div className='flex justify-start w-1/4 px-5 flex-col gap-2'>
          <h2>Also Available : </h2>
          <div className='flex flex-col gap-2'>
            <SocialAccount icon={faInstagram} username="geeksrahul" url="https://github.com/geeksrahul"/>
            <SocialAccount icon={faLinkedin} username="geeksrahul" url="https://www.linkedin.com/in/geeksrahul/"/>
            <SocialAccount icon={faGithub} username="geeksrahul" url="https://github.com/geeksrahul"/>
            <SocialAccount icon={faYoutube} username="geeksrahul" url="https://www.youtube.com/@geeksrahul"/>
            <SocialAccount icon={faXTwitter} username="geeksrahul" url="https://x.com/geeksrahul"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact