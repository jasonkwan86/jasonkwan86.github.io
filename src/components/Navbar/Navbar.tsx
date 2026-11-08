import Image from 'next/image'
import React from 'react'
import NavbarLink from '@/components/Navbar/NavbarLink';

function Navbar() {
  const logoDimensions = 42;

  return (
      <header className='flex justify-between gap-10 brightness-200 opacity-95 bg-gradient-to-l from-blue-900 to-cyan-900 pr-10 py-6'>
        {/* Main Logo */}
        <span className=' pl-40'>
          <Image 
            src='./icons/JKSignature.png'
            className=' fill-white object-fill'
            width={logoDimensions}
            height={logoDimensions}
            alt="Logo"
          />
        </span>
        <ul className='flex gap-10'>
          <li>
            <NavbarLink link="#about">About</NavbarLink>
          </li>
          <li>
            <NavbarLink link="#projects">Projects</NavbarLink>
          </li>
          <li>
            <NavbarLink link="#contact">Contact</NavbarLink>
          </li>
        </ul> 
      </header>
  )
}

export default Navbar