import { createSlice } from "@reduxjs/toolkit";



const appSlice=createSlice({
    name:"appSlice",
    initialState:{
        open:false,
        emails:[],
        selectedEmail:null,
        
        openSidebar:"",
        openReply:'',
        openForward:'',
        user:null,
        isPopOverOpen:false,
        openTo:false,
        openGoogleApps:false,
        openProfile:false,
        openEdit:false,
        openSupport:false,
        openHelp:false,
        openUpdates:false,
        openOffcanvas:false

        
       
    },

    reducers:{
        setopen:(state,action)=>{
            state.open=action.payload
        },

        setEmails:(state, action)=>{
            state.emails =action.payload
        },

        setSelectedEmail:(state, action)=>{
            state.selectedEmail=action.payload
        },

        
         setOpenSidebar:(state, action)=>{
            state.openSidebar=action.payload
        },
        setOpenReply:(state, action)=>{
            state.openReply=action.payload
        },
        setUser:(state, action)=>{
            state.user=action.payload
        },
        setIsPopoverOpen:(state, action)=>{
            state.isPopOverOpen=action.payload
        },
        setOpenForward:(state, action)=>{
            state.openForward=action.payload
        },
        setOpenTo:(state, action)=>{
            state.openTo=action.payload
        },
        setOpenGoogleApps:(state, action)=>{
            state.openGoogleApps=action.payload
        },
        setOpenProfile:(state, action)=>{
            state.openProfile=action.payload
        },
        setOpenEdit:(state, action)=>{
            state.openEdit=action.payload
        }
        ,
        setOpenSupport:(state, action)=>{
            state.openSupport=action.payload
        },
        setOpenHelp:(state, action)=>{
            state.openHelp=action.payload
        }, 
        setOpenUpdates:(state, action)=>{
            state.openUpdates=action.payload
        },
        setOpenOffCanvas:(state, action)=>{
            state.openOffcanvas=action.payload
        }
        
    }
})

export const {setopen, setEmails, setSelectedEmail,  setOpenSidebar, setOpenReply, setUser, setIsPopoverOpen, setOpenForward, setOpenTo, setOpenGoogleApps, setOpenProfile, setOpenEdit, setOpenSupport,  setOpenHelp, setOpenUpdates, setOpenOffcanvas}=appSlice.actions;

export default appSlice.reducer;


