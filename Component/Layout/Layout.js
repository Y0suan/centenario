import React from 'react'
import { Logo } from './Logo'
import { Nav } from './Nav'
import Link from 'next/link'

export const Layout = () => {
  return (
    <div className='Layout' >
        <Nav></Nav>
        <Link href={'/'} className='btnSecondari' >Hazte socio</Link>
    </div>
  )
}
