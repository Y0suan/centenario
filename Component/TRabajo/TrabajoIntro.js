import Link from 'next/link';
import React from 'react'
import { IoMdArrowDown } from "react-icons/io";

const TrabajoIntro = () => {
  return (
    <div className='HIstoriaINtro' >
    <h1>Trabajos</h1>
    <p>La Asociación Civil "El Centenario" nació en 2006 con la misión de mejorar la calidad de vida y promover la inclusión social.</p>
    <Link className='icon' href={'/'} ><IoMdArrowDown/></Link>
</div>
  )
}

export default TrabajoIntro