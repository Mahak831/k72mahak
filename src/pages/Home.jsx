import React from 'react'
import Video from '../components/home/Video.jsx'
import HomeHeroText from '../components/home/HomeHeroText.jsx'
import HomeBottomText from '../components/home/homebottomtext_temp.jsx'

const Home = () => {
  return (
    <div>
      {/* Full-screen background video */}
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>

      {/* Foreground content */}
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
