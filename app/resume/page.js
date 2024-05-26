'use client'
import { Editor } from "@/components/Resume/Editor"
import { ResumeProvider } from "@/context/ResumeProvider"
import React, { useState } from "react"
import Preview1 from "@/components/Resume/Preview1"
import Preview2 from "@/components/Resume/Preview2"
import ResumeMakerSec from "@/components/Home/ResumeMakerSec"
import Footer from "@/components/Layout/Footer"

const Resume = () => {
    const [resume, setResume] = useState(1)
    return (
        <ResumeProvider >
            <div className="flex flex-col gap-8 pt-20">
                <ResumeMakerSec />
                <h1 className="font-bold text-3xl md:text-4xl heroColor2 md:hidden px-10 text-center">Resume Builder Only Works in Desktop and Tabs</h1>
                <div className="hidden md:flex flex-col gap-16 px-5 sm:px-10 lg:px-20">
                    <Editor />
                    <div>
                        <h2 className="font-bold text-2xl mb-4">Select Preview</h2>
                        <div className="flex gap-16 items-center">
                            <div className={`w-60 rounded-md p-4 cursor-pointer ${resume === 1 ? 'bg-neutral-700' : 'bg-neutral-900'}`} onClick={() => setResume(1)}>
                                <img src="/img/cv1.jpg" alt="" className="w-full" />
                            </div>
                            <div className={`w-60 rounded-md p-4 cursor-pointer ${resume === 2 ? 'bg-neutral-700' : 'bg-neutral-900'}`} onClick={() => setResume(2)}>
                                <img src="/img/cv2.jpg" alt="" className="w-full" />
                            </div>
                        </div>
                    </div>
                    {resume === 1 && (<Preview1 />)}
                    {resume === 2 && (<Preview2 />)}
                </div>
                <Footer />
            </div>
        </ResumeProvider >
    )
}

export default Resume