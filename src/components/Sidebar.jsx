import React, { createContext, useContext, useState } from 'react'
import { MdOutlineDrafts, MdOutlineEdit, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CgInbox } from "react-icons/cg";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from 'react-icons/tb';
import { MdLabelImportantOutline } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { MdOutlineScheduleSend } from "react-icons/md";
import { LuMails } from "react-icons/lu";
import { RiSpam2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuLocate } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { HiInboxStack } from "react-icons/hi2";
import { IoIosContacts } from "react-icons/io";
import { TbTriangleInverted } from "react-icons/tb";
import { MdOutlineSendTimeExtension } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";  
import { IoIosContact } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { setopen, setOpenSidebar } from '../redux/appSlice';

const sidebarList=[
    {
        id:1,
        icon:<CgInbox  size={"20px"}/>,
        title:"Inbox"

    },
    

    {
        id:2,
        icon:<IoMdStarOutline  size={"20px"}/>,
        title:"Starred"

    },

    {
        id:3,
        icon:<MdOutlineWatchLater  size={"20px"}/>,
        title:"Snoozed"

    },

    {
        id:4,
        icon:<TbSend2  size={"20px"}/>,
        title:"Sent"

    },


    {
        id:5,
        icon:<MdOutlineDrafts size={"20px"}/>,
        title:"Drafts"

    }

    

    

]

const list2=[
    {
        id:1,
        icon:<MdLabelImportantOutline  size={"20px"}/>,
        title:"Important"
    },

    {
        id:2,
        icon:<MdOutlineChat  size={"20px"}/>,
        title:"Chats"
    },

    {
        id:3,
        icon:<MdOutlineScheduleSend  size={"20px"}/>,
        title:"Scheduled"
    },

    {
        id:4,
        icon:<LuMails  size={"20px"}/>,
        title:"All mails"
    },

    {
        id:5,
        icon:<RiSpam2Line  size={"20px"}/>,
        title:"Spam"
    },
    {
        id:6,
        icon:<RiDeleteBin6Line  size={"20px"}/>,
        title:"Bin"

    },

    {
        id:7,
        icon:<LuLocate  size={"20px"}/>,
        title:"Categories"

    },

    {
        id:8,
        icon:<IoSettingsOutline  size={"20px"}/>,
        title:"Manage new labels"

    },
    {
        id:9,
        icon:<IoMdAdd  size={"20px"}/>,
        title:"Create new label"

    },
    {
        id:10,
        icon:<RiSpam2Line  size={"20px"}/>,
        title:"Spam"
    },
    
]

const mobileSidebar=[
    {
        id:1,
        icon:<IoMdStarOutline  size={"24px"}/>,
        title:"Starred"

    },
    {
        id:2,
        icon:<MdOutlineWatchLater  size={"24px"}/>,
        title:"Snoozed"
    },
    {
        id:3,
        icon:<MdLabelImportantOutline  size={"24px"}/>,
        title:"Important"
    },

    {
        id:4,
        icon:<TbSend2  size={"24px"}/>,
        title:"Sent"

    },
    {
        id:5,
        icon:<MdOutlineScheduleSend className='ml-8' size={"24px"}/>,
        title:"Scheduled"
    },
    {
        id:6,
        icon:<MdOutlineSendTimeExtension className='ml-8' size={"24px"}/>,
        title:"Outbox"
    },
    {
        id:7,
        icon:<MdOutlineDrafts className='ml-8' size={"24px"}/>,
        title:"Drafts"

    },
    {
        id:8,
        icon:<LuMails className='ml-8' size={"24px"}/>,
        title:"All mail"

    },
    {
        id:9,
        icon:<RiDeleteBin6Line className='ml-8' size={"24px"}/>,
        title:"Bin"

    },
    {
        id:10,
        icon:<TbTriangleInverted className='ml-8' size={"24px"}/>,
        title:"Unwanted"
    }

]

 

