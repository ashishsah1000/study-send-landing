import React from 'react'
import Headings from '../Common/Headings'
import { Button } from '../ui/button'

const CtaSec = () => {
  return (
    <div className='relative p-5 sm:p-10 lg:p-20 flex flex-col md:flex-row pb-0 gap-10'>
      <div className='flex flex-col gap-5 '>
        <Headings head={"Work with us"} />
        <h1 className="text-3xl sm:text-4xl font-bold ">
          Wanna <span className='textGrad'>collaborate</span> with  other?
        </h1>
        <p className='sm:text-lg  text-secondary-foreground font-light'>Get ready to collaborate and conquer challenges together! 🌟 Soon, students of BIT can ask questions, share insights, and collaborate with peers in a supportive online community. Stay tuned for a platform designed to foster learning and growth among the BITSian family. 🚀</p>
        <div className="flex gap-8">
          <a href='https://forms.gle/B3wxf9vtqfe9sQo86' target='_blank'><Button variant="outline">Improve Us</Button></a>
          <a href='#academic'><Button >Explore</Button></a>
        </div>
      </div>
      <img className='max-w-80 m-auto' src="/img/ctaMob.png" alt="" />
      <img className='absolute bottom-0 right-64 -z-10' src="/img/balls.svg" alt="" />
      <img className='absolute -top-2/3 right-1/2 -z-10 opacity-50' src="/img/blurBall.svg" alt="" />

    </div>
  )
}

export default CtaSec