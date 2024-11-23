import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenEdit, setOpenProfile } from '../redux/appSlice';
import profilepic from '../assets/profilepic.jfif';
import cloud from '../assets/cloud.jfif';
import { IoAddSharp } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";


const addAccountLink='https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ec=GAlAFw&hl=en-GB&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1377434425%3A1731938342806904&ddm=1'
const signOutLink="https://accounts.google.com/signout/chrome/landing?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&oc=https%3A%2F%2Fmail.google.com%2Fmail%2F&hl=en-GB";
const cloudLink="https://one.google.com/storage?utm_source=gmail&utm_medium=web&utm_campaign=g1_widget_normal&hl=en_GB&g1_landing_page=2";

const UserAccount = () => {
    const {openProfile, selectedEmail}=useSelector(store=>store.appSlice);
    const dispatch=useDispatch();
  return (
    <>
    {/* window */}
      <div className={`${openProfile? "flex":"hidden"} flex-col items-center px-6 py-2 bg-gray-200 border-4 rounded-xl border-gray-200 shadow-md shadow-gray-500  gap-5 `}>
         {/* row 1 */}
         <div className='flex justify-between items-center ml-10 gap-12'>
             <p>paramsohal05@gmail.com</p>
             <span onClick={()=>dispatch(setOpenProfile(false))} className='hover:bg-gray-300 p-2 text-lg rounded-full font-bold cursor-pointer'>&#10005;</span>
         </div>
         {/* row2 */}
         <div className='flex flex-col gap-2 items-center'>
            {/* img */}
            <div onClick={()=>dispatch(setOpenEdit(true))} className='cursor-pointer'>
                <img src={profilepic} className='w-16 rounded-full'/>
            </div>
            {/* accountName */}
            <h1 className='text-xl'>Hi, Param!</h1>
            {/* button */}
            
            <a className='px-4 py-2 rounded-full border-[1px] border-y-black border-x-gray-500 w-fit text-blue-800 font-medium hover:bg-sky-100'
                href='https://myaccount.google.com/?hl=en_GB&utm_source=OGB&utm_medium=act&gar=WzEyMF0' target='_blank'>Manage your Google Account</a>
            
             
         </div>
         {/* row3 */}
         <div className='flex gap-1'>
            {/* add account button */}
            <a href={addAccountLink} target='_blank' className='flex items-center gap-2 py-3 pl-3 pr-5 bg-white hover:bg-gray-300  rounded-s-full'>
                <IoAddSharp size={"20px"} className='text-blue-900 font-medium ' />
                <p>Add account</p>
            </a>
            {/* signOut button */}
            <a href={signOutLink}  className='flex items-center gap-2 py-3 pl-3 pr-10 bg-white hover:bg-gray-300  rounded-e-full'>
                <PiSignOutBold size={"20px"} className='text-blue-900 font-medium ' />
                <p>Sign out</p>
            </a>
         </div>
         {/* row4 */}
         <a href={cloudLink} target='_blank' className='flex bg-white py-3 px-3 hover:bg-gray-300 rounded-full gap-1 items-center w-full'>
            <img src={cloud} className='w-14 rounded-full'/>
            <p>0% of 15 GB used</p>
         </a>
         {/* row5 */}
         <div className='flex items-center justify-center gap-1'>
            <a href='https://policies.google.com/privacy?hl=en_GB' target='_blank' 
            className='text-sm text-gray-500 hover:bg-gray-300 p-1'>Privacy policy</a>
            <p>.</p>
            <a href='https://policies.google.com/terms?hl=en_GB' target='_blank' 
            className='text-sm text-gray-500 hover:bg-gray-300 p-1'>Terms of service</a>

         </div>
      </div>
      {/* mobile */}
     </>
    
  )
}

export default UserAccount