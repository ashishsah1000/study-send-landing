'use client'
import { Box, FileBadge, Home, MessageCircleQuestion } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'
const BottomNav = () => {
  const pathname = usePathname();
  return (
    <div className='fixed text-sm flex sm:hidden flex-row justify-between bottom-0 w-screen right-0 bg-black/50 px-5 sm:px-10 lg:px-20 py-2 backdrop-blur-sm z-50 border-b border-gray-800/80'>
      <Link href='/' className="flex flex-col items-center gap-1">
        <div className={`${pathname === '/' ? 'navbgGrad' : ''} px-4 py-1 rounded-full `}><Home />
        </div>
        Home
      </Link>
      <Link href='/resume' className="flex flex-col items-center gap-1">
        <div className={`${pathname === '/resume' ? 'navbgGrad' : ''} px-4 py-1 rounded-full`}><FileBadge />
        </div>
        Resume
      </Link>
      <Link href='/resources' className="flex flex-col items-center gap-1 ">
        <div className={`${pathname === '/resources' ? 'navbgGrad' : ''} px-4 py-1 rounded-full`}  ><Box />
        </div>
        Resources
      </Link>
      <Link href='/askbit' className="flex flex-col items-center gap-1 ">
        <div className={`${pathname === '/askbit' ? 'navbgGrad' : ''} px-4 py-1 rounded-full`} ><MessageCircleQuestion />
        </div>
        Ask BIT
      </Link>

    </div>
  )
}

export default BottomNav