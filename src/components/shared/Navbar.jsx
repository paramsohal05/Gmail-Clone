import React, { useContext, useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/gmaillogo.png"
import { IoMdSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import profile from "../../assets/profilepic.jfif"

import { useDispatch, useSelector } from 'react-redux';

import store from '../../redux/store';
import { setOpenGoogleApps, setOpenProfile, setOpenSidebar, setOpenSupport, setUser } from '../../redux/appSlice';
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { Tooltip } from 'react-tooltip';




const Navbar = () => {
    const { user, openGoogleApps, openProfile, openSupport}=useSelector(store=>store.appSlice)
    
    const [openMenu, setOpenMenu]=useState(false)
   
    const dispatch=useDispatch();
    const [toggle, setToggle]=useState(false)

    const signOutHandler=()=>{
        signOut(auth).then(()=>{
            dispatch(setUser(null));
        }).catch((error)=>{
            console.log(error)
        })
    }
    

    
       

    useEffect(()=>{
        dispatch(setOpenSidebar(openMenu))
    },[openMenu])

    
    
  return (
    <>
    {/* window Navbar */}
    <div className='hidden md:flex  w-[100%] px-5 py-3 justify-between'>
        {/* Left Part  */}
        <div className='flex  items-center my-3'>
            <div onClick={()=>setOpenMenu(!openMenu)} className='p-3 rounded-full hover:bg-gray-300 cursor-pointer ' >
                <a data-tooltip-id='menu' data-tooltip-place='bottom' data-tooltip-offset={20}><IoMdMenu size={"24px"}  className='text-black'/></a>
                <Tooltip id='menu'style={{padding:"2px"}}>
                    <p>Main menu</p>
                </Tooltip>
            </div>
            <a data-tooltip-id='gmail'  data-tooltip-place='bottom' data-tooltip-variant='light' className='flex gap-3 items-center'>
            <img src={logo} className='w-6 '/>
            <h1 className='text-2xl text-gray-500 font-medium '>Gmail</h1>
            </a>
            <Tooltip id='gmail' style={{padding:"2px"}}>
                <p>Gmail</p>
            </Tooltip>
        
            
            
            

        </div>
        {/* Middle Part */}
        <div className='flex w-3/5  space-x-1   items-center rounded-3xl bg-gray-200 active:shadow-2xl duration-500 active:bg-white my-3 ml-16'>
            <div className='text-gray-700 mx-1 p-2 rounded-full hover:bg-gray-300 cursor-pointer '>
                <a data-tooltip-id='search' data-tooltip-place='bottom' data-tooltip-offset={20} data-tooltip-delay-show={300}>
                  <IoMdSearch size={"24px"}/>
                </a>
                <Tooltip id='search' style={{padding:"2px"}}>
                    <p>Search</p>
                </Tooltip>
            </div>
            
            <input 
            className='rounded-full w-full outline-none bg-transparent px-1'
            type='search' 
            placeholder='Search mail' 
            name='search' 
             />

        </div>

        {/* Right Part */}
        <div className='flex  items-center my-3  space-x-3 '>
            <div onClick={()=>dispatch(setOpenSupport(!openSupport))} className='text-gray-700 p-2 rounded-full  hover:bg-gray-200 cursor-pointer '>
                 <a data-tooltip-id='support' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={10}><GoQuestion size={"24px"} /></a>
                 <Tooltip id='support' style={{padding:"2px"}} className='z-30'>
                 <p>Support</p>
                 </Tooltip>
            </div>
            <div className='text-gray-700 p-2 rounded-full hover:bg-gray-200 cursor-pointer '>
            <a data-tooltip-id='settings' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={10}><IoSettingsOutline size={"24px"}/></a>
                 <Tooltip id='settings' style={{padding:"2px"}}>
                 <p>Settings</p>
                 </Tooltip>
                
            </div>
            <div onClick={()=>dispatch(setOpenGoogleApps(!openGoogleApps))}  className='text-gray-700 p-2 rounded-full hover:bg-gray-200 cursor-pointer '>
            <a data-tooltip-id='apps' data-tooltip-place='bottom' data-tooltip-delay-show={300} data-tooltip-offset={10}><PiDotsNineBold size={"24px"} /></a>
                 <Tooltip id='apps' style={{padding:"2px"}}>
                 <p>Google apps</p>
                 </Tooltip>
                
            </div>
            <div onClick={()=>dispatch(setOpenProfile(!openProfile))} className='relative text-gray-700 p-1 rounded-full hover:bg-gray-200 cursor-pointer '>
            <a data-tooltip-id='profile' data-tooltip-place='bottom-left' data-tooltip-delay-show={300} data-tooltip-offset={10}>
            <img className='w-8 rounded-full' src={profile} alt='profilepic'/>
            </a>
            <Tooltip id='profile' style={{padding:"2px"}}>
                 <h1 className='text-white font-medium'>Google account</h1>
                 <p className='text-gray-300 font-medium'>Param Sohal</p>
                 <p className='text-gray-300 font-medium'>&#60;paramsohal05@gmail.com &#62;</p>
            </Tooltip>
             
            </div>
        </div>
    </div>
    {/* mobile navbar */}
    <div className='w-screen flex md:hidden items-center mx-3 my-4 border-x-2 border-y-2 justify-between rounded-lg shadow-3xl'>
        <div onClick={()=>dispatch(setOpenSidebar(true))} className='p-3 rounded-full hover:bg-gray-300 cursor-pointer ' >
            <IoMdMenu size={"24px"}  className='text-black'/>
        </div>

        <input 
            className='rounded-full w-2/3 outline-none bg-transparent px-1'
            type='search' 
            placeholder='Search in emails' 
            name='search' 
        />

        <div className='text-gray-700 p-1 me-1 rounded-full hover:bg-gray-200 cursor-pointer '>
                <img onClick={()=>setToggle(!toggle)} className='w-8 rounded-full' src={profile} alt='profilepic'/>
                <AnimatePresence>
                    {
                        toggle && (
                            <motion.div 
                            initial={{opacity:0, scale:0.8}}
                            animate={{opacity:1, scale:1}}
                            exit={{opacity:0, scale:0.8}}
                            transition={{duration:0.5}}
                            className='absolute right-1 z-20 shadow-lg bg-white'>
                                <p onClick={signOutHandler} className='text-xl font-medium underline'>
                                    LogOut
                                </p>

                            </motion.div>
                        )
                    }
                </AnimatePresence>
        </div>


            
    </div>
    </>
  )
}

export default Navbar


//  <AnimatePresence>
//                     {
//                         toggle && (
//                             <motion.div 
//                             initial={{opacity:0, scale:0.8}}
//                             animate={{opacity:1, scale:1}}
//                             exit={{opacity:0, scale:0.8}}
//                             transition={{duration:0.5}}
//                             className='absolute right-1 z-20 shadow-lg bg-white'>
//                                 <p onClick={signOutHandler} className='text-xl font-medium underline'>
//                                     LogOut
//                                 </p>

//                             </motion.div>
//                         )
//                     }
//                 </AnimatePresence>