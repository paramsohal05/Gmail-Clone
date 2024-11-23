import React, { useState } from 'react'
import { BiArchive, BiArrowBack, BiStar } from 'react-icons/bi'
import { MdOutlineDelete, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { RiSpam2Fill } from 'react-icons/ri'
import { Tooltip } from 'react-tooltip'
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdForwardToInbox } from "react-icons/md";
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RxCross2 } from "react-icons/rx";
import { FiPrinter } from "react-icons/fi";
import { TfiNewWindow } from "react-icons/tfi";
import neeru from "../assets/neeru.jfif"
import { useDispatch, useSelector } from 'react-redux'
import { IoMdArrowDropdown } from "react-icons/io";
import { Popover } from 'react-tiny-popover'
import { useNavigate } from 'react-router-dom'
import { CiFaceSmile } from "react-icons/ci";
import { CgMailReply } from "react-icons/cg";
import { GoReply } from "react-icons/go";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { setIsPopoverOpen, setOpenForward, setOpenReply } from '../redux/appSlice'


const iconlist1=[
  {
    id:1,
    ttId:"archive",
    ttContent:"Archive",
    icon:<BiArchive size={"20px"}/>
  },
  {
    id:2,
    ttId:"spam",
    ttContent:"Report spam",
    icon:<RiSpam2Fill size={"20px"}/>

  },
  {
    id:3,
    ttId:"delete",
    ttContent:"Delete",
    icon:<MdOutlineDelete size={"20px"}/>
    
  }
]
 const iconlist2=[
  {
    id:1,
    ttId:"unread",
    ttContent:"Mark as unread",
    icon:<IoMailUnreadOutline size={"20px"}/>
  },
  {
    id:2,
    ttId:"move",
    ttContent:"Move to",
    icon:< MdForwardToInbox size={"20px"}/>
  },
  {
    id:3,
    ttId:"more",
    ttContent:"More",
    icon:<BsThreeDotsVertical size={"20px"}/>
  }

 ]
 const iconlist3=[
  {
    id:1,
    ttId:'star',
    ttContent:"Not starred",
    icon:<BiStar size={"20px"}/>
  },
  {
    id:2,
    ttId:'reaction',
    ttContent:"Add reaction",
    icon:<CiFaceSmile size={"20px"}/>
  },
  {
    id:3,
    ttId:'reply',
    ttContent:"Reply",
    icon:<CgMailReply size={"20px"}/>
  },
  {
    id:4,
    ttId:'more',
    ttContent:"More",
    icon:<BsThreeDotsVertical size={"20px"}/>
  }
 ]

