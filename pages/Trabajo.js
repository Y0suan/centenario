import FooterBlack from '@/Component/FooterBlack'
import NavbarResponsivo from '@/Component/NavResponsivo'
import TrabajoIntro from '@/Component/TRabajo/TrabajoIntro'
import Link from 'next/link'
import React from 'react'

const Trabajo = () => {
  return (
    <div className='trabajo'>
      <NavbarResponsivo/>
      <TrabajoIntro/>
      <div className='Mision' >
        <div className='MisionCont'>
            <div className='MisionText' >
                <Link href={'/'} className='color' >Trabajo</Link>
                <h3> Únete a nuestra Misión de Transformación Social</h3>
                <p>Desde 2006, la Asociación Civil "El Centenario" se esfuerza por mejorar Eldorado. Trabajamos en áreas como lo social, educativo, económico, político, ambiental, urbano, histórico, deportivo y de ciudadanía, con el fin de incluir a los más vulnerables y promover el acceso a la educación y el apoyo a emprendimientos.</p>
            </div>
            <div className='MisionImg' >
                <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707823359/408880965_771117428161716_426131079936299727_n_ktsnpn.jpg' ></img>
            </div>
        </div>
    </div>

    <div>
      
    </div>
    <FooterBlack/>
    </div>
  )
}

export default Trabajo