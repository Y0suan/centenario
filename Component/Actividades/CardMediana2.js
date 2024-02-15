import Link from 'next/link'
import React from 'react'

export const CardMediana2 = () => {
  return (
    <div className='CardMediana' >
        <p className='etiqueta' >Nuevo</p>
        <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1708001350/405620188_766439041962888_9190813670923705948_n_yqg9dz.jpg'></img>
       <div>
        <h3>Clases de apoyo</h3>
        <p>Lunes, miércoles y viernes de 17.30 a 18.30hs. 
Actividad gratuita.
Te esperamos en nuestra sede social de calle Moreno 498.  </p>
<Link href={'/'} className='Link' >inscripciones</Link>
</div>
    </div>
  )
}
