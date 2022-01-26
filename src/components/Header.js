import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex items-center fixed w-full h-[96px] z-50">
      <div className="container flex justify-between">
        <div className="logo">
          {/* <Image src="/ws_white.png" alt="logo" objectFit='contain' height={48} width={208} /> */}
        </div>
        <div className="right flex gap-8 items-center">
          <div className="navLinks flex gap-8">
            {LINKS.map((link, i) => (
              <Link key={i} href={link.href}>
                <a className="link">{link.text}</a>
              </Link>
            ))}
          </div>
          <div
            id="contactCta"
            className="cta px-4 py-2 border-2 rounded-md cursor-pointer"
          >
            Get In Touch
          </div>
        </div>
      </div>
    </header>
  )
}

const LINKS = [
  { text: 'Home', href: '/', type: null },
  { text: 'Services', href: '/', type: null },
  { text: 'FAQ', href: '#faq', type: null },
]
