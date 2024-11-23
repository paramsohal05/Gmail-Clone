import { title } from 'framer-motion/client'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenHelp, setOpenUpdates } from '../redux/appSlice'



const Support = () => {
  const {openSupport}=useSelector(store=>store.appSlice)
  const dispatch=useDispatch();
  const supportRef=useRef();

  const outSideClickEvent=(e)=>{
        
  }
 
  return (
    <>
    {/* window */}
    <div ref={supportRef} className={`${openSupport?"flex":"hidden"} flex-col bg-white absolute right-44 top-16 shadow-xl  shadow-gray-400 rounded-md py-2 `}>
        <ul className=''>
           <li onClick={()=>dispatch(setOpenHelp(true))} className='py-2 px-5 hover:bg-slate-200 cursor-pointer text-gray-600 text-sm'>Help</li>
           <li className='py-2 px-5 hover:bg-slate-200 cursor-pointer text-gray-600 text-sm'><a href='https://support.google.com/a/users/?p=gmail_training' target='_blank'>Training</a></li>
           <li onClick={()=>dispatch(setOpenUpdates(true))} className='py-2 px-5 hover:bg-slate-200 cursor-pointer text-gray-600 text-sm'>Updates</li>
           <li className='border-t-[1px] border-gray-200 my-2'></li>
           <li onClick={()=>dispatch(setOpenOffcanvas(true))} className='py-2 px-5 hover:bg-slate-200 cursor-pointer text-gray-600 text-sm'>Send feedback to Google</li>
        </ul>
       
    </div>
    </>
   
  )
}

export default Support
