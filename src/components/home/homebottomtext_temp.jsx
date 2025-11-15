import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div>
      <div className='font-[font2] flex items-center justify-center gap-2  '>
        <Link  className='text-[4.5vw] border-3 hover:border-[#b6de3f] hover: text-[#D3FD50] py-2 pt-6 border-white rounded-full px-14  uppercase leading-[5.5vw]' to='/projects' >Projects</Link>
         <Link  className=' hover:border-[#D3FD50] hover: text-[#D3FD50] text-[4.5vw] border-3 py-2 pt-6 leading-[5.5vw] border-white rounded-full px-14 uppercase ' to='/agence' > Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText;