import React from 'react'

const EventCard = () => {
  return (
    <div className="eventCard flex custom-cursor flex-col overflow-hidden justify-between rounded-xl bg-[url('https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] object-center bg-center bg-cover">
      <div className="flex bgGrad p-2 m-4 flex-col items-center w-fit rounded-[4px] text-white">
        <span className='text-3xl font-bold leading-none'>09</span>
        <span className='text-2xl font-medium uppercase'>jan</span>
        <span className='text-xl font-medium uppercase'>2012</span>
      </div>
      <div className="p-4 pt-32 relative top-24 flex flex-col gap-4  bg-gradient-to-t from-black to-black/0 card-content">
        <h1 className='font-black tracking-wider textGrad text-2xl'>Event Title Here!</h1>
        <p className='w-64 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non pulvinar nibh.</p>
      </div>
    </div>
  )
}

export default EventCard