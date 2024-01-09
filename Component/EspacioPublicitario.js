import Link from 'next/link'
import React from 'react'

const EspacioPublicitario = () => {
  return (
    <div className='EspacioPublicitario' >
        <h2 className='tituloPrincipalElegante' >Construyendo comunidad, día a día, evento a evento. ¡Bienvenido a la Agenda Municipal!</h2>
        <Link href={'/'} className='btnBlack' >Descubre Mas</Link>
    </div>
  )
}

export default EspacioPublicitario