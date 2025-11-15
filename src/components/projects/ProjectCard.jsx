import React from 'react'

const ProjectCard = (props) => {
  return (
<>
    <div className= 'group  relative transition-all rounded-none  hover:rounded-[50px] overflow-hidden  w-1/2 h-full '> 
            <img className='h-full w-full object-cover' src={props.img1}/>
            <div className='opacity-0 transition-all group-hover:opacity-100   absolute flex items-center justify-center h-full w-full -top-0 left-0 bg-black/50 '>
            <h2 className='uppercase text-5xl border-2 p-2 text-white border-white  rounded-full '>Vior le project</h2>
            </div>
            
             </div>

              <div className= 'group  relative transition-all rounded-none  hover:rounded-[50px] overflow-hidden  w-1/2 h-full '> 
            <img className='h-full w-full object-cover' src={props.img2}/>
            <div className='opacity-0 transition-all group-hover:opacity-100   absolute flex items-center justify-center h-full w-full -top-0 left-0 bg-black/50 '>
            <h2 className='uppercase text-5xl border-2 p-2 text-white border-white  rounded-full '>Vior le project</h2>
            </div>
            </div>
</> 

)
}

export default ProjectCard