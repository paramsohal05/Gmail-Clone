import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../redux/appSlice'

const Messages = () => {
  const {emails}=useSelector(store=>store.appSlice)
  
  const dispatch=useDispatch();
  
  

  useEffect(()=>{
    const q=query(collection(db, "emails"), orderBy('createdAt', 'desc') )
    const unsubscribe=onSnapshot(q, (snapshot)=>{
            const allemails=snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
           dispatch(setEmails(allemails));
    })

  // cleanup
  return ()=>unsubscribe();
  },[])




 
  return (
    <>
    <div >
      {
        emails && emails?.map((email)=><Message email={email}/>)
      }
        
        
    </div>

    
    </>
  )
}

export default Messages