import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <navigation>
      <div className="container p-4 flex items-center fixed">
        <div className="links flex gap-8">
          {LINKS.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </navigation>
  )
}

const LINKS = [
  { name: 'Home', href: '/', type: null },
  { name: 'Services', href: '/', type: null },
  { name: 'FAQ', href: '#faq', type: null },
  { name: 'Contact', href: '/contact', type: null },
]
