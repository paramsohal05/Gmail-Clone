import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RxCross1 } from "react-icons/rx";
import google from "../assets/google1.jfif"
import { Tooltip } from 'react-tooltip';
import { setOpenEdit } from '../redux/appSlice';
import { BsThreeDotsVertical } from "react-icons/bs";
import profile from '../assets/profilepic.jfif'
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const menu=[
    {
        id:1,
        title:"Past profile pictures",
        href:"",
    },
    {
        id:2,
        title:"Birthday settings",
        href:"",
    },
    {
        id:3,
        title:"Help",
        href:"https://support.google.com/accounts/answer/27442",
    },
    {
        id:4,
        title:"Send feedback",
        href:"",
    },

]

const EditProfile = () => {
    const {openEdit}=useSelector(store=>store.appSlice);
    const dispatch=useDispatch();
    const [openMenu, setOpenMenu]=useState(false)

    const menuRef=useRef();
    const iconRef=useRef();

    window.addEventListener("click", (e)=>{
        if(e.target==!menuRef){
            setOpenMenu(false)
        }
    })
    


    
  return (
    <div className={`${openEdit? "flex":"hidden"} flex-col h-screen fixed  inset-0 bg-black bg-opacity-30 z-30 backdrop-blur-none  items-center justify-center `}>
        <div className='flex flex-col gap-5 bg-white px-5 py-4 rounded-xl w-[40%]'>
           {/* row1 */}
           <div className='flex items-center justify-between'>
                <div onClick={()=>dispatch(setOpenEdit(false))} className='p-2 rounded-full hover:bg-slate-300 cursor-pointer'>
                    <a data-tooltip-id='close' data-tooltip-delay-show={300} data-tooltip-delay-hide={300} data-tooltip-place='bottom'>
                        <RxCross1 size={"20px"}/></a>
                    <Tooltip id='close' style={{padding:"2px"}}>
                        <p>Close profile picture</p>
                    </Tooltip>
                </div>
                <div className='flex items-center'>
                    <img src={google} alt='google' className='w-20'/>
                    <h1 className='text-xl text-gray-600 font-medium'>Account</h1>
                </div>
                <div  className='p-2 rounded-full hover:bg-slate-300 relative cursor-pointer'>
                    <a ref={iconRef} onClick={()=>setOpenMenu(!openMenu)} data-tooltip-id='menu' data-tooltip-delay-show={300} data-tooltip-delay-hide={300} data-tooltip-place='bottom' >
                        <BsThreeDotsVertical size={"20px"}/></a>
                    <Tooltip id='menu' style={{padding:"2px"}}>
                        <p>Menu</p>
                    </Tooltip>
                    {
                        openMenu && <div ref={menuRef} className={`flex-col bg-white py-1 w-40 shadow-xl shadow-gray-400 absolute top-12 right-5 rounded-md`}>
                        <ul className='flex flex-col gap-2'>
                           {menu.map(({id, title, href})=>{
                               return <li onClick={()=>setOpenMenu(false)} key={id} className='p-2 cursor-pointer text-gray-600 hover:bg-slate-300'><a href={href} target='_blank'>{title}</a></li>
                           }
                             
                           )}
                        </ul>
                    </div>
                    }
                    
                    
                </div>
                
           </div>
           {/* row2 */}
           <div className='flex flex-col  gap-3'>
              <h1 className='text-lg font-semibold'>Profile Picture</h1>
              <p className='text-sm text-gray-800'>A picture helps people to recognise you and lets you know when you are signed in to your account</p>
           </div>
           {/* row3 */}
           <div className='flex items-center justify-center my-3 cursor-pointer'>
             <img src={profile} alt='profile' className='w-56 h-56 object-cover rounded-full'/>
           </div>
           {/* row4 */}
           <div className='flex items-center justify-center text-gray-700 gap-1 py-2 rounded-full bg-sky-200 cursor-pointer hover:shadow shadow-lg hover:shadow-sky-600'>
                <MdOutlineAddPhotoAlternate size={"20px"} />
                <p className='font-medium'> Add profile picture</p>
           </div>
        </div>

    </div>
  )
}

export default EditProfile