import { Globe, Locate, Mail, MapPin, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='p-5 sm:p-10 lg:p-20 w-full'>
            <footer className="FooterGradLight dark:FooterGrad lg:flex-nowrap flex-wrap  w-full p-5 sm:p-10  flex rounded-2xl gap-10 font-medium text-white/60">
                <div className="flex flex-col gap-5 ">
                    <div className="flex flex-col gap-3">
                        <h1 className='font-bold text-2xl text-white'>BIT UNFILTERED</h1>
                        <p>Welcome to BIT Sindri&apos;s Digital Odyssey! Dive into a treasure trove of resources, spark lively discussions, and embark on your academic journey with us, Join the constellation of curious minds and let&apos;s create a new territory and redefine the realm of education together.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className='font-bold text-2xl text-white'>Follow us</h1>
                        <p>Made with 🍵 by <a href="https://premworks.vercel.app/" target='_blank' className='underline'>@modernartist</a> & <a href="https://imalive.netlify.app/" target='_blank' className='underline'>DBros.</a></p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 min-w-48">
                    <h1 className='font-bold text-2xl text-white'>Useful links</h1>
                    <Link href='/resume'><span>Resume Maker</span></Link>
                    <a href='https://forms.gle/B3wxf9vtqfe9sQo86' target='_blank'><span>Improve Us</span></a>
                </div>
                <div className="flex flex-col gap-3 max-w-80">
                    <h1 className='font-bold text-2xl text-white'>Contact us</h1>
                    <span>Together, lets learn, collaborate and build for society.</span>
                    <span className='flex gap-4 text-white font-bold items-center text-lg'><Mail />Mail us !</span>
                    <a href="mailto:deepakkumarkasyap12@gmail.com" target='_blank'><span className='flex gap-4'> deepakkumarkasyap12@gmail.com</span></a>
                    <a href="mailto:premgameworld@gmail.com" target='_blank'><span className='flex gap-4'> premgameworld@gmail.com</span></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer