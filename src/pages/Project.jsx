import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'   

const Project = () => {
  const projects=[
    {
      img1:'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
      img2:'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'
    },
{
  img1: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
  img2: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821'

},{
  img1: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
  img2:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'

}]
gsap.registerPlugin(ScrollTrigger);
useGSAP(function(){
      gsap.from('.hero',{
        height:'100px',
        stagger:{
          amount:0.5
        },
        scrollTrigger:{
 trigger:'.lol',
 markers:true,
 start:'top 100%',
 end:'top -150%',
 scrub:true
        }
      })
    })
    
    

  
  return (
    <div className='p-4 mb-[400vh]'>
        <div className=' pt-[45vh] '>
          <h2 className="font-[font1] text-[10vw] uppercase ">Projets</h2>
        </div>
        <div className='-mt-20 lol '>
       {projects.map(function(elem,ind){
return <div  key={ind} className=' hero w-full h-[850px] mb-4 flex gap-4 '>
<ProjectCard img1={elem.img1} img2={elem.img2}/>


</div>

       })}


            
             </div>
             
          </div>
         


  )
}

export default Project