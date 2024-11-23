import React, { useState } from 'react'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdOutlineArrowCircleLeft, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineTaskAlt } from "react-icons/md";
import { MdLightbulbCircle } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { Tooltip } from 'react-tooltip';

const sidepanelIcon=[
    {
        id:1,
        ttId:"calender",
        ttContent:"Calender",
        icon:<IoCalendarNumberOutline size={"22px"} />

    },
    {
        id:2,
        ttId:"keep",
        ttContent:"Keep",
        icon:<MdLightbulbCircle size={"22px"}/>

    },
    {
        id:3,
        ttId:"tasks",
        ttContent:"Tasks",
        icon:<MdOutlineTaskAlt size={"22px"}/>

    },
    {
        id:4,
        ttId:"contacts",
        ttContent:"Contacts",
        icon:<IoIosContact size={"22px"}/>

    },
    

]

const Rightbar = () => {
    const [openSidePanel, setOpenSidePanel]=useState(true)
  return (
    <>
    <div className={`${openSidePanel? "Show":"hidden"} w-fit px-6 py-2 flex flex-col items-center gap-7 `}>
        
        
            {
                sidepanelIcon.map(({id, ttId, ttContent, icon})=>(
                <div key={id} className='text-blue-800 rounded-full p-2 hover:bg-gray-300 hover:cursor-pointer' >
                    <a data-tooltip-id={ttId} data-tooltip-place='bottom' data-tooltip-delay-show={300}>{icon}</a>
                    <Tooltip style={{padding:"2px"}} id={ttId}>
                        <p>{ttContent}</p>
                    </Tooltip>
                </div>
                ))
            }
            <div  className='text-black  rounded-full p-2 hover:bg-gray-300 mt-6' >
                    <a data-tooltip-id="getadd" data-tooltip-place='bottom' data-tooltip-delay-show={300}>< IoAddSharp size={"22px"} /></a>
                    <Tooltip style={{padding:"2px"}} id="getadd">
                        <p>Get add-ons</p>
                    </Tooltip>
                </div>
    </div>
    <div onClick={()=>setOpenSidePanel(!openSidePanel)} className='fixed right-0 bottom-1 p-2 shadow-lg shadow-gray-700 rounded-s-full hover:pr-8 duration-200 hover:cursor-pointer'>
        {
            openSidePanel? 
            <div>
                <a data-tooltip-id='hide' data-tooltip-place='top-start'> <MdOutlineKeyboardArrowRight size={"22px"}/></a>
                <Tooltip style={{padding:"2px"}} id='hide'>
                    <p>Hide side panel</p>
                </Tooltip>
            </div>
           : 
           <div>
                <a data-tooltip-id='show' data-tooltip-place='top-start'> <MdOutlineKeyboardArrowLeft size={"22px"}/></a>
                <Tooltip  style={{padding:"2px"}} id='show'>
                    <p>Show side panel</p>
                </Tooltip>
            </div>
           
        }
        
    </div>
    </>
  )
}

export default Rightbar