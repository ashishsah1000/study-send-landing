import React from 'react'
import Headings from '../Common/Headings'
import SkillSetCard from './SkillSetCard'
import { BrainCog, Clapperboard, CodeXml, PenTool, SquareTerminal } from 'lucide-react'

const SkillSec = () => {
    return (
        <div className='relative flex flex-col sm:py-0 py-20 justify-center gap-20 items-center p-5 sm:p-10 lg:p-20'>
            <div className='flex flex-col gap-5 max-w-[960px] items-center text-center'>
                <Headings head={"Learn Skills"} />
                <h1 className="text-3xl sm:text-4xl  font-bold ">
                    Empower <span className='textGrad'>Skillset</span>, not limitations
                    Learn which make you Earn
                </h1>
                <p className=' text-secondary-foreground font-light'>
                    Dedicating to equip you with the tools and guidance to excel beyond the textbooks. Access a variety of resources and tools to help you master these essential skills and excel in your projects and future career.
                </p>
            </div>
            <div className="grid w-full sm:grid-rows-3 sm:grid-flow-col content-center  gap-5 lg:gap-10 xl:20 max-w-[1300px]">
                <div className="bg-primary/10 w-full min-w-56 h-full backdrop-blur-sm aspect-square rounded-3xl flex flex-col items-center p-4 gap-4">
                    <span className='bgGrad aspect-square flex justify-center items-center p-4 rounded-xl'><SquareTerminal /></span>
                    <h2 className='text-2xl font-bold'>Coding</h2>
                    <p className='text-center text-primary/60 '>Unlock the world of programming with resources and tutorials on various coding languages. Whether you are a beginner or looking to enhance your skills, find everything you need to become proficient in coding and software development.</p>
                </div>
                <div className="bg-primary/10 w-full min-w-56 h-full backdrop-blur-sm aspect-square rounded-3xl flex flex-col items-center p-4 gap-4">
                    <span className='bgGrad aspect-square flex justify-center items-center p-4 rounded-xl'><CodeXml /></span>
                    <h2 className='text-2xl font-bold'>Development</h2>
                    <p className='text-center text-primary/60 '>Dive into the realm of development with guides on web and app development. Learn to build and deploy projects using the latest technologies and frameworks, and enhance your practical development skills.</p>
                </div>
                <div className="hidden lg:flex bg-[url('https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9kY2FzdCUyMHN0dWRpb3xlbnwwfDF8MHx8fDA%3D')] bg-cover bg-center border-8 border-purple-900/60 row-span-2 full rounded-full"></div>
                <div className="bg-primary/10 w-full min-w-56 h-full backdrop-blur-sm aspect-square rounded-3xl flex flex-col items-center p-4 gap-4">
                    <span className='bgGrad aspect-square flex justify-center items-center p-4 rounded-xl'><PenTool /></span>
                    <h2 className='text-2xl font-bold'>UI/UX</h2>
                    <p className='text-center text-primary/60 '>Master the art of creating intuitive and engaging user interfaces with our UI/UX design resources. Access tutorials, design principles, and tools to help you craft user-friendly and aesthetically pleasing digital experiences.</p>
                </div>
                <div className="bg-primary/10 w-full min-w-56 h-full backdrop-blur-sm aspect-square rounded-3xl flex flex-col items-center p-4 gap-4">
                    <span className='bgGrad aspect-square flex justify-center items-center p-4 rounded-xl'><Clapperboard /></span>
                    <h2 className='text-2xl font-bold'>Video Editing</h2>
                    <p className='text-center text-primary/60 '>Enhance your multimedia skills with comprehensive video editing resources. Learn the techniques and tools used by professionals to create compelling videos for various platforms, from social media to professional presentations.</p>
                </div>
                <div className="bg-primary/10 w-full min-w-56 h-full backdrop-blur-sm aspect-square rounded-3xl flex flex-col items-center p-4 gap-4">
                    <span className='bgGrad aspect-square flex justify-center items-center p-4 rounded-xl'><BrainCog /></span>
                    <h2 className='text-2xl font-bold'>Auto Cad</h2>
                    <p className='text-center text-primary/60 '>Develop your technical drawing and design skills with AutoCAD tutorials and resources. Perfect for engineering and architecture students, these guides will help you master the software for creating precise and detailed designs.</p>
                </div>
            </div>
            <img className='absolute bottom-80 -left-10 -z-10' src="/img/balls.svg" alt="" />

        </div>
    )
}

export default SkillSec