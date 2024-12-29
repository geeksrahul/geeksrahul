import React from 'react'
import Img from '../assets/heroimage.jpeg'
function HeroImage() {
  return (
    <div className="relative">
      <img
        src={Img}
        alt="hi"
        className="w-56 rounded-full border outline outline-4 outline-green-700"
      />
      <p className="bg-white text-black rounded-md absolute bottom-0 right-0 px-3 py-1 text-lg -rotate-6 font-medium opacity-90">
        &lt;Geeksrahul /&gt;
      </p>
    </div>

  )
}

export default HeroImage