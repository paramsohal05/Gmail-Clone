import React from 'react'
import { useSelector } from 'react-redux'
import profile from '../assets/profilepic.jfif'
import google from '../assets/google.png'
import map from '../assets/maps.png'
import youTube from '../assets/yt.png';
import gemini from '../assets/gemini.png';
import news from '../assets/news.jfif';
import gmail from '../assets/gmail.jfif';
import meet from '../assets/meet.png';
import chat from '../assets/gChat.png';
import contacts from '../assets/contacts.png';
import photos from '../assets/gphotos.png';
import drive from '../assets/gDrive.png';
import calender from '../assets/gCalender.png';
import play from '../assets/playstore.png';
import translate from '../assets/translate.png';
import adcenter from '../assets/adcenter.png';
import shopping from '../assets/gShopping.png';
import finance from '../assets/finance.png';
import docs from '../assets/docs.png';
import sheets from '../assets/sheets.png';
import slides from '../assets/slides.png';
import books from '../assets/books.png';
import blogger from '../assets/blogger.jfif';
import keep from '../assets/keep.png';
import classroom from '../assets/classroom.jfif';
import earth from '../assets/earth.jfif';
import saved from '../assets/saved.jfif';
import arts from '../assets/arts.jfif';
import gAds from '../assets/gAds.png';
import gOne from '../assets/gOne.png';
import travel from '../assets/travel.png';
import forms from '../assets/forms.png';
import shop from '../assets/shop.png';
import voice from '../assets/voice.png';
import chromeWebStore from '../assets/chromeWebStore.jfif';
import fiWireless from '../assets/fiWireless.png';
import password from '../assets/password.png';
import analytics from '../assets/analytics.png';


const mainApps=[
    {
        id:1,
        href:"https://myaccount.google.com/?utm_source=OGB&utm_medium=app",
        img:profile,
        title:"Account"
    },
    {
        id:2,
        href:"https://www.google.com/?authuser=0",
        img:google,
        title:"Search"
    },
    {
        id:3,
        href:"https://www.google.com/maps?authuser=0",
        img:map,
        title:"Maps"
    },
    {
        id:4,
        href:"https://www.youtube.com/?authuser=0",
        img:youTube,
        title:"YouTube"
    },
    {
        id:5,
        href:"https://gemini.google.com/?utm_source=app_launcher&utm_medium=owned&utm_campaign=base_all",
        img:gemini,
        title:"Gemini"
    },
    {
        id:6,
        href:"https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en",
        img:news,
        title:"News"
    },
    {
        id:7,
        href:"https://mail.google.com/mail/u/0/#inbox",
        img:gmail,
        title:"Gmail"
    },
    {
        id:8,
        href:"https://meet.google.com/landing?hs=197&authuser=0",
        img:meet,
        title:"Meet"
    },
    {
        id:9,
        href:"https://mail.google.com/chat/u/0/#chat/home",
        img:chat,
        title:"Chat"
    },
    {
        id:10,
        href:"https://contacts.google.com/",
        img:contacts,
        title:"Contacts"
    },
    {
        id:11,
        href:"https://photos.google.com/",
        img:photos,
        title:"Photos"
    },
    {
        id:12,
        href:"https://drive.google.com/",
        img:drive,
        title:"Drive"
    },
    {
        id:13,
        href:"https://calendar.google.com/calendar/u/0/r?pli=1",
        img:calender,
        title:"Calender"
    },
    {
        id:14,
        href:"https://play.google.com/store/games?device=windows&pli=1",
        img:play,
        title:"Play"
    },
    {
        id:15,
        href:"https://translate.google.com/?sl=auto&tl=en&op=translate",
        img:translate,
        title:"Translate"
    },
    {
        id:16,
        href:"https://myadcenter.google.com/home?ref=app-launcher",
        img:adcenter,
        title:"Ad Center"
    },
    {
        id:17,
        href:"https://shopping.google.com/?nord=1&pli=1",
        img:shopping,
        title:"Shopping"
    },
]
const otherApps=[
    {
        id:1,
        href:"https://www.google.com/finance/?authuser=0",
        img:finance,
        title:"Finance"

    },
    {
        id:2,
        href:"https://docs.google.com/document/u/0/",
        img:docs,
        title:"Docs"

    },
    {
        id:3,
        href:"https://docs.google.com/spreadsheets/u/0/",
        img:sheets,
        title:"Sheets"

    },
    {
        id:4,
        href:"https://docs.google.com/presentation/u/0/",
        img:slides,
        title:"Slides"

    },
    {
        id:5,
        href:"https://books.google.com/?authuser=0",
        img:books,
        title:"Books"

    },
    {
        id:6,
        href:"https://www.blogger.com/about/?bpli=1",
        img:blogger,
        title:"Blogger"

    },
    {
        id:7,
        href:"https://keep.google.com/",
        img:keep,
        title:"Keep"

    },
    {
        id:8,
        href:"https://classroom.google.com/",
        img:classroom,
        title:"Classroom"

    },
    {
        id:9,
        href:"https://earth.google.com/web/?authuser=0",
        img:earth,
        title:"Earth"

    },
    {
        id:10,
        href:"https://www.google.com/interests/saved?authuser=0",
        img:saved,
        title:"Saved"

    },
    {
        id:11,
        href:"https://artsandculture.google.com/",
        img:arts,
        title:"Arts & Cul"

    },
    {
        id:12,
        href:"https://ads.google.com/home/?subid=ww-ww-xs-ip-awhc-a-ogb_cons%21o2&authuser=0",
        img:gAds,
        title:"G Ads"

    },
    {
        id:13,
        href:"https://one.google.com/?utm_source=app_launcher&utm_medium=web&utm_campaign=all&utm_content=google_oo&g1_landing_page=1",
        img:gOne,
        title:"G One"

    },
    {
        id:14,
        href:"https://www.google.com/travel/?dest_src=al&authuser=0",
        img:travel,
        title:"Travel"

    },
    {
        id:15,
        href:"https://docs.google.com/forms/u/0/",
        img:forms,
        title:"Forms"

    },
    {
        id:16,
        href:"https://store.google.com/?utm_source=app_launcher&utm_medium=google_oo&utm_campaign=GS107345&pli=1&hl=en-GB",
        img:shop,
        title:"Shop"

    },
    {
        id:17,
        href:"https://voice.google.com/u/0/about",
        img:voice,
        title:"Voice"

    },
    {
        id:18,
        href:"https://chromewebstore.google.com/",
        img:chromeWebStore,
        title:"WebStore"

    },
    {
        id:19,
        href:"https://fi.google.com/about/?utm_source=app_launcher&utm_medium=embedded_promo&authuser=0&pli=1",
        img:fiWireless,
        title:"FiWireless"

    },
    {
        id:20,
        href:" https://passwords.google.com/?utm_source=OGB&utm_medium=AL&pli=1",
        img:password,
        title:"Password "

    },
    {
        id:21,
        href:" https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0",
        img:analytics,
        title:"Analytics"

    },
   
    
]

