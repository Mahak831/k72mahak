import React from 'react'
import Video from './Video.jsx'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
      <div className='text-[8vw] uppercase leading-[7vw] items-center justify-center'>
        The spark for
      </div>
      <div className='text-[8vw] flex items-center justify-center uppercase leading-[10vw]'>
        All
        <div className='h-[8vw] w-[16vw] rounded-full overflow-hidden bg-black'>
          <Video/>
        </div>
        things
      </div>
      <div className='text-[8vw] uppercase leading-[10vw] items-center justify-center'>
        creative
      </div>
    </div>
  )
}

export default HomeHeroText
