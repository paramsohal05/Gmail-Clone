import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { TiMinus } from "react-icons/ti";
import { LuMaximize2 } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { setopen } from '../redux/appSlice';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';



const SendMail = () => {
  const {open, }=useSelector(store=>store.appSlice);
  const dispatch=useDispatch();

  const [formData, setFormData]=useState({
    sender:"",
    to:"",
    subject:"",
    message:"",
  })

  const changeHandler=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})

  }

  const submitHandler=async (e)=>{
        e.preventDefault();
        await addDoc(collection(db, "emails" ), {
          sender:formData.sender,
          to:formData.to,
          subject:formData.subject,
          message:formData.message,
          createdAt:serverTimestamp()
          
        })

        dispatch(setopen(false));
        alert("The Email has sent")
        setFormData({
          sender:"",
          to:"",
          subject:"",
          message:""
        
        })

        
      }
  return (
    <>
    {/* window sendmail */}
    <div className={`${open? "md:block": "hidden"} bg-white max-w-6xl rounded-t-md shadow-md shadow-slate-600`}>
        {/* row 1 */}
        <div className='flex justify-between px-3 py-2 bg-gray-200'>
            <h1>New Message</h1>
            <div className='flex gap-2'>
                <div className='p-2 rounded-full hover:bg-gray-200'>
                    <TiMinus />
                </div>
                <div className='p-2 rounded-full hover:'>
                    <LuMaximize2 />
                </div>
                <div onClick={()=>dispatch(setopen(false))} className='p-2 rounded-full cursor-pointer hover:bg-gray-200'>
                    <RxCross2/>
                </div>
            </div>
            
        </div>
        {/* row 2 */}
        <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>

                <input value={formData.sender} onChange={changeHandler} name='sender'
                type='text' placeholder='Sendername' className='outline-none py-1'/>
            
                <input value={formData.to} onChange={changeHandler} name='to'
                type='email' placeholder='To' className='outline-none py-1'/>

                <input value={formData.subject} onChange={changeHandler} name='subject'
                type='text' placeholder='Subject' className='outline-none py-1'/>
                <textarea value={formData.message} onChange={changeHandler}
                name='message' cols={30} rows={10} className='outline-none py-1' ></textarea>
                <button type='submit' className='bg-blue-800 w-fit text-white px-3 py-2 rounded-xl '>Send</button>
            
            
        </form>
    </div>
    
                  
    
    </>
  )
}

export default SendMail