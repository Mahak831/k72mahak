import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
const Stairs = (props) => {
  const currentPath=useLocation().pathname;

    const stairParentRef=useRef(null);
  const pageref=useRef(null);
  useGSAP(function(){
    const t1=gsap.timeline()
     t1.to(stairParentRef.current,{
      display:'block'
    })
  t1.from('.stair',{
      height:0,
      stagger:{
        amount:-0.25
      }
    })
    t1.to('.stair',{
      y:'100%',
        stagger:{
        amount:-0.25
      }
    })
    t1.to(stairParentRef.current,{
      display:'none'
    })
    t1.to('.stair',{
      y:'0%',
    })

    gsap.from(pageref.current,{
      opacity:0,
      delay:1.2,
      scale:1.2
    })
  },[currentPath])
  return (
  <div>
    <div ref={stairParentRef} className='h-screen w-full fixed  top-0 z-20 '>
 <div className='h-full w-full flex '>
        <div className=' stair h-full w-1/5 bg-black'></div>
              <div className=' stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                     <div className='stair h-full w-1/5 bg-black'></div>
                      <div className='stair h-full w-1/5 bg-black'></div>
                      </div>
</div>
<div ref={pageref}>
{props.children}
</div>

  </div>

  )
}

export default Stairs