import Link from 'next/link';
import React from 'react'
import { IoMdArrowDown } from "react-icons/io";

export const Intro = () => {
  return (
    <div className='HIstoriaINtro' >
        <h1>Proyectos Comunitarios</h1>
        <p>Descubre cómo estamos transformando nuestra comunidad a través de una variedad de proyectos centrados en la inclusión, el desarrollo sostenible y el bienestar de todos. Conoce nuestras iniciativas y únete a nosotros para hacer la diferencia juntos.</p>
        <Link className='icon' href={'/'} ><IoMdArrowDown/></Link>
    </div>
  )
}
