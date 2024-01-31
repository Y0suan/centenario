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
            <img src='https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/392783368_337893908604674_6975151087425358686_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeG1tUN99CJhftk3MJVQFUxD-QLcxxIX9eD5AtzHEhf14DT5w595tcX3omqeB3hDM2YdA4CAwtldwHXOVtbmjBUO&_nc_ohc=q0u5F3TjphQAX-YT5kU&_nc_ht=scontent.fres2-1.fna&oh=00_AfBnEHKJK8Vq5CnBBj88kMHfwAUxNLjK7fb9tMWaKdz3Ig&oe=65BE7F6A' ></img>
        </div>
    </div>
  )
}
