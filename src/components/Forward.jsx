
import React, { useState } from 'react'
import neeru from '../assets/neeru.jfif'
import { GoReply } from "react-icons/go";
import { MdOutlineArrowDropDown, MdOutlineDelete } from "react-icons/md";
import { BiCheckboxSquare } from "react-icons/bi";
import { BiFontColor } from "react-icons/bi";
import { MdAttachFile } from "react-icons/md";
import { IoLinkOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { PiGoogleDriveLogoDuotone } from "react-icons/pi";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { MdOutlineLockClock } from "react-icons/md";
import { LiaPenAltSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { setIsPopoverOpen, setOpenForward, setOpenReply, setOpenTo } from '../redux/appSlice';
import store from '../redux/store';
import { Navigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';
import { Popover } from 'react-tiny-popover'
import { LuForward } from "react-icons/lu";

const iconsList=[
    {
        id:"alphabet",
        tooltipContent:"Formatting options",
        
        icon:<BiFontColor size={"19px"}/>
    },
    {
        id:"attachment",
        tooltipContent:"Attcah files",
        
        icon:<MdAttachFile size={"19px"}/>
    },
    {
        id:"link",
        tooltipContent:"Insert link Ctrl+K ",
        
        icon:<IoLinkOutline size={"19px"}/>
    },
    {
        id:"emoji",
        tooltipContent:"Insert emoji Ctrl-Shift-2 ",
        
        icon:<BsEmojiSmile size={"19px"}/>
    },
    {
        id:"drive",
        tooltipContent:"Insert files using Drive",
        
        icon:<PiGoogleDriveLogoDuotone size={"19px"}/>
    },
    
    {
        id:"photo",
        tooltipContent:"Insert photo",
        
        icon:<MdOutlineInsertPhoto size={"19px"}/>
    },
    {
        id:"lock",
        tooltipContent:"Toggle confidential mode",
        
        icon:<MdOutlineLockClock  size={"19px"}/>
    },
    {
        id:"signature",
        tooltipContent:"Insert signature",
        
        icon:<LiaPenAltSolid  size={"19px"}/>
    },
    {
        id:"options",
        tooltipContent:"More options",
        
        icon:<BsThreeDotsVertical size={"19px"}/>
    }
]

const Forward = () => {
    const {openReply, selectedEmail,openForward, isPopOverOpen, openTo}=useSelector(store=>store.appSlice)
    const dispatch=useDispatch();
    const [openBcc, setOpenBcc]=useState(false)
    const [openCc, setOpenCc]=useState(false)
    
    

    
    const [replyData, setReplyData]=useState([
        {
            
            message:""
        }
    ])
    const changeHandler=(e)=>{
        setReplyData({...replyData, [e.target.name]:e.target.value} )
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            await addDoc(collection(db, "Replymails"),{
                to:selectedEmail.to,
                message:replyData.message,
                repliedAt:serverTimestamp()
                
            });
            
            dispatch(setOpenReply(false))
            alert("Email has been sent")
            setReplyData({
                message:""
            })
        } catch (error) {
            console.log(error)
            alert("Something Went wrong")
        }
       
        
        
    }
  return (
    <>
    <motion.div 
    initial={{opacity:0, y:-20}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5}}
    className={`${openForward? 'md:flex':'hidden'}  items-start gap-6 `} >
        {/* profile pic */}
        <div className=''>
            <img src={neeru} className='w-10 h-10 rounded-full'/>
        </div>
        {/* main content */}
        <form onSubmit={handleSubmit}
        className='bg-white shadow-md shadow-gray-700 w-[100%] px-2 py-2 rounded-xl'>
            {/* row 1  */}
            <div className='flex items-start gap-1 w-[100%]'>
                {/* left icons */}
                <div className=' bg-slate-300 px-2 py-2 rounded-lg hover:cursor-pointer w-[8%]'  >
                <Popover
                      isOpen={isPopOverOpen}
                      positions={['bottom', 'right']} // if you'd like, you can limit the positions
                      padding={10} // adjust padding here!
                      reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
                      onClickOutside={() => dispatch(setIsPopoverOpen(false))} // handle click events outside of the popover/target here!
                      content={() => ( // you can also provide a render function that injects some useful stuff!
                        <div className='bg-white shadow-lg rounded-sm px-5 py-2 border-2 border-gray-300 w-fit'>
                          

                          jakhxjkam
                         
                          
                         
                        </div>
                      )}
                    >
                      <div className='text-gray-800 cursor-pointer ' onClick={() => dispatch(setIsPopoverOpen(!isPopOverOpen))}>
                            <a data-tooltip-id='responsetype' data-tooltip-place='bottom'  className='flex gap-1'><LuForward />
                            <MdOutlineArrowDropDown size={"20px"}/>
                            </a>
                            <Tooltip id='responsetype' style={{padding:"2px"}}>
                                <p>Type of Response</p>
                            </Tooltip>
                      </div>
                      
                    </Popover>
                   
                    
                    
                </div>
                <div onClick={()=>dispatch(setOpenTo(true))} className=' w-[92%]'>
                   {
                    openTo? 
                    <div className='mb-3'>
                        {/* to */}
                        <div className='flex justify-between items-center w-full'>
                            <div className='w-[95%] gap-2'>
                            <label>
                                <a className='hover:underline' href='' data-tooltip-id='contacts' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={10}>To</a>
                            <Tooltip id='contacts' style={{padding:"2px"}}>
                                <p>Select Contacts</p>
                            </Tooltip>
                        </label>
                         <input className='outline-none w-[95%]' type='email' />
                            </div>
                       <div className={`${openCc? "hidden": "block"} flex gap-1`}>
                         {/* cc */}
                         <div className={`hover:underline hover:cursor-pointer`} onClick={()=>setOpenCc(true)}>
                            <a data-tooltip-id='cc' data-tooltip-delay-show={300} data-tooltip-place='bottom' data-tooltip-offset={10}>Cc</a>
                            <Tooltip id='cc' style={{padding:"2px"}}>
                                <p>Add cc recipients</p>
                            </Tooltip>
                         </div>
                         {/* bcc */}
                         <div className='hover:underline hover:cursor-pointer'>
                            <a data-tooltip-id='bcc' data-tooltip-delay-show={300} data-tooltip-place='bottom' data-tooltip-offset={10}>Bcc</a>
                            <Tooltip id='bcc' style={{padding:"2px"}}>
                                <p>Add bcc recipients</p>
                            </Tooltip>
                         </div>
                         {/* popout */}
                         <div className='text-gray-600 hover:cursor-pointer'>
                     <a data-tooltip-id='popout' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={20}>
                      <BiCheckboxSquare size={"25px"}/>
                     </a>
                     <Tooltip id='popout' style={{padding:"2px"}}>
                         <p>Pop-out reply</p>
                     </Tooltip>
                            </div>

                       </div>
                         
                        
                        </div>
                        {/* cc */}
                        <div className={`${openCc? "flex":"hidden"} justify-between items-center w-full`}>
                            <div className='w-[95%] gap-2'>
                            <label>
                                <a className='hover:underline hover:cursor-pointer' href='' data-tooltip-id='contacts' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={10}>Cc</a>
                            <Tooltip id='contacts' style={{padding:"2px"}}>
                                <p>Select Contacts</p>
                            </Tooltip>
                        </label>
                         <input className='outline-none w-[95%]' type='email' />
                            </div>
                       <div className={`${openBcc? "hidden":"flex"} gap-1`}>
                        
                         {/* bcc */}
                         <div className='hover:underline hover:cursor-pointer' onClick={()=>setOpenBcc(true)}>
                            <a data-tooltip-id='bcc' data-tooltip-delay-show={300} data-tooltip-place='bottom' data-tooltip-offset={10}>Bcc</a>
                            <Tooltip id='bcc' style={{padding:"2px"}}>
                                <p>Add bcc recipients</p>
                            </Tooltip>
                         </div>
                         {/* popout */}
                         <div className='text-gray-600 hover:cursor-pointer'>
                     <a data-tooltip-id='popout' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={20}>
                      <BiCheckboxSquare size={"25px"}/>
                     </a>
                     <Tooltip id='popout' style={{padding:"2px"}}>
                         <p>Pop-out reply</p>
                     </Tooltip>
                            </div>

                       </div>
                         
                        
                        </div>
                        {/* bcc */}
                        <div className={`${openBcc? "flex":"hidden"} justify-between items-center w-full`}>
                            <div className='w-[95%] gap-2'>
                            <label>
                                <a className='hover:underline hover:cursor-pointer' href='' data-tooltip-id='contacts' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={10}>Bcc</a>
                            <Tooltip id='contacts' style={{padding:"2px"}}>
                                <p>Select Contacts</p>
                            </Tooltip>
                        </label>
                         <input className='outline-none w-[95%]' type='email' />
                            </div>
                       <div className=''>
                        
                         {/* popout */}
                         <div className='text-gray-600 hover:cursor-pointer'>
                     <a data-tooltip-id='popout' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={20}>
                      <BiCheckboxSquare size={"25px"}/>
                     </a>
                     <Tooltip id='popout' style={{padding:"2px"}}>
                         <p>Pop-out reply</p>
                     </Tooltip>
                            </div>

                       </div>
                         
                        
                        </div>
                    </div>
                    
                    :
                    <div className='flex justify-between items-center'>
                        <p>Recipients</p>
                        <div className='text-gray-600 hover:cursor-pointer'>
                     <a data-tooltip-id='popout' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={20}>
                      <BiCheckboxSquare size={"25px"}/>
                     </a>
                     <Tooltip id='popout' style={{padding:"2px"}}>
                         <p>Pop-out reply</p>
                     </Tooltip>
                </div>
                    </div>
                    
                    
                   }
                    
                    
                </div>
                
            </div>
            {/*row 2 message araea */}
              <div>
                {/* contact details */}
                   <div className='text-sm text-gray-800 mt-10'>
                      <p>----------Forwarded message----------</p>
                      <p>From: {selectedEmail?.sender} &#60;{selectedEmail?.to}&#62;</p>
                      <p>Date: {new Date(selectedEmail?.createdAt?.seconds*1000).toUTCString()}</p>
                      <p>Subject: {selectedEmail?.subject}</p>
                      <p>To: &#60;{selectedEmail?.to}&#62;</p>
                   </div>
                   {/* message */}
                   <div className='text-sm text-gray-800 mt-10 h-16 overflow-y-scroll'>
                       <p>{selectedEmail?.message}</p>
                   </div>
              </div>
            {/* bottom icons */}
            <div className='flex items-center py-4 justify-evenly'>
                {/* send button */}
                <button type='submit' className='flex items-center gap-2 px-5 py-2 text-white bg-blue-800 rounded-full'>
                    <h1>Send</h1>
                    <div className='border-l-2 border-blue-950'>
                       <MdOutlineArrowDropDown size={"20px"}/>
                    </div>

                </button>
                {/* other icons */}
                <div className='flex gap-4 w-4/5 px-2'>
                    {iconsList.map(({id, icon, tooltipContent})=>(
                    <div key={id}  className='text-gray-800 hover:cursor-pointer'>
                       <a data-tooltip-id={id} data-tooltip-offset={10}  data-tooltip-delay-show={200}  data-tooltip-place='bottom'>{icon}</a>
                       <Tooltip style={{padding:'3px'}} id={id} className='px-1 py-1'>
                            <p>{tooltipContent}</p>
                        </Tooltip>
                   </div>
                    ))}
                </div>
                {/* delete icon */}
                <div onClick={()=>dispatch(setOpenForward(false))} className='text-gray-800 hover:cursor-pointer mr-6'>
                    <a data-tooltip-id="delete" data-tooltip-place='bottom'><MdOutlineDelete size={"20px"}/></a>
                    <Tooltip id="delete">
                     <p>Discard &#40; Ctrl-Shift-D &#40;</p>
                    </Tooltip>
                     
                </div>
                
            </div>
            
        
        </form>
       
    </motion.div>
    </>
  )
}

export default Forward