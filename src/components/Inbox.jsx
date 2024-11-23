import React, { useEffect, useState } from 'react'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineInbox } from "react-icons/md";

import { GoTag } from 'react-icons/go';
import { FaUserFriends } from 'react-icons/fa';
import Messages from './Messages';
import { GoPencil } from "react-icons/go";
import { MdMail } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setopen} from '../redux/appSlice';

const headinglist=[
    
  {
    id:1,
    icon:<MdOutlineInbox size={"20px"}/>,
    title:"Primary"
  },
  {
    id:2,
    icon:<GoTag size={"20px"}/>,
    title:"Promotions"
  },
  {
    id:3,
    icon:<FaUserFriends size={"20px"}/>,
    title:"Social"
  }
]

const Inbox = () => {
  const {open, openSidebar}=useSelector(store=>store.appSlice)
  
  const [mailtypeSelected, setMailTypeSelected]=useState(1);
  


  
  
  return (
    <>
    {/* window */}
    <div className={`w-9/12 hidden md:block px-3`}>
        {/* upper icons */}
        <div className='flex justify-between items-center '>
          {/* left icons */}
          <div className='flex p-2 gap-4 items-center'>
              <div className='flex items-center gap-1 text-gray-700 '>
                <MdOutlineCheckBoxOutlineBlank size={"20px"} className="cursor-pointer"/>
                <IoMdArrowDropdown size={"20px"} className="cursor-pointer"/>
              </div>
              <div className='p-2 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300 '>
                <IoMdRefresh size={"20px"}/>
              </div>
              <div className='p-2 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300'>
                <BsThreeDotsVertical size={"20px"}/>
              </div>
          </div>
          {/* right icons */}
          <div className='flex items-center gap-5 '>
              <div className='hover:bg-gray-300 rounded-sm text-gray-600 '>
                <p className='p-2 text-sm' >1-50 of 150</p>
              </div>
              <button className='hover:bg-gray-300 rounded-full p-2 cursor-pointer' >
                <MdOutlineKeyboardArrowLeft size={"20px"}/>
              </button>
              <button className='hover:bg-gray-300 rounded-full p-2 cursor-pointer'>
                <MdOutlineKeyboardArrowRight size={"20px"}/>
              </button>

          </div>

        </div>
        
        
      {/* main cpontent area */}
        <div className=' bg-slate-200 overflow-y-auto py-2'>
          {/* primary/social/updates heading */}
          <div className='flex gap-12'>
            {
            headinglist.map(({id, title, icon})=>(
              <button 
              key={id} 
              className={`${mailtypeSelected===id ? 'border-b-4 border-b-blue-700 text-blue-700':'border-b-4 border-b-transparent'} flex gap-5 py-3 px-3 w-52   items-center text-gray-700 hover:bg-gray-300 cursor-pointer`}
              onClick={()=>setMailTypeSelected(id)}>
                {icon}
              <span>{title}</span>
            </button>
            ))
            }
            
          </div>
          {/* mails */}
          <Messages/>
        </div>
    </div>

    {/* Mobile inbox */}
    <div className='md:hidden px-3 py-3'>
       <h1>Primary</h1>
       <Messages/>
       {/* compose button */}
       <div 
       className='flex gap-3 items-center font-medium text-2xl text-red-700 shadow-md shadow-gray-500 rounded-full w-fit px-5 py-5 fixed bottom-32 right-5'>
          <GoPencil size={"24px"} />
          <h1>Compose</h1> 
       </div>
       {/* mail and meet button */}

        <div className='flex justify-between items-center text-red-700 font-semibold text-xl px-14 py-4 border-t-[1px] border-b-[1px] border-gray-400 fixed bottom-3 right-0 left-0'>
           <div >
              <MdMail size={"30px"}/>
              <h1>Mail</h1>
           </div>
           <div>
              <BiVideo size={"30px"}/>
              <h1>Meet</h1>

           </div>
        </div>
       
    </div>
    
  </>
  )
}

export default Inbox