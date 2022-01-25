import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex items-center fixed w-full h-[96px]">
      <div className="container flex justify-between">
        <div className="logo">
          <h1 className="text-2xl m-0">WITHSEISMIC</h1>
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
