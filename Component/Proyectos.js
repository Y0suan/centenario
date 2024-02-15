import React from 'react'
import Link from 'next/link'


export const Proyectos = () => {
  return (
    <div className='Proyectos' >
        <div className='ProyectosCont' >
            <div className='ProyectosImg' >
                <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707822739/WhatsApp_Image_2024-02-13_at_08.09.44_zm8kgc.jpg' ></img>
                <div className='ProyectosImgDiv' >
                    <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707822738/WhatsApp_Image_2024-02-13_at_08.09.43_wokx6h.jpg'></img>
                    <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707990509/391620013_744849604121832_2600211533853916193_n_ts5crp.jpg' ></img>
                </div>
            </div>
            <div className='ProyectosText' >
                <Link href={'/cursos'} className='color' >Educación para el Desarrollo</Link>
                <h3>Cursos en "El Centenario</h3>
                <p>Descubre en "El Centenario" una variedad de cursos diseñados para empoderar y enriquecer. Desde formación académica hasta habilidades prácticas, nuestro objetivo es brindar oportunidades educativas que impulsen el crecimiento personal y profesional, contribuyendo así al desarrollo integral de nuestra comunidad en Eldorado, Misiones. Únete a nuestros cursos y prepárate para un futuro lleno de posibilidades</p>
                <Link href={'/cursos'} className='btn btnPrimary' >
                    Descubre Nuestros Cursos
                </Link>
            </div>
        </div>
    </div>
  )
}
