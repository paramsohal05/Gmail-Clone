
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import 'react-tooltip/dist/react-tooltip.css'

import Body from './components/Body'
import Inbox from './components/Inbox'
import Mail from './components/Mail'
import SendMail from './components/SendMail'
import Reply from './components/Reply'
import Login from './components/Login'
import { SiTruenas, SiTrueup } from 'react-icons/si'
import { TbRuler } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Forward from './components/Forward'
import Googleapps from './components/Googleapps'
import UserAccount from './components/UserAccount'
import EditProfile from './components/EditProfile'
import Support from './components/Support'
import Starred from './components/Starred'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
        {
          path:"/",
          element:<Inbox/>
        },
        {
          path:"/mail/:id",
          element:<Mail/>
        },
        {
          path:"/:starred",
          element:<Starred/>
        }
    ]
  }
  
])

function App() {
  const {user}=useSelector(store=>store.appSlice)
  
  
  return (
    
    <>

     {
      user==null?
        <div className='bg-[#f6f8fc]'>
        <Navbar/>
        <RouterProvider router={router}/>
        <div className='w-screen md:w-[40%] md:absolute md:bottom-0 md:right-10 md:z-10'>
          <SendMail/>
        </div>
        <div className='w-[80%] absolute bottom-10 right-40 left-40 z-10'>
          <Reply/>
        </div>
        <div className='w-[70%] absolute bottom-10 right-40 left-56 z-10 '>
          <Forward/>
        </div>
        <div className='w-fit h-[70%] absolute top-16 right-2 z-10 overflow-scroll'>
          <Googleapps/>
        </div>
        <div className='w-fit h-[70%] absolute top-16 right-2 z-10 overflow-scroll'>
          <UserAccount/>
        </div>
        <div className=''>
           <EditProfile/>
        </div>
        <div className=''>
           <Support/>
        </div>
        </div>
        :
        <Login/>
    }
       
      
      </>
    
      
   
  )
}

export default App
