import Head from 'next/head'
import { Inter } from 'next/font/google'
import {GrContactInfo} from 'react-icons/Gr'
import {MdOutlineMessage} from 'react-icons/Md'
import {AiFillEye} from 'react-icons/Ai'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
 
    <>
    <Head><title>My Next App</title></Head>
    <div className='p-6'>
      <nav className='flex justify-around ' >
       <div className='m-2  h-6 w-6 items-center justify-center rounded-full bg-blue-600'/>
       <h1 className='-ml-4  font-bold text-white text-2xl ' >Anywhere App</h1>
       <h2 className='text-gray-300 cursor-pointer  hover:text-gray-400 ' >Home</h2>
       <h2 className='text-gray-300  cursor-pointer hover:text-gray-400  ' >Join</h2>
      </nav>
      <div className='mt-60'>
        <section className='m-y-3' >
          <h2 className='uppercase text-gray-400 ' >Start for free</h2>
          <h1 className='text-3xl text-white ' >Create new account<span className='text-blue-800 text-5xl ' >.</span></h1>
          <h2 className='mt-3 text-gray-300 ' >Already A  Member?<span className='text-red-500 cursor-pointer font-bold text-2xl  ' >Log In</span></h2>
        </section>
        <section className='flex mt-7 '>
          <form className='login ' >
            <div className='flex gap-6 ' >
               <div className='relative h-[5vh] w-fit' >
                 <input className='outline-none border-2 rounded-md h-[5vh] w-fit bg-gray-300' type={"text"} placeholder="First Name..."  />
                 <GrContactInfo className='text-xl absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2'/>
               </div>
               <div className='relative h-[5vh] w-fit ' >
                 <input className='otline-none border-2 rounded-md h-[5vh] w-fit bg-gray-300' type={"text"} placeholder="Last Name..."  />
                 <GrContactInfo className='text-xl absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2 '/>
               </div>
            </div> 
            <div className='mt-10  flex flex-col gap-3' >
               <div className='relative h-[5vh]  w-[100%]' >
                 <input className='outline-none h-[5vh] w-64 border-2 rounded-md  bg-gray-300' type={"email"} placeholder="Email"  />
                 <MdOutlineMessage className='text-xl absolute w-[50%] top-1/2 right-2 -translate-x-12 -translate-y-1/2 '/>
               </div>
               <div className='relative h-[5vh]  w-[100%]' >
                 <input className='outline-none h-[5vh] w-64 border-2 rounded-md  bg-gray-300' name='FirstName' type={"password"} placeholder="Password"  />
                 <AiFillEye className='text-xl absolute w-[50%] top-1/2 right-2 -translate-x-12 -translate-y-1/2 ' />
               </div>
            </div>  
            <div className='mt-10 flex text-white gap-4 hover:border-red' >
              <button className='style-border' >Change Method</button>
              <button className='style-border' >Create Account</button>
            </div>
          </form>
        </section>
      </div>
    </div>
    </>
  )
}