const Mail = () => {
  const {selectedEmail, isPopOverOpen}=useSelector(store=>store.appSlice)
  const dispatch=useDispatch();
  
  
  const navigate=useNavigate();
  return (
    <>
    {/* window */}
    <div className='hidden md:block w-4/5 px-1'>
        {/* row1 */}
        <div className='flex justify-between '>
          {/* left */}
            <div className='flex gap-8 text-gray-600 '>
               <div onClick={()=>navigate("/")} className='hover:bg-gray-300 cursor-pointer rounded-full p-2'>
                   <a data-tooltip-id='back' data-tooltip-place='bottom' data-tooltip-delay-show={200} data-tooltip-offset={20}><BiArrowBack/></a>
                   <Tooltip id='back' style={{padding:"2px"}}>
                     <p>Back to Inbox</p>
                   </Tooltip>
                  
               </div> 
               <div className='flex gap-5 '>
                  {iconlist1.map(({id, ttId, ttContent, icon})=>(
                     <div key={id} className='hover:bg-gray-300 cursor-pointer rounded-full p-2'>
                     <a data-tooltip-id={ttId} data-tooltip-place='bottom' data-tooltip-delay-show={200} data-tooltip-offset={20}>{icon}</a>
                     <Tooltip id={ttId} style={{padding:"2px"}}>
                       <p>{ttContent}</p>
                     </Tooltip>
                    
                 </div>
                  ))}
               </div>
               <div className='flex gap-5'>
                    {iconlist2.map(({id, ttId, ttContent, icon})=>(
                     <div key={id} className='hover:bg-gray-300 cursor-pointer rounded-full p-2'>
                     <a data-tooltip-id={ttId} data-tooltip-place='bottom' data-tooltip-delay-show={200} data-tooltip-offset={20}>{icon}</a>
                     <Tooltip id={ttId} style={{padding:"2px"}}>
                       <p>{ttContent}</p>
                     </Tooltip>
                    
                    </div>
                  ))}
               </div>
            </div>
            {/* right */}
            <div className='flex items-center text-gray-600 gap-6'>
                  <p>3 of 138</p>
                  <div className='hover:bg-gray-300 cursor-pointer rounded-full p-2'>
                    <a data-tooltip-id='newer' data-tooltip-place='bottom' data-tooltip-delay-show={200} data-tooltip-offset={20}><MdOutlineKeyboardArrowLeft size={"20px"}/></a>
                     <Tooltip id='newer' style={{padding:"2px"}}>
                        <p>Newer</p>
                     </Tooltip>
                 </div>
                 <div className='hover:bg-gray-300 cursor-pointer rounded-full p-2' >
                    <a data-tooltip-id='older' data-tooltip-place='bottom' data-tooltip-delay-show={200} data-tooltip-offset={20}><MdOutlineKeyboardArrowRight size={"20px"}/></a>
                     <Tooltip id='older' style={{padding:"2px"}}>
                        <p>Older</p>
                     </Tooltip>
                 </div>
            </div>
        </div>
        {/* row2 */}
        <div className='flex items-start justify-between py-5 ml-16'>
           {/* left content */}
        
            <div className='flex'>
               <h1 className='text-2xl'>{selectedEmail?.subject} 
                <span className='text-sm bg-gray-300 ml-2 px-1 py-1'>
                  Inbox
                  </span>
                </h1>
              </div>
                  
           
        
        {/* right icons */}
        <div className='flex gap-5 text-gray-700 '>
           <div className='hover:bg-gray-300 rounded-full p-2'>
              <a data-tooltip-id='print' data-tooltip-offset={20} data-tooltip-place='bottom'><FiPrinter size={"20px"} /></a>
              <Tooltip id='print' style={{padding:"2px"}}>
                 <p>Print all</p>
              </Tooltip>
           </div>
           <div className='hover:bg-gray-300 rounded-full p-2'>
              <a data-tooltip-id='newwindow' data-tooltip-offset={20} data-tooltip-place='bottom'><TfiNewWindow  size={"20px"} /></a>
              <Tooltip id='newwindow' style={{padding:"2px"}}>
                 <p>In new window</p>
              </Tooltip>
           </div>
        </div>
        </div>
        {/* row3 */}
        <div className='flex items-center'>
           {/* left profile photo */}
           <div className='w-[8%] p-2 rounded-full' >
               <img src={neeru} alt='photo' className='w-12 h-12 rounded-full'/>
                
            </div>
            
           {/* content part */}
           <div className='flex justify-between items-center px-2 w-[92%]'>
             {/* left part */}
              <div>
                 {/* top */}
              <h1 className=' font-medium'>{selectedEmail?.sender}
                <span className='ml-1 text-sm font-light text-gray-600'>&#60;{selectedEmail?.to}&#62;
                </span>
              </h1>
              {/* bottom */}
               <div className='flex gap-1 items-center text-sm text-gray-500'>
                 <p className='text-gray-500'>to me</p>
                 
                 <Popover
                      isOpen={isPopOverOpen}
                      positions={['bottom']} // if you'd like, you can limit the positions
                      padding={10} // adjust padding here!
                      reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
                      onClickOutside={() => dispatch(setIsPopoverOpen(false))} // handle click events outside of the popover/target here!
                      content={() => ( // you can also provide a render function that injects some useful stuff!
                        <div className='bg-white shadow-lg rounded-sm px-5 py-2 border-2 border-gray-300 w-fit'>
                          {/* from */}
                          <div className='flex px-2 gap-2'>
                            <div className='w-[25%]'>
                                <p className='text-gray-500 pl-10'>from:</p>
                            </div>
                            <div className='w-[75%]'>
                                <h1 className='font-medium'>{selectedEmail?.sender}</h1>
                                <p className='text-gray-500'>&#60;{selectedEmail?.to}&#62;</p>
                            </div>
                        
                          </div>
                          {/* to */}
                          <div className='flex px-2 gap-2'>
                            <div className='w-[25%]'>
                                <p className='text-gray-500 pl-14'>to:</p>
                            </div>
                            <div className='w-[75%]'>
                                <h1 className=' mr-0'>{selectedEmail?.sender}</h1>
                                <p className='text-gray-500'>&#60;{selectedEmail?.to}&#62;</p>
                            </div>
                        
                          </div>
                          {/* date */}

                          <div className='flex px-2 gap-2'>
                            <div className='w-[25%]'>
                                <p className='text-gray-500 pl-10'>date:</p>
                            </div>
                            <div className='w-[75%]'>
                                <h1 className='mr-0 text-sm '>8 Nov 2024, 14:30</h1>
                                 
                            </div>
                          
                          </div>
                          {/* subject */}
                          <div className='flex px-2 gap-2'>
                            <div className='w-[25%]'>
                                <p className='text-gray-500 pl-5'>subject:</p>
                            </div>
                            <div className='w-[75%]'>
                                <h1 className=''>Re:{selectedEmail?.subject}</h1>
                                 
                            </div>
                          
                          </div>
                          {/* mailed by  */}
                          <div className='flex px-2 gap-2'>
                            <div className='w-[25%]'>
                                <p className='text-gray-500 '>mailed-by:</p>
                            </div>
                            <div className='w-[75%]'>
                                <h1 className='text-gray-700'>{selectedEmail?.to}</h1>
                                 
                            </div>
                          
                          </div>
                          {/* signedby */}
                          <div className='flex px-2 gap-2'>
                            <div className='w-[25%]'>
                                <p className='text-gray-500 '>signed by:</p>
                            </div>
                            <div className='w-[75%]'>
                                <h1 className='text-gray-700'>{selectedEmail?.to}</h1>
                                 
                            </div>
                          
                          </div>
                          {/* security details */}
                          <div className='flex px-2 gap-2'>
                            <div className="w-[25%] " >
                                <p className='text-gray-500 pl-3'>security:</p>
                            </div>
                            <div className='w-[75%]'>
                                <h1 className='text-gray-700'> &#x1f512;  Standard encryption &#40; TLS &#41; <span><a href='' className='text-sky-800 underline'>Learn More</a></span></h1>
                                 
                            </div>
                          
                          </div>
                        </div>
                      )}
                    >
                      <div className='text-gray-800 cursor-pointer' onClick={() => dispatch(setIsPopoverOpen(!isPopOverOpen))}>
                        <a data-tooltip-id="details" data-tooltip-place="bottom" className=''>
                        <IoMdArrowDropdown size={"20px"}/>
                        </a>
                      <Tooltip id='details' style={{padding:"2px"}}>
                          <p>Show details</p>
                      </Tooltip>
                      </div>
                      
                    </Popover>
               </div>
              </div>
              {/* right part */}
              <div className='flex gap-4 items-center'>
                 <div className='text-gray-600 text-sm'>
                    <p>{new Date(selectedEmail?.createdAt?.seconds*1000).toUTCString()}</p>
                 </div>
                 {
                  iconlist3.map(({id, ttId, ttContent, icon})=>(

                    <div  key={id} className='p-1 hover:bg-gray-300 cursor-pointer rounded-full'>
                    <a  data-tooltip-id={ttId} data-tooltip-place='bottom' data-tooltip-delay-show={200} data-tooltip-offset={20} className='text-gray-800'>{icon}</a>
                    <Tooltip id={ttId} style={{padding:"2px"}}>
                      <p>
                          {ttContent}
                      </p>
                    </Tooltip>
                      
                  </div>)

                  )
                 }
                
              </div>
              
                   
                
           </div>
          
        </div>
        {/* row 4 */}
        <div className='ml-16'>
           <p className='py-1 px-1'>{selectedEmail?.message}</p>
        </div>
        {/* row5 */}
        <div className='flex  gap-5 ml-16 py-5'>
           {/* reply button */}
           <div onClick={()=>dispatch(setOpenReply(true))} className='flex items-center gap-2 border-2 border-gray-600 rounded-full px-4 py-2 text-gray-600 font-semibold hover:cursor-pointer'>
              <GoReply/>
              <p>Reply</p>
           </div>
           {/* Forward button */}
           <div onClick={()=>dispatch(setOpenForward(true))} className='flex items-center gap-2 border-2 border-gray-600 rounded-full px-4 py-2 text-gray-600 font-semibold hover:cursor-pointer'>
              <IoReturnUpForwardOutline/>
              <p>Forward</p>
           </div>
           {/* reaction */}
           <div className='flex items-center border-2 border-gray-600 rounded-full px-2  text-gray-600 font-semibold hover:cursor-pointer'>
              <a data-tooltip-id='reaction' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={10}>
                <CiFaceSmile size={"30px"}/>
              </a>
              <Tooltip id='reaction' style={{padding:"2px"}}>
                  <p>Add reaction</p>
              </Tooltip>
              
           </div>
        </div>
       
    </div>
    {/* Mobile */}
    <div></div>
    </>
    
  )
}

export default Mail