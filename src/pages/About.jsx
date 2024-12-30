import React, { useEffect, useState } from 'react'
import { PageHeading } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp as up, faChevronDown as down } from '@fortawesome/free-solid-svg-icons';

function FAQ({ question, answer }) {
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    document.title = "About | Geeksrahul";
  },[])

  return (
    <div
      className="w-full bg-gray-700 rounded-md cursor-pointer"
      onClick={() => setVisible((visible) => !visible)}
    >
      {/* Question Section */}
      <div className="w-full text-lg font-semibold flex justify-between items-center p-2">
        <span>{question}</span>
        <span>
          <FontAwesomeIcon icon={visible ? up : down} />
        </span>
      </div>

      {/* Animated Answer Section */}
      <div
        className={`rounded-md rounded-t-none overflow-hidden transition-all duration-300 ease-in-out ${
          visible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="w-full font-normal bg-gray-800 p-2">{answer}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className='min-h-[100%] '>
      {/* <PageHeading text="About" alt="Readme" /> */}
      <div className="min-h-screen flex justify-center items-center  bg-gray-950">
        <div className='w-3/4 flex justify-center items-start flex-col gap-2 pr-5'>
        <p className='text-2xl'> Here are the most common faq about me </p>
          <FAQ 
            question="Introduction"
            answer="Hi, I’m Rahul Baraiya, a native of mahuva, gujarat. I'm passionate for computer programming and because of that I’m constantly exploring new technologies and now enhancing my skills to create innovative web solutions."
          /> 
          <FAQ 
            question="Education"
            answer="I'm pursiving BCA from Maharaja Krishnakumarsinhji Bhavnagar University (MKBU). Here i learned all the foundation skills of computer science. "
          />
          <FAQ 
            question="Interest" 
            answer="I'm passionate about using programming to create web solutions that solve real-world business problems.By leveraging the latest technologies, I aim to craft effective solutions that make complex tasks simple and impactful. "
          />
          <FAQ 
            question="Programming" 
            answer="My programming journey started with C, which gave me a solid foundation of programming fundamentals in my first year. During these time i also started learning java with my one friend and grasped basic concept of oop. sadly that friend left but java dosen't 😄,after that i learned c++ in my third semester and practiced DSA with it, and then from fourth semester i started focusing on web development :) "
          />
          <FAQ 
            question="Web Development" 
            answer="like all geeks, my journey begins with html, css and javascript, then i learned php and mysql for backend, at that time i was enough confident to make full stack web application but one of my friend suggest me to learn advance concept of javascript form Hitesh Sir (Chai Aur Code), and that one advice made me fallen in love with javascript, and then i learned advance javascript, reactjs library and now i am learning express js."
          />
        </div>
      </div>
    </div>
  )
}

export default About