import * as React from "react";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import {GrContactInfo} from 'react-icons/Gr'
import {MdOutlineMessage, MdPassword} from 'react-icons/Md'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/Ai'
import { useState } from 'react'
import { useForm } from "react-hook-form";

const inter = Inter({ subsets: ['latin'] })

type FormData = {
  firstName: string;
  lastName: string;
  email:string;
  password:string;
};

export default function Home() {

  const {register,handleSubmit,reset,formState: { errors } } = useForm<FormData>();

  const onSubmit =  handleSubmit(
    (data) => {
      console.log(JSON.stringify(data));
      reset() 
    }
    )

  const [open,setOpen] = useState(false)

  const toggle = () =>{
    setOpen(!open)
  }

  return (
  <>
  <Head><title>My Next App</title></Head>  
   <div className='login h-screen w-screen md:h-screen md:min-w-full'>
    <div className='p-6 md:p-10 md:w-[50%] ' >
      <nav className='md:flex md:justify-around' >
      <div className='flex items-center gap-2'>
        <div className=' h-6 w-6 rounded-full bg-blue-600'/>
        <h1 className=' font-bold text-white md:text-2xl text-xl' >Anywhere App</h1>
      </div> 
       <h2 className='md:text-xl text-gray-300 cursor-pointer  hover:text-lime-700 ml-6 pt-3' >Home</h2>
       <h2 className='md:text-xl text-gray-300  cursor-pointer hover:text-lime-700 ml-6 pt-3' >Join</h2>
      </nav>
      <div className='md:pt-32 md:pl-32 md:h-auto pt-10 md:w-[100%] '>
        <section className='md:w-[50%]' >
          <h2 className='uppercase text-sm text-gray-400 md:text-xl -mb-6' >Start for free</h2>
          <h1 className='text-xl md:text-3xl text-white' >Create new account<span className='text-blue-800 text-6xl font-bold ' >.</span></h1>
          <h2 className='mt-3 text-gray-300' >Already A  Member?<span className='text-red-500 cursor-pointer font-bold md:text-2xl  hover:text-red-400 text-xl ' > Log In</span></h2>
        </section>
        <section className='mt-7 h-full w-[60%] '>
          <form onSubmit={onSubmit} className='' method="post"  >
            <div className='md:flex flex-col gap-6 md:gap-6 w-full  ' >
               <div className='relative h-[6vh] w-full ' >  
                 <label className='absolute top-0 px-2 translate-x-1 text-xs text-gray-800 focus:text-blue-800' >First Name</label>
                 <input {...register("firstName",{required:true,pattern: /^[A-Za-z]+$/, maxLength: 20})} id='firstName' className='outline-none px-2 py-[1.5rem] border-2 rounded-md text-justify h-[5vh]  focus:border-blue-400 bg-gray-300 pr-10 w-full' type={"text"} />
                 {
                  errors?.firstName?.type === "required" && <p className="text-red-600" >This field is required</p>
                 }   
                 {
                  errors?.firstName?.type === "maxLength" && <p className="text-red-600 " >Name cannot exceed 20 characters</p>   
                 }
                 {
                  errors?.firstName?.type === "pattern" && <p className="text-red-600" >Alphabetical characters only</p>   
                 }                              
                <GrContactInfo className='text-xl absolute top-1/2 right-2 -translate-x-1 -translate-y-1/2'/>
               </div>
               <div className='relative h-[6vh] w-full ' >
                 <label className='absolute top-0 translate-x-1 px-2  text-xs text-gray-800 focus:text-blue-800 ' >Last Name</label>
                 <input {...register("lastName",{required:true,pattern: /^[A-Za-z]+$/})} id='LastName' className='outline-none border-2 px-2 py-[1.5rem] rounded-md h-[5vh] bg-gray-300 focus:border-blue-400 pr-10 w-full' type={"text"}/>
                 {
                  errors?.lastName?.type === "required" && <p className="text-red-600" >This field is required</p>
                 }
                 {
                  errors?.lastName?.type === "pattern" && <p className="text-red-600" >Alphabetical characters only</p>
                 }
                 <GrContactInfo className='text-xl absolute top-1/2 right-2 -translate-x-1 -translate-y-1/2 '/>
               </div>
            </div> 
            <div className='mt-10  flex flex-col gap-5' >
               <div className='relative h-[6vh]' >
                 <label className='absolute top-0 px-2  translate-x-1 text-xs text-gray-800 focus:text-blue-800 ' >Email</label>
                 <input {...register("email",{required:true})} id='email' className='outline-none h-[5vh] px-2 py-[1.5rem] w-full border-2 rounded-md  bg-gray-300 focus:border-blue-400 pr-9' type={"email"}/>
                 {
                  errors.email && <p className="text-red-600" >This field is required</p>
                 }
                 <MdOutlineMessage className='text-xl absolute w-[50%] top-1/2 right-6 translate-x-24 -translate-y-1/2 '/>
               </div>
               <div className='relative h-[6vh] mt-2 ' >
                 <label className='absolute top-0 px-2  translate-x-1 text-xs text-gray-800 focus:text-blue-800 ' >Password</label>
                 <input {...register("password",{required:true,minLength:4,maxLength:20,pattern:/(?=.*[!@#$%^&*])/})} id='password' className='outline-none h-[5vh] w-full px-2 py-[1.5rem] border-2 rounded-md  bg-gray-300 focus:border-blue-400 pr-9' type={open?"text":"password"}/>
                 {
                  errors?.password?.type === "required" && <p className="text-red-600" >This field is required</p>
                 }
                 { 
                  errors?.password?.type === "pattern" && <p className="text-red-600" >Must contain atleat one special character</p>
                 }
                 {
                  errors?.password?.type === "minLength" && <p className="text-red-600" >Password must be atleast of 4 characters</p>
                 }
                 {
                  errors?.password?.type === "maxLength" && <p className="text-red-600" >Password should not be grater than 20 character</p>
                 }
                 <div className='text-xl absolute w-[28%] top-5 right-6 translate-x-24 -translate-y-1 cursor-pointer' onClick={toggle} >
                 {open? <AiFillEye/>:<AiFillEyeInvisible/>}
                 </div>
               </div>
            </div>  
            <div className='mt-10 flex text-white gap-4 text-sm' >
              <button className='style-border ' type="reset" >Change Method</button>
              <button className='style-border' type='submit' >Create Account</button>
            </div>
          </form>
        </section>
       </div>
      </div>
    </div>
  </>
  )
}
