
import React from 'react'

import { auth, provider} from '../firebase'
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/appSlice'
import { signInWithPopup } from 'firebase/auth'


const  
Login = () => {
    
    const dispatch=useDispatch()
    const handleSignIn= async()=>{
        try {
            
            const result=await signInWithPopup(auth, provider);
            console.log(result)
            dispatch(setUser({
                displayName:result.user.displayName,
                email:result.user.email,
                photoURL:result.user.photoURL
            }));
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-slate-300'>
        <div className='bg-white p-8 flex flex-col  rounded-md gap-3'>
            <h1 className='text-xl font-medium text-center'>Login</h1>
            
            <GoogleButton onClick={handleSignIn}/>
        </div>
    </div>
  )
}

export default 
Login