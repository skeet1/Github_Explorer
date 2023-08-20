import React from 'react'
import './Footer.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        made with love by <Link href="https://github.com/skeet1" target='_blank' >skeet1</Link>
      </div>
    </footer>
  )
}
