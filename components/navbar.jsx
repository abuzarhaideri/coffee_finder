import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div>
          <header>
        <nav>
          <ul>
          <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/coffee-beans">Coffee Beans</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/coffee-stories">Coffee Stories</Link>
            </li>
            <li>
              <Link href="/locations">Locations</Link>
            </li>
          </ul>
        </nav>
      </header>

    </div>
  )
}

export default navbar
