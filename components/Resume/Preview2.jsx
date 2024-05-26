'use client'
import { useResume } from '@/context/ResumeProvider'
import { AtSign, Award, CalendarDays, Dot, FileBadge, Github, Linkedin, MapPin, Medal, Phone, Trophy } from 'lucide-react'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { Icons } from '../ui/icons'
import dynamic from "next/dynamic";
import PDFDocument2 from './PdfDocument2'

const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    {
        ssr: false,
        loading: () => <p>Loading...</p>,
    },
);

const Preview2 = (() => {
    const { resumeData } = useResume()
    const resumeRef = useRef()

    const { name, degree, branch, lookingFor, phone, email, linkedin, github, leetcode, leetcodeLink, gfg, gfgLink, codechef, codechefLink, codeforces, codeforcesLink } = resumeData?.basicInfo
    const { title: educationTitle, educationDetail } = resumeData?.education
    const { title: experiencesTitle, experiencesDetail } = resumeData?.experiences
    const { title: achievmentsTitle, achievmentsDetail } = resumeData?.achievments
    const { title: hobbiesTitle, hobbiesDetail } = resumeData?.hobbies
    const { title: skillsTitle, skillsDetail } = resumeData?.skills
    const { title: projectsTitle, projectsDetail } = resumeData?.projects
    const { title: activitiesTitle, activitiesDetail } = resumeData?.activities

    return (
        <div>
            <PDFDownloadLink
                document={<PDFDocument2 resumeData={resumeData} />}
                fileName="resume.pdf"
            >
                {({ loading }) => (
                    <Button className='w-fit mb-10' disabled={loading}>
                        {loading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Download
                    </Button>
                )}
            </PDFDownloadLink>
            <div className='w-full mt-0 p-10 flex flex-col gap-12' ref={resumeRef}>
                {/* basic info */}
                <div className='flex gap-6 items-center justify-center'>
                    <div className='flex flex-col items-center gap-2'>
                        <h1 className='font-bold uppercase text-3xl'>{name ? name : 'Alice Wonderland'}</h1>
                        <h3 className='font-semibold text-lg'>{degree ? degree : 'B.Tech'}, {branch ? branch : 'Information Technology'} | {lookingFor ? `Looking for ${lookingFor}` : 'Looking for web developer jobs'}</h3>
                        <div className='flex items-center gap-10'>
                            <div className='text-sm flex items-center gap-2'><div className='resume-image'><AtSign size={16} /></div>{email ? email : 'alice@gmail.com'}</div>
                            <div className='text-sm flex items-center gap-2'><div className='resume-image'><Phone size={16} /></div>{phone ? phone : '+91 0987654321'}</div>
                            <div className='text-sm flex items-center gap-2'><div className='resume-image'><Linkedin size={16} /></div>{linkedin ? linkedin : 'https://linkedin_6453'}</div>
                            <div className='text-sm flex items-center gap-2'><div className='resume-image'><Github size={16} /></div>{github ? github : 'https://alice.github.io'}</div>
                            {leetcodeLink && <a href={leetcodeLink} className='text-sm flex items-center gap-2'><img src="/icon/leetcode.png" className="w-4" alt="" />{'Leetcode'}</a>}
                            {codeforcesLink && <a href={codeforcesLink} className='text-sm flex items-center gap-2'><img src="/icon/codeforces.png" className="w-4" alt="" />{'Codeforces'}</a>}
                        </div>
                    </div>
                </div>

                {/* rest part */}
                <div className='w-full flex flex-col gap-6'>
                    {/* Education */}
                    <div className='flex flex-col gap-4 w-full'>
                        <h2 className='w-full font-bold uppercase text-lg relative'>
                            {educationTitle ? educationTitle : 'Education'}
                            <div className='absolute bottom-0 left-0 w-full py-[1px] bg-foreground'></div>
                        </h2>

                        <div className='flex flex-col gap-4 w-full'>
                            {educationDetail?.map((detail, index) => (
                                <div className='flex flex-col w-full gap-2' key={index}>
                                    <div className='font-semibold flex items-center justify-between'>
                                        <p>{detail.instituteName ? detail.instituteName : 'Birsa Institue of Technology, Sindri'}</p>
                                        <div className='flex gap-2 items-center'>{detail.startDate ? detail.startDate : 'Aug 2021'} - {detail.endDate ? detail.endDate : 'June 2025'}</div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-md'>{detail.degree ? detail.degree : 'B.Tech, Electrical Engineering'}</p> - <p className='font-semibold'>{detail.cgpa ? detail.cgpa : 'CGPA : 8.7'}</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>{detail.location ? detail.location : 'Dhanbad'}</div>
                                    </div>
                                    <div className='border border-dashed mt-2'></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className='flex flex-col gap-4 w-full'>
                        <h2 className='w-full font-bold uppercase text-lg relative'>
                            {experiencesTitle ? experiencesTitle : 'Experience'}
                            <div className='absolute bottom-0 left-0 w-full py-[1px] bg-foreground'></div>
                        </h2>

                        <div className='flex flex-col gap-4 w-full'>
                            {experiencesDetail?.map((detail, index) => (
                                <div className='flex flex-col w-full gap-2' key={index}>
                                    <div className='font-semibold flex items-center justify-between'>
                                        <p>{detail.company ? detail.company : 'Google Summer of Code 2021 - Developer'}</p>
                                        <div className='flex gap-2 items-center'>{detail.startDate ? detail.startDate : 'Aug 2021'} - {detail.endDate ? detail.endDate : 'June 2025'}</div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-md'>{detail.role ? detail.role : 'The KDE Community'}</p> | <p className='font-semibold'>{detail.technologies ? detail.technologies : 'HTML, CSS, Javascript'}</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>{detail.location ? detail.location : 'Dhanbad'}</div>
                                    </div>
                                    <div className='text-sm'>
                                        {detail.ePoint?.map((point, index) => (
                                            <div className='flex items-center' key={index}><div className='resume-image'><Dot /></div>{point}</div>
                                        ))}
                                    </div>
                                    <div className='border border-dashed mt-2'></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects */}
                    <div className='flex flex-col gap-4 w-full'>
                        <h2 className='w-full font-bold uppercase text-lg relative'>
                            {projectsTitle ? projectsTitle : 'Projects'}
                            <div className='absolute bottom-0 left-0 w-full py-[1px] bg-foreground'></div>
                        </h2>

                        <div className='flex flex-col gap-2 w-full'>
                            {projectsDetail?.map((detail, index) => (
                                <div className='flex flex-col w-full gap-2' key={index}>
                                    <a href={detail.projectLink ? detail.projectLink : ''} className='text-md flex items-center gap-2 font-semibold'>
                                        <p className='underline'>{detail.projectName ? detail.projectName : 'Sudo'}</p> | <p>{detail.technologies ? detail.technologies : 'HTML, CSS, Javascript'}</p>
                                    </a>
                                    <div className='text-sm'>
                                        {detail.pPoint?.map((point, index) => (
                                            <div className='flex' key={index}><div className='resume-image'><Dot className='min-w-4' /></div>{point ? point : 'A simple super-user authentication application for Linux systems which can be used with a companion Android App'}</div>
                                        ))}
                                    </div>
                                    <div className='border border-dashed mt-2'></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className='flex flex-col gap-4 w-full'>
                        <h2 className='w-full font-bold uppercase text-lg relative'>
                            {skillsTitle ? skillsTitle : 'Skills'}
                            <div className='absolute bottom-0 left-0 w-full py-[1px] bg-foreground'></div>
                        </h2>

                        <div className='flex flex-col gap-2 w-full'>
                            {skillsDetail?.map((detail, index) => (
                                <div className='flex items-center w-full gap-2' key={index}>
                                    <p className='font-semibold'>{detail.sTitle ? detail.sTitle : 'Computer Skills'}:</p>
                                    <p>{detail.technologies ? detail.technologies : 'Confident with C, C++, Java Boost C++, Qt, Make/CMake, Python, Bash, Rust, HTML/CSS, SQL experienced.'}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Coding Skills */}
                    <div className='flex flex-col gap-4 w-full'>
                        <h2 className='w-full font-bold uppercase text-lg relative'>
                            Coding Profile
                            <div className='absolute bottom-0 left-0 w-full py-[1px] bg-foreground'></div>
                        </h2>

                        <div className='flex flex-col gap-2 w-full'>
                            {leetcodeLink && <a href={leetcodeLink} className='text-sm flex items-center gap-2 underline'><img src="/icon/leetcode.png" className="w-4" alt="" />{leetcode}</a>}
                            {gfgLink && <a href={gfgLink} className='text-sm flex items-center gap-2 underline'><img src="/icon/gfg.png" className="w-4" alt="" />{gfg}</a>}
                            {codechefLink && <a href={codechefLink} className='text-sm flex items-center gap-2 underline'><img src="/icon/codechef.png" className="w-4" alt="" />{codechef}</a>}
                            {codeforcesLink && <a href={codeforcesLink} className='text-sm flex items-center gap-2 underline'><img src="/icon/codeforces.png" className="w-4" alt="" />{codeforces}</a>}
                        </div>
                    </div>

                    {/* Achievments */}
                    <div className='flex flex-col gap-4 w-full'>
                        <h2 className='w-full font-bold uppercase text-lg relative'>
                            {achievmentsTitle ? achievmentsTitle : 'Acheivements'}
                            <div className='absolute bottom-0 left-0 w-full py-[1px] bg-foreground'></div>
                        </h2>

                        <div className='flex flex-col gap-2 w-full'>
                            {achievmentsDetail?.map((detail, index) => (
                                <a className='flex items-center gap-1 underline' href={detail.certificateLink ? detail.certificateLink : ''} key={index}>
                                    <div className='resume-image'>{detail.icon ? detail.icon === 'award' && (<Award size={18} />) : ''}</div>
                                    <div className='resume-image'>{detail.icon ? detail.icon === 'certification' && (<FileBadge size={18} />) : ''}</div>
                                    <div className='resume-image'>{detail.icon ? detail.icon === 'medal' && (<Medal size={18} />) : ''}</div>
                                    <div className='resume-image'>{detail.icon ? detail.icon === 'trophy' && (<Trophy size={18} />) : ''}</div>
                                    {detail.detail ? detail.detail : 'Rank 1 in CodeChef May Lunchtime 2021'}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Activities */}
                    <div className='flex flex-col gap-4 w-full'>
                        <h2 className='w-full font-bold uppercase text-lg relative'>
                            {activitiesTitle ? activitiesTitle : 'Activities'}
                            <div className='absolute bottom-0 left-0 w-full py-[1px] bg-foreground'></div>
                        </h2>

                        <div className='flex flex-col gap-4 w-full'>
                            {activitiesDetail?.map((detail, index) => (
                                <div className='flex flex-col w-full gap-2' key={index}>
                                    <div className='flex items-center gap-2 text-md font-semibold'>
                                        <p>{detail.organisationName ? detail.organisationName : 'IETE SF, BIT Sindri'}</p> - <p>{detail.role ? detail.role : 'Secretary'}</p>
                                    </div>
                                    <div className='text-sm'>
                                        {detail.aPoint?.map((point, index) => (
                                            <div className='flex' key={index}><div className='resume-image'><Dot className='min-w-4' /></div>{point ? point : 'Served as the secretary of official coding club of BIT sindri'}</div>
                                        ))}
                                    </div>
                                    <div className='border border-dashed mt-2'></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hobbies & Interest */}
                    <div className='flex flex-col gap-4 w-full'>
                        <h2 className='w-full font-bold uppercase text-lg relative'>
                            {hobbiesTitle ? hobbiesTitle : 'Hobbies & Interest'}
                            <div className='absolute bottom-0 left-0 w-full py-[1px] bg-foreground'></div>
                        </h2>
                        <div className='text-sm'>{hobbiesDetail}</div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Preview2