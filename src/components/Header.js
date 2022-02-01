import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex items-center fixed w-full h-[96px] z-50">
      <div className="container  justify-between hidden md:flex">
        <div className="logo">
          {/* <Image
            src="/ws_white.png"
            alt="logo"
            objectFit="contain"
            height={48}
            width={208}
          /> */}
        </div>
        <div className="right flex gap-8 items-center">
          {/* <div className="navLinks flex items-center justify-center gap-8">
            {LINKS.map((link, i) => (
              <Link key={i} href={link.href}>
                <a className="link font-sans text-2xl font-bold">{link.text}</a>
              </Link>
            ))}
          </div> */}
          <button className="btn btn-primary px-4 py-2 mt-4 border-2 border-brightOrange hover:bg-brightOrange max-w-xs w-full align-center justify-center font-bold uppercase font-sans text-2xl">
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  )
}

const LINKS = [{ text: 'Home', href: '/', type: null }]
