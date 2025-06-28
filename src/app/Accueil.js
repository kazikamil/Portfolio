"use client"
import Image from 'next/image';
import innovation from '../app/innovation-animate.svg'
import {Typewriter,useTypewriter,Cursors, Cursor} from 'react-simple-typewriter'
export default function Accueil() {
   const {text}=useTypewriter({
      words:['Fullstack','Graphic','hi'],
      loop:{},
      typeSpeed:120,
      deleteSpeed:80,
   })
    return (
      <div id='home' className='h-[600px] md:h-auto font-sans pt-16'>
        
        <div className=" lg:mx-16 xl:mx-32 flex items-center justify-center lg:justify-between items-center mt-16  ">
           <div className="flex flex-col space-y-5 md:space-y-5 items-center lg:items-start  ">
            <p className=" block font-bold text-8xl text-center lg:text-left  w-full text-outline">Kamil Kazi</p>
            <div className="flex flex-col md:flex-row mb-2  block font-normal md:justify-center lg:justify-start text-3xl  text-center lg:text-left  w-full ">&nbsp;I'm a &nbsp; {' '}
               <span className='font-bold text-emerald-400'>
               <Typewriter
               words={['FullStack developer', 'Graphic designer',]}
               loop={false}
               cursor
               
               typeSpeed={70}
               deleteSpeed={50}
               delaySpeed={1000}
                />
               </span>
            </div>
            <a href="/Software_Engineer.docx" className="ml-1 mt-5 px-3 py-2 bg-emerald-500 text-white rounded-md text-sm font-medium hover:bg-emerald-700">Download My CV</a>
           </div>
           <div className='hidden lg:block'>
            <a href="https://storyset.com/technology">
               <Image src={innovation} width={400} height={400}/>
            </a>
           </div>
        </div>
        {/*<div className="mx-52 flex tems-center justify-between items-center my-36">
           <div>
            <Image src={dev} width={300} height={300}/>
           </div>
           <div className="flex flex-col  items-center space-y-2">
            <div className="block font-bold text-8xl  text-emerald-400 ">Fullstack</div>
            <div className="block font-bold text-5xl  text-emerald-400 ">developer</div>
           </div>
        </div>*/}
        {/*<div className="mx-52 flex items-center justify-between items-center my-36">
           <div className="flex flex-col  items-center space-y-2">
            <div className="block font-bold text-8xl  text-violet-400 ">Designer</div>
           </div>
           <div>
            <Image src={designer} width={300} height={300}/>
           </div>
        </div>*/}
      </div>
    );
  }