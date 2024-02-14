import Link from 'next/link'
import React from 'react'

export const Cuidadoresdelacasa = () => {
  return (
    <div className='Cuidadoresdelacasa' >
        <div className='CuidadoresdelacasaText'>
            <h3>Tambien formamos parte</h3>
            <h4>Cuidadores de la Casa Común</h4>
            <p>Descubre Cuidadores de la Casa Común, nacidos del llamado del Papa Francisco. Buscamos integrar a jóvenes vulnerables, generando oportunidades en áreas como agricultura, reciclado y energías limpias. Con el respaldo de El Centenario, trabajamos para proteger nuestra Casa Común desde un enfoque ecológico y social. Alabamos la vida, promovemos la reconciliación y luchamos contra la cultura del descarte. ¡Súmate, también somos parte de Cuidadores!</p>
            <Link href={'/'} className='btnPrimary' >Forma Parte</Link>
        </div>
        <div className='CuidadoresdelacasaImg'>
            <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707823846/392783368_337893908604674_6975151087425358686_n_usmrsq.jpg' ></img>
        </div>
    </div>
  )
}
