import Link from 'next/link'
import React from 'react'

export const Home = () => {
  return (
    <div className='homeSection'>
        <div className='homeSectionText' >
            <h1>Descubre el Legado Transformador de <span className='naranjaText' >El Centenario</span> </h1>
            <p>Fundada en 2006, "El Centenario" es una asociación comprometida con generar impacto positivo en Eldorado, transformando la comunidad desde su inicio.</p>
            <Link className='btnPrimary' href={'/historia'} >Nuestra Historia</Link>
        </div>
        <div className='homeSectionImg' >
            {/* <img  className='logo' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1706524179/logocente-removebg-preview_witgpt.png' ></img> */}
            <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1706699890/100__2_-removebg-preview_tanxlw.png' ></img>
            
            </div>     
    </div>
  )
}
