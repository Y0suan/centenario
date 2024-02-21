import NavbarResponsivo from '@/Component/NavResponsivo'
import { Intro } from '@/Component/Proyectos/intro'
import Link from 'next/link'
import React from 'react'

const Proyectos = () => {
  return (
    <div className='Proyectos' > 
    <NavbarResponsivo/>
    <Intro/>
    <div className='Mision2' >
        <div className='MisionCont2'>
            <div className='MisionText2' >
                <Link href={'/'} className='color' >Historia</Link>
                <h3>Inicios y Fundación</h3>
                <p>La historia de la Asociación Civil "El Centenario" se remonta al 29 de julio de 2006, cuando un grupo de personas decididas a generar un impacto positivo en la comunidad de Eldorado se unieron para formar esta organización. Con el objetivo de dar forma a su labor previa en diversos ámbitos, dieron vida a una entidad civil con un enfoque multidisciplinario.</p>
            </div>
            <div className='MisionImg2' >
                <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707823359/408880965_771117428161716_426131079936299727_n_ktsnpn.jpg' ></img>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Proyectos