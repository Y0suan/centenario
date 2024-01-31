import Link from 'next/link'
import React from 'react'

const Donaciones = () => {
  return (
    <div className='Donaciones' >
        <div className='DonacionesCard colorZianFuerte' >
            <h3>Súmate al Cambio: Forma Parte de "El Centenario" Apoyándonos</h3>
            <p> Con Tu Contribución, podemos Llegar a Más Personas</p>
        </div>
        <div className='DonacionesCard colorRedFuerte DonacionesCardCenter ' >
            <h3>Nuestras Causas</h3>
            <p>Programas de Educación</p>
            <p>Desarrollo Económico Local</p>
            <p>Protección del Medio Ambiente</p>
            <p>Inclusión Social</p>
            <p>Cultura y Recreación</p>
        </div>
        <div className='DonacionesCard colorAmarilloFuerte DonacionesCardCenter ' >
            <h3>SUMATE AL CAMBIO</h3>
            <Link href={'/'} className='btnSecondari' >Empezá a Ayudar</Link>
        </div>
    </div>
  )
}

export default Donaciones