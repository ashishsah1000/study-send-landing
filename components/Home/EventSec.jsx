import React from 'react'
import Headings from '../Common/Headings'
import EventCard from './EventCard'

const EventSec = () => {
  return (
    <div className="relative flex flex-col sm:py-0 py-20 w-full overflow-x-clip">
      <div className='flex flex-col p-5 sm:p-10 lg:p-20 relative gap-5 max-w-[800px]'>
        <Headings head={"Events"} />
        <h1 className="text-3xl sm:text-4xl  font-bold">
          Unleash Your Campus Spirit: <span className='textGrad'>Exploring Clubs </span>and Events at BIT Sindri
        </h1>
        <p className='text-lg text-secondary-foreground font-light'>Find your niche and stay engaged with various clubs and events. Connect with peers, dive into your interests, and make the most of your college experience.</p>
        {/* <img className='absolute bottom-0 right-0 -z-10' src="/img/balls.svg" alt="" /> */}
      </div>
      <div className="flex no-scrollbar px-5 sm:px-10 lg:px-20 gap-10 overflow-x-auto scrollbar p-4">
        <div className="eventCard border border-gray-800 flex custom-cursor flex-col overflow-hidden justify-between rounded-xl bg-[url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2glMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D')] object-center bg-center bg-cover">
          <div className="flex bgGrad p-2 m-4 flex-col items-center w-fit rounded-[4px] text-white">
            <span className='text-2xl font-semibold leading-none'>IETE SF</span>
            {/* <span className='text-2xl font-medium uppercase'>jan</span>
            <span className='text-xl font-medium uppercase'>2012</span> */}
          </div>
          <div className="p-4 pt-32 relative top-24 flex flex-col gap-4  bg-gradient-to-t from-black to-black/0 card-content">
            <h1 className='font-black tracking-wider textGrad text-2xl'>Tech Udbhav</h1>
            <p className='w-64 text-white'>🎉 Coming Soon! Stay tuned for exciting updates and new features. 🚀</p>
          </div>
        </div>
        <div className="eventCard border border-gray-800 flex custom-cursor flex-col overflow-hidden justify-between rounded-xl bg-[url('https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] object-center bg-center bg-cover">
          <div className="flex bgGrad p-2 m-4 flex-col items-center w-fit rounded-[4px] text-white">
            <span className='text-2xl font-semibold leading-none'>HNCC</span>
            {/* <span className='text-2xl font-medium uppercase'>jan</span>
            <span className='text-xl font-medium uppercase'>2012</span> */}
          </div>
          <div className="p-4 pt-32 relative top-24 flex flex-col gap-4  bg-gradient-to-t from-black to-black/0 card-content">
            <h1 className='font-black tracking-wider textGrad text-2xl'>Hack-o-verse</h1>
            <p className='w-64 text-white'>🎉 Coming Soon! Stay tuned for exciting updates and new features. 🚀</p>
          </div>
        </div>
        <div className="eventCard border border-gray-800 flex custom-cursor flex-col overflow-hidden justify-between rounded-xl bg-[url('https://images.unsplash.com/photo-1559076185-d25766461a17?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] object-center bg-center bg-cover">
          <div className="flex bgGrad p-2 m-4 flex-col items-center w-fit rounded-[4px] text-white">
            <span className='text-2xl font-semibold leading-none'>Arts</span>
            {/* <span className='text-2xl font-medium uppercase'>jan</span>
            <span className='text-xl font-medium uppercase'>2012</span> */}
          </div>
          <div className="p-4 pt-32 relative top-24 flex flex-col gap-4  bg-gradient-to-t from-black to-black/0 card-content">
            <h1 className='font-black tracking-wider textGrad text-2xl'>Glimpse-o-Art</h1>
            <p className='w-64 text-white'>🎉 Coming Soon! Stay tuned for exciting updates and new features. 🚀</p>
          </div>
        </div>
        <div className="eventCard border border-gray-800 flex custom-cursor flex-col overflow-hidden justify-between rounded-xl bg-[url('https://images.unsplash.com/photo-1635971302902-8c36accc3e5b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] object-center bg-center bg-cover">
          <div className="flex bgGrad p-2 m-4 flex-col items-center w-fit rounded-[4px] text-white">
            <span className='text-2xl font-semibold leading-none'>Model</span>
            {/* <span className='text-2xl font-medium uppercase'>jan</span>
            <span className='text-xl font-medium uppercase'>2012</span> */}
          </div>
          <div className="p-4 pt-32 relative top-24 flex flex-col gap-4  bg-gradient-to-t from-black to-black/0 card-content">
            <h1 className='font-black tracking-wider textGrad text-2xl'>Sandhaan</h1>
            <p className='w-64 text-white'>🎉 Coming Soon! Stay tuned for exciting updates and new features. 🚀</p>
          </div>
        </div>
        <div className="eventCard border border-gray-800 flex custom-cursor flex-col overflow-hidden justify-between rounded-xl bg-[url('https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] object-center bg-center bg-cover">
          <div className="flex bgGrad p-2 m-4 flex-col items-center w-fit rounded-[4px] text-white">
            <span className='text-2xl font-semibold leading-none'>ISTE</span>
            {/* <span className='text-2xl font-medium uppercase'>jan</span>
            <span className='text-xl font-medium uppercase'>2012</span> */}
          </div>
          <div className="p-4 pt-32 relative top-24 flex flex-col gap-4  bg-gradient-to-t from-black to-black/0 card-content">
            <h1 className='font-black tracking-wider textGrad text-2xl'>Triveni</h1>
            <p className='w-64 text-white'>🎉 Coming Soon! Stay tuned for exciting updates and new features. 🚀</p>
          </div>
        </div>
      </div>
      <img className='absolute -top-40 right-10 -z-10' src="/img/balls.svg" alt="" />
      <img className='absolute -top-1/2 left-1/2 -z-10 opacity-50' src="/img/blurBall.svg" alt="" />
    </div>
  )
}

export default EventSec