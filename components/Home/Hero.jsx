import React from 'react'
import HeroHeading from './HeroHeading'
import { Button } from '../ui/button'

const Hero = () => {

  return (
    <div className="relative h-screen w-full overflow-x-clip flex flex-col items-center justify-center bg-[url('/img/heroBg.svg')] bg-no-repeat bg-cover">
      <HeroHeading />
      {/* <img className='absolute top-10 left-10 lg:top-20 lg:left-40 max-w-[300px] lg:max-w-[500px]' src="/img/righto.svg" alt="" />
      <img className='absolute top-10 left-0 max-w-[350px] lg:max-w-[600px]' src="/img/rightv.svg" alt="" />
      <img className='absolute top-10 right-0 max-w-[600px] hidden lg:flex' src="/img/leftv.svg" alt="" />
      <img className='absolute top-20 right-40 max-w-[500px] hidden lg:flex' src="/img/lefto.svg" alt="" /> */}
      <img className='absolute -top-full right-1/2 -z-10' src="/img/blurBall.svg" alt="" />
      <img className='absolute -top-1 left-1/2 -z-10 opacity-80' src="/img/blurBall.svg" alt="" />
      <div className="flex gap-8 z-10 w-full justify-center flex-wrap">
        <a href='https://forms.gle/B3wxf9vtqfe9sQo86' target='_blank'><Button variant="outline">Improve Us</Button></a>
        <a href='#academic'><Button >Explore</Button></a>
      </div>
      <img className='absolute bottom-0 w-full' src="/img/bgwave.svg" alt="" />
    </div>
  )
}

export default Hero