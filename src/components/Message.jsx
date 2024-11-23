import React from 'react'
import { IoMdStarOutline } from 'react-icons/io';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedEmail } from '../redux/appSlice';
import neeru from "../assets/neeru.jfif"
import { motion } from 'framer-motion';



const Message = ({email}) => {
    const dispatch=useDispatch();
    const navigate= useNavigate();
    

    const openMail=()=>{
        dispatch(setSelectedEmail(email))
        navigate(`/mail/${email.id}`)
    }
  return (
    <>
    <motion.div 
    initial={{opacity:0, y:-20}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5}}
    onClick={openMail} className='hidden p-2 md:flex hover:shadow-md hover:cursor-pointer items-center gap-2'>
        {/* Left icons */}
        <div className='flex gap-2 text-gray-400 hover:text-gray-950'>
            <div className=''>
                <MdOutlineCheckBoxOutlineBlank size={"20px"} className='ml-4'/>
            </div>
            <div>
                <IoMdStarOutline  size={"20px"}/>
            </div>
        </div>
        {/* message source /subject*/}
        <div key={email.id} className='flex gap-28 text-gray-950 text-sm overflow-x-hidden'>
            <p>{email?.sender}</p>
            <p>{email?.subject} </p>
        </div>
        
        
        {/* time */}
        <div className='text-gray-950 text-sm overflow-x-hidden ml-20 mr-3'>
            <p>{new Date(email?.createdAt?.seconds*1000).toUTCString()}</p>
        </div>
    </motion.div>
    {/* Moibile Message */}
    <div className='md:hidden'>
    <div onClick={openMail} className='Md:hidden flex w-screen my-2 gap-5 px-3 py-3 items-start'>
        <div className='w-[2/12] '>
            <img className='w-14 h-14 rounded-full' src={neeru} alt='Profilepic'/>
        </div>
        <div key={email.id} className='w-10/12 '>
            <div   className='flex justify-between py-1 '>
                <h1 className='text-lg'>{email?.sender}</h1>
                <p>{new Date(email?.createdAt?.seconds*1000).setDate()}</p>
            </div>
            <div className='pr-4'>
                <p className='overflow-x-hidden'>{email?.subject}</p>
            </div>
            
            <div className='flex justify-between py-1 '>
                <p className='overflow-x-hidden'>{email?.message}</p>
                <IoMdStarOutline size={"20px"} className='ml-1 hover:cursor-pointer'/>
            </div>
        </div>
    </div>
    </div>
    
    
        
        
    
    </>
  )
}

export default Message