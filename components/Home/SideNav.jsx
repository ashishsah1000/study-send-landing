'use client'
import { Box, FileBadge, Home, MessageCircleQuestion } from 'lucide-react'
import React from 'react'


import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SideNav = () => {
  const pathname = usePathname();
  return (
    <div className='fixed top-1/3 right-[-152px] hidden sm:flex gap-5 flex-col rounded-l-lg z-40'>
      <Link href="/" className={`${pathname === '/' ? 'bgGrad' : ''} relative right-0 hover:right-[152px] transition-all duration-300 ease-in-out p-4 px-6 flex gap-5 backdrop-blur-sm border-b border-gray-800/80 rounded-l-full bg-gray-200/10 font-bold drop-shadow-lg text-shadow `}><Home /> Home</Link>
      <Link href="/resume" className={`${pathname === '/resume' ? 'bgGrad' : ''} relative right-0 hover:right-[152px] transition-all duration-300 ease-in-out p-4 px-6 flex gap-5 backdrop-blur-sm border-b border-gray-800/80 rounded-l-full bg-gray-200/10 font-bold drop-shadow-lg text-shadow `}><FileBadge /> Resume Maker</Link>
      <Link href="/resources" className={`${pathname === '/resources' ? 'bgGrad' : ''} relative right-0 hover:right-[152px] transition-all duration-300 ease-in-out p-4 px-6 flex gap-5 backdrop-blur-sm border-b border-gray-800/80 rounded-l-full bg-gray-200/10 font-bold drop-shadow-lg text-shadow `}><Box /> Resources</Link>
      <Link href="/askbit" className={`${pathname === '/askbit' ? 'bgGrad' : ''} relative right-0 hover:right-[152px] transition-all duration-300 ease-in-out p-4 px-6 flex gap-5 backdrop-blur-sm border-b border-gray-800/80 rounded-l-full bg-gray-200/10 font-bold drop-shadow-lg text-shadow `}><MessageCircleQuestion /> Ask BIT</Link>
    </div>
  )
}

export default SideNav