const Googleapps = () => {
    const {openGoogleApps}=useSelector(store=>store.appSlice)
  return (
    <>
    {/* window */}
        <div  className={`${openGoogleApps? "flex":"hidden"} flex-col items-center px-2 py-2 bg-gray-200 border-4 rounded-xl border-gray-200 shadow-xl shadow-gray-500  gap-2`}>
            {/* main items */}
            <div className='grid grid-cols-3 gap-y-5 gap-x-5 bg-white px-5 py-6 rounded-xl'>
                {
                    mainApps.map(({id, img, href, title})=>(
                        <div key={id} className=' hover:bg-gray-300 cursor-pointer px-1 py-1 rounded-xl'>
                        <a href={href} target='_blank' className='flex flex-col items-center justify-center'
                         >
                             <div className='rounded-full p-1'>
                                <img src={img} alt='logo' className='w-14 h-10 rounded-full'/>
                             </div>
                             <h1>{title}</h1>
                         </a>
                        </div>
                    ))
                }
            </div>
            {/* other apps */}
            <div className='grid grid-cols-3 gap-y-5 gap-x-5 bg-white px-5 py-6 rounded-xl'>
                {
                    otherApps.map(({id, img, href, title})=>(
                        <div key={id} className=' hover:bg-gray-300 cursor-pointer px-1 py-1 rounded-xl '>
                        <a href={href} target='_blank' className='flex flex-col items-center justify-center'
                         >
                             <div className='rounded-full p-1'>
                                <img src={img} alt='logo' className='w-14 h-10 rounded-full'/>
                             </div>
                             <h1 className='overdflow-x-hidden'>{title}</h1>
                         </a>
                        </div>
                    ))
                }
               
            </div>
            {/* More from Google */}
            <div className='text-blue-700 font-medium py-2 px-3 rounded-full border-[2px] border-gray-700 w-fit my-9 hover:bg-white hover:border-slate-300'>
                <a href='https://about.google/products/' target='_blank'>More from Google</a>
            </div>
        </div>
    </>
    
  )
}

export default Googleapps