import Link from 'next/link'
import React from 'react'

export const Donaciones2 = () => {
  return (
    <div className='Donaciones2'>
      <h3>Ayúdanos a llevar asistencia donde más se necesita</h3>
      <div className='ListDonaciones2' >
        <Link className='link2' href={'/'} >Asociate</Link>
        <Link className='link'  href={'/'} >Empeza a Ayudar </Link>
        <Link className='link'  href={'/'} >¿Querés trabajar con nosotros?</Link>
      </div>
    </div>
  )
}