const Sidebar = () => {
    const {openSidebar}=useSelector(store=>store.appSlice)
    const [isMore, setIsmore]=useState(true)
    
    const dispatch=useDispatch();
    
    

  return (
    <>
    {/* window full sidebar*/}
    <div className={`md:block w-3/12 mt-5 hidden overflow-auto  `}>
        {/* Compose */}
        <button onClick={()=>dispatch(setopen(true))} className='flex gap-3 bg-[#c2e7ff] mx-5 px-4 py-2 rounded-2xl items-center hover:shadow-md'>
            <MdOutlineEdit /><span>Compose</span>
            
        </button>
        {/* sidebar list */}
        <div className='gap-y-1'>
            {
                sidebarList.map(({id, icon, title})=>(
                    
                    <div key={id} className='w-full flex gap-3 hover:cursor-pointer items-center my-2 px-7 mr-3 py-1 hover:bg-gray-200 rounded-r-xl'>
                        {icon}
                        <p>{title}</p>
                    </div>
                    
                ))
            }
            
            <div onClick={()=>setIsmore(!isMore)} 
            className='w-full flex gap-3 items-center my-2 px-7 mr-3 py-1 hover:bg-gray-200 rounded-r-xl hover:cursor-pointer'>
                      {isMore? <MdOutlineKeyboardArrowDown  size={"20px"}/>: <MdOutlineKeyboardArrowUp  size={"20px"}/>  }
                      <p>{isMore? "More": "Less"}</p>
                        
            </div>
            {
                list2.map(({id, icon, title})=>(
                    
                     <div key={id} className={`w-full flex gap-3 items-center my-2 px-7 mr-3 py-1 hover:cursor-pointer hover:bg-gray-200 rounded-r-xl ${isMore? "hidden": "show"}`}>
                        {icon}
                        <p >{title}</p>
                    </div>
                   
                ))
                

            }
        
        </div>
        {/* label */}
        <div className='w-full flex gap-3 items-center my-2 pl-4 mr-3 py-1  rounded-r-xl'>
            <p className='ml-5 mr-32'>Labels</p>
            <button className='hover:bg-gray-300 rounded-full p-1 hover:cursor-pointer'><IoMdAdd  size={"20px"}/></button>        
                    
        </div>
    </div>

    {/* window icon sidebar */}
    <div  className={`w-1/12 mt-5 px-3 hidden overflow-auto  fixed top-20 bottom-0 left-0`}>
        {/* compose button */}
        <button onClick={()=>dispatch(setopen(true))} className=' bg-[#c2e7ff] mx-5 p-3 rounded-2xl items-center hover:shadow-md'>
            <MdOutlineEdit /> 
        </button>

        {/* icons list 1*/}
        
         <div className='gap-y-1 px-5'>
            {
                sidebarList.map(({id, icon})=>(
                    
                    <div key={id} className='hover:cursor-pointer  my-1  p-2 rounded-full  hover:bg-gray-200 '>
                        {icon} 
                    </div>
                    
                ))
            }
            
            <div onClick={()=>setIsmore(!isMore)} 
            className='hover:cursor-pointer  my-1  p-2 rounded-full  hover:bg-gray-200'>
                      {isMore? <MdOutlineKeyboardArrowDown size={"20px"}/>: <MdOutlineKeyboardArrowUp size={"20px"}/>  }
                      
                        
            </div>
            {
                list2.map(({id, icon, title})=>(
                    
                     <div key={id} className={` hover:cursor-pointer  my-1  p-2 rounded-full  hover:bg-gray-200 ${isMore? "hidden": "show"}`}>
                        {icon}
                        
                    </div>
                   
                ))
                

            }

            {/* label */}
        <div className='hover:cursor-pointer  my-1  p-2 rounded-full  hover:bg-gray-200 '>
            
            <IoMdAdd  size={"20px"}/>        
                    
        </div>
        
        </div>

        
        

    </div>
    
    
    {/* mobile sidebar */}
    <div className={`${openSidebar? "block":"hidden"}  md:hidden w-[85%] `}>
        {/* gmail heading  */}
        <div className='my-3 mr-2 py-5 '>
            <h1 className='text-red-600 text-2xl font-semibold ml-8 '>Gmail</h1>
        </div>
        <p className='border-b-2'></p>
        {/* all inboxes */}
        <div className='flex  my-3 mr-2 py-5 space-x-4 items-center active:bg-red-200 active:text-red-700 rounded-r-full'>
            <HiInboxStack className='ml-8' size={"24px"}/>
            <p className='text-xl'>All inboxes</p>
        </div>
        <p className='border-b-2'></p>
        {/* primary*/}
        
        <div className='flex  my-3 mr-2 py-5 space-x-4 items-center active:bg-red-200 active:text-red-700 rounded-r-full'>
            <CgInbox className='ml-8' size={"24px"}/>
            <p className='text-xl'>Primary</p>
        </div>
        {/* Social */}
        <div className='flex  my-3 mr-2 py-5 space-x-4 items-center active:bg-blue-300 active:text-blue-700 rounded-r-full'>
            <IoIosContacts className='ml-8' size={"24px"}/>
            <p className='text-xl'>Social</p>
        </div>
        {/* updates */}
        <div className='flex  my-3 mr-2 py-5 space-x-4 items-center active:bg-orange-200 active:text-orange-700 rounded-r-full'>
            <RiSpam2Line className='ml-8' size={"24px"}/>
            <p className='text-xl'>Updates</p>
        </div>

        <h1 className='ml-8 my-7 text-black text-lg font-medium'>RECENT LABELS</h1>     

        <div className='flex  my-3 mr-2 py-5 space-x-4 items-center active:bg-gray-300 active:text-gray-700 rounded-r-full'>
            <TbTriangleInverted className='ml-8' size={"24px"}/>
            <p className='text-xl'>Unwanted</p>
        </div>

        <h1 className='ml-8 my-7 text-black text-lg font-medium'>ALL LABELS</h1>     
        {/* all labels list */}
        {
            mobileSidebar.map(({id, title, icon})=>(
                <div key={id} className='flex  my-3 mr-2 py-5 space-x-4 items-center active:bg-gray-300 active:text-gray-700 rounded-r-full'>
                    {icon}
                    <p className='text-xl'>{title}</p>
                </div>
            ))
        }
        {/* Google apps */}
        <h1 className='ml-8 my-7 text-black text-lg font-medium'>GOOGLE APPS</h1>     
        <div className='flex  my-3 mr-2 py-5 space-x-4 items-center active:bg-gray-300 active:text-gray-700 rounded-r-full'>
            <FaRegCalendar className='ml-8' size={"24px"}/>
            <p className='text-xl'>Calendar</p>
        </div>  
        <div className='flex  my-3 mr-2 py-5 space-x-4 items-center active:bg-gray-300 active:text-gray-700 rounded-r-full'>
            <IoIosContact className='ml-8' size={"24px"}/>
            <p className='text-xl'>Contacts</p>
        </div>  
        <p className='border-b-2'></p>

          <div className='flex  my-1 mr-2 py-5 space-x-4 items-center active:bg-gray-300 active:text-gray-700 rounded-r-full'>
            <IoSettingsOutline className='ml-8' size={"24px"}/>
            <p className='text-xl'>Settings</p>
        </div>  
        <div className='flex  my-3 mr-2 py-3 space-x-4 items-center active:bg-gray-300 active:text-gray-700 rounded-r-full'>
            <GoQuestion className='ml-8' size={"24px"}/>
            <p className='text-xl'>Help and feedback</p>
        </div>  
                    
       
       
    </div>
    </>
  )
}

export default Sidebar