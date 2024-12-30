import React, {useEffect} from 'react'
import { PageHeading } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { x, instagram, linkedin, youtube, github } from '../assets/social-icon'
function SocialAccount({
  icon,
  username,
  url,
}){
  return (
    <a href={url} target='_blank' className='flex w-40 items-center gap-2 p-2 bg-gray-800 rounded-md hover:bg-gray-700'>
      <img src={icon} alt="" className='w-[25px] bg-gray-200 p-0 rounded-md'/>
      <span className='text-lg'> @{username} </span>
    </a>
  );
}

function Contact() {
  useEffect(()=>{
    document.title = "Contact | Geeksrahul";
  },[])

  return (
<div className="min-h-[100vh] flex justify-center items-center py-7 lg:pl-10">
  <div className="flex justify-center flex-col gap-5 pr-5 ">
    <h2 className='text-3xl font-medium'>Have a question or want to collaborate ? Let’s <span className='text-yellow-300'> connect ! </span> </h2>
    <p className='text-lg'>
    Whether you have a question, an opportunity, or just want to say hello, this is the place to connect. Feel free to reach out to me on any of the platforms listed below. I’m always open to conversations, opportunities, and collaborations. I’ll do my best to respond promptly!
    </p>
    <div className='flex gap-5 flex-wrap'>
      <SocialAccount icon={instagram} username="geeksrahul" url="https://github.com/geeksrahul" />
      <SocialAccount icon={linkedin} username="geeksrahul" url="https://www.linkedin.com/in/geeksrahul/" />
      <SocialAccount icon={github} username="geeksrahul" url="https://github.com/geeksrahul" />
      <SocialAccount icon={youtube} username="geeksrahul" url="https://www.youtube.com/@geeksrahul" />
      <SocialAccount icon={x} username="geeksrahul" url="https://x.com/geeksrahul" />
    </div>
  </div>
</div>

)
}

export default Contact

{/* Social Section */}
{/* <div>
  <h2 className="text-lg md:text-xl lg:text-2xl text-white"> Or Follow Me</h2>
  <div className="flex gap-3">
    <SocialAccount icon={instagram} username="geeksrahul" url="https://github.com/geeksrahul" />
    <SocialAccount icon={linkedin} username="geeksrahul" url="https://www.linkedin.com/in/geeksrahul/" />
    <SocialAccount icon={github} username="geeksrahul" url="https://github.com/geeksrahul" />
    <SocialAccount icon={youtube} username="geeksrahul" url="https://www.youtube.com/@geeksrahul" />
    <SocialAccount icon={x} username="geeksrahul" url="https://x.com/geeksrahul" />
  </div>
</div> */}