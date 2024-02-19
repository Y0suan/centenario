import { HIstoriaINtro } from '@/Component/Historia/HIstoriaINtro'
import { NuestraHistoria } from '@/Component/Historia/NuestraHistoria'
import { QuienesSomos } from '@/Component/Historia/QuienesSomos'
import NavbarResponsivo from '@/Component/NavResponsivo'
import Link from 'next/link'
import React from 'react'

const Historia = () => {
  return (
    <div className='historia' >
        <NavbarResponsivo/>
        <HIstoriaINtro/>
        <div className='Mision' >
        <div className='MisionCont'>
            <div className='MisionText' >
                <Link href={'/'} className='color' >Historia</Link>
                <h3>Inicios y Fundación</h3>
                <p>La historia de la Asociación Civil "El Centenario" se remonta al 29 de julio de 2006, cuando un grupo de personas decididas a generar un impacto positivo en la comunidad de Eldorado se unieron para formar esta organización. Con el objetivo de dar forma a su labor previa en diversos ámbitos, dieron vida a una entidad civil con un enfoque multidisciplinario.</p>
            </div>
            <div className='MisionImg' >
                <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707823359/408880965_771117428161716_426131079936299727_n_ktsnpn.jpg' ></img>
            </div>
        </div>
    </div>
    <div className='Mision' >
        <div className='MisionCont'>
            <div className='MisionText' >
                <Link href={'/'} className='color' >Historia</Link>
                <h3>Crecimiento y Desarrollo</h3>
                <p>A lo largo de los años, "El Centenario" ha experimentado un crecimiento significativo, tanto en membresía como en alcance de sus actividades. Actualmente, cuenta con más de 200 socios activos, principalmente jóvenes comprometidos con el cambio social y el desarrollo comunitario</p>
            </div>
            <div className='MisionText' >
                <Link href={'/'} className='color' >Historia</Link>
                <h3>Alianzas y Colaboraciones</h3>
                <p>Gracias a alianzas estratégicas con ministerios nacionales y otros actores sociales, "El Centenario" ha podido implementar programas y proyectos significativos que han tenido un impacto tangible en la comunidad.</p>
            </div>
        </div>
    </div>

    <div className='equipo'>
      <div className='contEquipo'>
        <div className='cardEquipo'>
          <div className='imgCont'>
          <img src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          </div>
          <h2>Julio Cuenca</h2>
          <h4>director</h4>
        </div>
        <div className='cardEquipo'>
          <div className='imgCont'>
          <img src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          </div>
          <h2>Julio Cuenca</h2>
          <h4>director</h4>
        </div>
        <div className='cardEquipo'>
          <div className='imgCont'>
          <img src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          </div>
          <h2>Julio Cuenca</h2>
          <h4>director</h4>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Historia