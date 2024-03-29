import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export const QuienesSomos = () => {
  return (
    <div  className='QuienesSomos' >
        <div className='Text' >
            <div className='NavLink' >
              <Link href={'/'} ><p>Inicio</p></Link> 
              <IoIosArrowForward className='IconNavLink' ></IoIosArrowForward>
              <Link href={'/Historia'} ><p>Historia</p></Link>
            </div>
            <h1>Quiénes Somos</h1>
            <p>Somos una comunidad comprometida con el cambio social y el desarrollo integral de nuestra ciudad. Con más de 17 años de experiencia, la Asociación Civil "El Centenario" se ha consolidado como una Agencia de Desarrollo que aborda diversas áreas de acción: social, productiva, deportiva, cultural, ambiental, de capacitación y formulación de proyectos.</p>
        </div>
        <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707919330/401755948_759542582652534_5695935465430682868_n_wr1dkn.jpg' ></img>
    </div>
  )
}
