import Head from 'next/head'
import { Inter } from 'next/font/google'
import {GrContactInfo} from 'react-icons/Gr'
import {MdOutlineMessage} from 'react-icons/Md'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/Ai'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [open,setOpen] = useState(false)

  const toggle = () =>{
    setOpen(!open)
  }

  return (
    <>
    <Head><title>My Next App</title></Head>  
   <div className='login  h-screen w-[100%] '>
    <div className=' p-10 w-[50%] ' >
      <nav className='flex  justify-around ' >
      <div className='flex items-center gap-2'>
        <div className=' h-6 w-6 rounded-full bg-blue-600 flex '/>
        <h1 className=' font-bold text-white text-2xl ' >Anywhere App</h1>
      </div> 
       <h2 className='text-xl text-gray-300 cursor-pointer  hover:text-lime-700 ' >Home</h2>
       <h2 className='text-xl text-gray-300  cursor-pointer hover:text-lime-700 ' >Join</h2>
      
      </nav>
      <div className='pt-32 pl-32 h-auto'>
        <section className='' >
          <h2 className='uppercase text-gray-400 ' >Start for free</h2>
          <h1 className='text-3xl text-white' >Create new account<span className='text-blue-800 text-5xl ' >.</span></h1>
          <h2 className='mt-3 text-gray-300 ' >Already A  Member?<span className='text-red-500 cursor-pointer font-bold text-2xl  ' >Log In</span></h2>
        </section>
        <section className='flex mt-7 h-full w-full'>
          <form className='' >
            <div className='flex gap-6 ' >
               <div className='relative h-[6vh] w-fit' >
                 <label className='absolute top-0 px-2 translate-x-1 text-xs text-gray-800 focus:text-blue-800 ' >First Name</label>
                 <input className='outline-none px-2 py-[1.5rem] border-2  rounded-md text-justify h-[5vh] w-[100%] focus:border-blue-400 bg-gray-300' type={"text"} />            
                 <GrContactInfo className='text-xl absolute top-1/2 right-2 -translate-x-1 -translate-y-1/2'/>
               </div>
               <div className='relative h-[6vh] w-fit ' >
               <label className='absolute top-0 translate-x-1 px-2  text-xs text-gray-800 focus:text-blue-800 ' >Last Name</label>
                 <input className='outline-none border-2 px-2 py-[1.5rem] rounded-md h-[5vh] w-fit bg-gray-300 focus:border-blue-400 ' type={"text"}/>
                 <GrContactInfo className='text-xl absolute top-1/2 right-2 -translate-x-1 -translate-y-1/2 '/>
               </div>
            </div> 
            <div className='mt-10  flex flex-col gap-3' >
               <div className='relative h-[6vh]  w-[100%]' >
                 <label className='absolute top-0 px-2  translate-x-1 text-xs text-gray-800 focus:text-blue-800 ' >Email</label>
                 <input className='outline-none h-[5vh] px-2 py-[1.5rem] w-full border-2 rounded-md  bg-gray-300 focus:border-blue-400' type={"email"}/>
                 <MdOutlineMessage className='text-xl absolute w-[50%] top-1/2 right-2 translate-x-24 -translate-y-1/2 '/>
               </div>
               <div className='relative h-[6vh]  w-[100%]' >
                 <label className='absolute top-0 px-2  translate-x-1 text-xs text-gray-800 focus:text-blue-800 ' >Password</label>
                 <input className='outline-none h-[5vh] w-full px-2 py-[1.5rem] border-2 rounded-md  bg-gray-300 focus:border-blue-400' type={open?"password":"text"}/>
                 <div className='text-xl absolute w-[28%] top-5 right-2 translate-x-24 -translate-y-1 cursor-pointer '>
                 <div onClick={toggle} >
                 {open?<AiFillEye />: <AiFillEyeInvisible  />}
                 </div>
                 </div>
               </div>
            </div>  
            <div className='mt-10 flex text-white gap-4 ' >
              <button className='style-border ' >Change Method</button>
              <button className='style-border' >Create Account</button>
            </div>
          </form>
        </section>
       </div>
      </div>
    </div>
    </>
  )
}
