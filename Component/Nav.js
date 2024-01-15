import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div class='cont-Nav'>
        <div className='scroll scrollbar-hidden'>
            <Link href={'/secDeGobierno'} class='nav-link'>
                Sec. de Gobierno
            </Link>
            <Link href={'/seDeHacienda'} class='nav-link'>
                Sec. de Hacienda
            </Link>
            <Link href={'/secDeObrasPublicas'} class='nav-link'>
                Sec. de Obras Publicas
            </Link>
            <Link href={'/secDeAmbiente'} class='nav-link'>
                Sec. de Ambiente
            </Link>
            <Link href={'/seDeProduccion'} class='nav-link'>
                Sec. de Producción
            </Link>
            <Link href={'/secDeAccion'} class='nav-link'>
                Sec. de Acción Social
            </Link>
        </div>    
    </div>
  )
}

export default Nav