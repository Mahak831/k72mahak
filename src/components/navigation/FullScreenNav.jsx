import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useRef } from 'react'
import  { NavbarContext } from '../context/NavContext';

const FullScreenNav = () => {
const stairParentRef = useRef(null);
const fullscreenRef=useRef(null);

   const fullNavLinksRef=useRef(null);
   const [navOpen,setNavOpen]=useContext(NavbarContext)
   console.log(navOpen);


    function gsapAnimation(){
            const t1=gsap.timeline()

     // Set initial states
     gsap.set('.stairing', { height: 0 })
     gsap.set('.link', { opacity: 0, rotateX: 90 })
     gsap.set('.navLink', { opacity: 0 })

     t1.to('.stairing',{
      delay:0.5,
         height:'100%',
         stagger:{
           amount:-0.3
         }
       })
 
      t1.to('.link',{
         opacity:1,
      rotateX:0,
      stagger:{
         amount:0.2
      }
      })
   t1.to('.navLink',{
      opacity:1
  

   })}
   function gsapAnimationReverse(){
            const t1=gsap.timeline()

      t1.from('.link',{
         opacity:0,
      rotateX:90,
      stagger:{
         amount:0.2
      }
      })
     t1.from('.stairing',{
      delay:0.5,
         height:0,
         stagger:{
           amount:-0.3
         }
       })
 
      
   t1.from('.navlink',{
      opacity:0
  

   })
   
   
   
   }
   useGSAP(function(){
if(navOpen){
      gsap.set('#fullscreennav',{
         display:'block'
      })
      gsapAnimation()
     }else{
      const t1 = gsap.timeline()
      t1.to('.navLink', {
         opacity: 0,
         duration: 0.3
      })
      .to('.link', {
         opacity: 0,
         rotateX: 90,
         stagger: {
            amount: 0.2
         }
      })
      .to('.stairing', {
         height: 0,
         stagger: {
            amount: -0.3
         }
      })
      .set('#fullscreennav', {
         display: 'none'
      })
     }
     
     },[navOpen])
      
     
  return (
    <div ref={fullscreenRef} id="fullscreennav" className=" hidden h-screen overflow-x-hidden w-full z-50    absolute bg-black">
    <div ref={stairParentRef} className= ' h-screen w-full fixed '>
<div className='h-full w-full flex '>
        <div className=' stairing h-full w-1/5 bg-black'></div>
              <div className=' stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                     <div className='stairing h-full w-1/5 bg-black'></div>
                      <div className='stairing h-full w-1/5 bg-black'></div>
                      </div>


    </div>
    <div ref={fullNavLinksRef} className="relative">
        <div className="navLink  flex  p-5 w-full justify-between items-start  "
      >
          <div className=''>
       <div className=' w-36'>
        <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                      <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>

     </div>
   </div>
   <div onClick={()=>{
      setNavOpen(false);
   }} className='h-32 w-32 relative cursor-pointer '>
      <div className='h-42 absolute w-1 bg-[#D3FD50] -rotate-45  origin-top transform'>

      </div>
        <div className='h-42 absolute right-0 w-1 bg-[#D3FD50] rotate-45  origin-top transform'>

      </div>
     
   </div>




      </div>

      <div className=' py-30 '>

         <div  className="link origin-top relative  border-amber-50 border-y-1" >
   
            <h1 className ='text-white font-[font2] leading-[1] text-center text-[8vw]'>Home</h1>
            <div  className="movelink bg-[#D3FD50]  absolute top-0 flex" >
              <div className="movex flex   items-center">
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className="h-30 shrink-0 w-80 rounded-full object-cover " src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className=" rounded-full shrink-0  h-30 w-80 object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
             <div className="movex flex items-center">
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className="h-30 shrink-0 w-80 rounded-full object-cover " src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className=" rounded-full shrink-0  h-30 w-80 object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
            {/* <div>
               <h2>Pour Tout voir</h2>
               <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2>Pour Tout voir</h2>
               <img className="h-80 w-161"  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div> */}
            </div>

         
        </div>
                 <div  className="link origin-top  relative  border-y-1" >
   
            <h1 className =' font-[font2] text-white leading-[1] text-center text-[8vw]'>About</h1>
            <div  className="movelink bg-[#D3FD50]  absolute top-0 flex" >
              <div className="movex flex   items-center">
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className="h-30 shrink-0 w-80 rounded-full object-cover " src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className=" rounded-full shrink-0  h-30 w-80 object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
             <div className="movex flex items-center">
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className="h-30 shrink-0 w-80 rounded-full object-cover " src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className=" rounded-full shrink-0  h-30 w-80 object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
            {/* <div>
               <h2>Pour Tout voir</h2>
               <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2>Pour Tout voir</h2>
               <img className="h-80 w-161"  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div> */}
            </div>

         
        </div>
                 <div  className="link  origin-top  relative border-white border-y-2" >
   
            <h1 className =' text-white font-[font2] leading-[1] text-center text-[8vw]'></h1>
            <div  className="movelink bg-[#D3FD50]  absolute top-0 flex" >
              <div className="movex flex   items-center">
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className="h-30 shrink-0 w-80 rounded-full object-cover " src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className=" rounded-full shrink-0  h-30 w-80 object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
             <div className="movex flex items-center">
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className="h-30 shrink-0 w-80 rounded-full object-cover " src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className=" rounded-full shrink-0  h-30 w-80 object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
            {/* <div>
               <h2>Pour Tout voir</h2>
               <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2>Pour Tout voir</h2>
               <img className="h-80 w-161"  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div> */}
            </div>

         
        </div>
                 <div  className="link origin-top  relative border-white border-y-2" >
   
            <h1 className =' font-[font2] leading-[1] text-center  text-white text-[8vw]'>Agence</h1>
            <div  className="movelink bg-[#D3FD50]  absolute top-0 flex" >
              <div className="movex flex   items-center">
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className="h-30 shrink-0 w-80 rounded-full object-cover " src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className=" rounded-full shrink-0  h-30 w-80 object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
             <div className="movex flex items-center">
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className="h-30 shrink-0 w-80 rounded-full object-cover " src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className=" rounded-full shrink-0  h-30 w-80 object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
            {/* <div>
               <h2>Pour Tout voir</h2>
               <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2>Pour Tout voir</h2>
               <img className="h-80 w-161"  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div> */}
            </div>

         
        </div>
        <div  className="link origin-top  relative border-white border-y-2" >
   
            <h1 className =' font-[font2] leading-[1] text-center  text-white text-[8vw]'>Projects</h1>
            <div  className="movelink bg-[#D3FD50]  absolute top-0 flex" >
              <div className="movex flex   items-center">
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className="h-30 shrink-0 w-80 rounded-full object-cover " src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className=" rounded-full shrink-0  h-30 w-80 object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
             <div className="movex flex items-center">
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className="h-30 shrink-0 w-80 rounded-full object-cover " src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2 className="whitespace-nowrap font-[font2] leading-[1] text-center text-[8vw] text-black">Pour Tout voir</h2>
               <img className=" rounded-full shrink-0  h-30 w-80 object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
         </div>
         {/* <div className="link border-white border-t-2" >
   
            <h1 className =' font-[font2] leading-[1] text-center text-[8vw]'>Agence</h1>
            {/* <div>
              <div>
               <h2>Pour Tout voir</h2>
               <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2>Pour Tout voir</h2>
               <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
            <div>
               <h2>Pour Tout voir</h2>
               <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"/>
               <h2>Pour Tout voir</h2>
               <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"/>


            </div>
            </div> */}

         
      </div>
    </div>


</div>
    </div>
  )
}

export default FullScreenNav