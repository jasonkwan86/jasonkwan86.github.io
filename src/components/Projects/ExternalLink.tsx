import React from 'react'
import Image from 'next/image'

function ExternalLink({ children, link, logoSrc }: { children: React.ReactNode, link: string, logoSrc: string }) {
    const logoDimensions = 25;

  return (
    <a 
        className='flex justify-center items-center gap-1 w-fit px-6 py-3 text-lg md:text-base md:w-64 md:h-16 md:px-0 md:py-0 whitespace-nowrap self-center md:self-start bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-lg my-6 md:my-10 mx-4 md:mx-10 shadow-2xl hover:from-slate-300 hover:to-slate-400'
        href={link}
        target='_blank'
    >
        {/* Logo */}
        <Image
        src={logoSrc}
        width={logoDimensions}
        height={logoDimensions}
        alt="link icon"
        />
        <div className=' ml-1'>
            {children}

        </div>
    </a>
  )
}

export default ExternalLink