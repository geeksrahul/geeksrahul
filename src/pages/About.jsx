import React, { useState } from 'react'
import { PageHeading } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp as up, faChevronDown as down } from '@fortawesome/free-solid-svg-icons';

function FAQ({ question, answer }) {
  const [visible, setVisible] = useState(false);

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
    <div className='h-full'>
      <PageHeading text="About" alt="Readme" />
      <div className="flex h-full justify-center items-center">
        <div className='w-1/2 flex justify-center items-start flex-col gap-2'>
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
        </div>
      </div>
    </div>
  )
}

export default About