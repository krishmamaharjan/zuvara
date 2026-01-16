'use client'
import Link from 'next/link'
import React from 'react'
import { navLinks } from "@/constants/index";
import Image from 'next/image';
const Navbar = () => {


  return (
    <nav className='flex justify-between items-center max-w-7xl mx-auto py-4 bg-zinc-200'>
      <Link href="/" className='flex items-center justify-center'>
      {/* <Image 
        src="/images/logo.png"
        alt='logo'
        width="30"
        height="30"
      /> */}
        Zuvara
      </Link>

      <ul className='flex gap-8'>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href="">{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar