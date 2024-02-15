import Link from 'next/link'
import React from 'react'

export const CardMediana = () => {
  return (
    <div className='CardMediana' >
        <p className='etiqueta' >Nuevo</p>
        <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707996064/406511818_770238578249601_3143854104130091083_n_gxybkk.jpg'></img>
       <div>
        <h3>Clases de Folklore</h3>
        <p>Te esperamos lunes y viernes 17.30hs. 
En nuestra sede de calle Moreno 498. Km8. 
Todas las edades. </p>
<Link href={'/'} className='Link' >inscripciones</Link>
</div>
    </div>
  )
}
