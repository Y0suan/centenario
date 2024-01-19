import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div class='cont-Nav'>
        <div className='scroll scrollbar-hidden'>
            <Link href={'/secretaria-gobierno-eventos'} class='nav-link'>
                Sec. de Gobierno
            </Link>
            <Link href={'/secretaria-hacienda-eventos'} class='nav-link'>
                Sec. de Hacienda
            </Link>
            <Link href={'/secretaria-obras-publicas-eventos'} class='nav-link'>
                Sec. de Obras Públicas
            </Link>
            <Link href={'/secretaria-ambiente-eventos'} class='nav-link'>
                Sec. de Ambiente
            </Link>
            <Link href={'/secretaria-produccion-eventos'} class='nav-link'>
                Sec. de Producción
            </Link>
            <Link href={'/secretaria-accion-social-eventos'} class='nav-link'>
                Sec. de Acción Social
            </Link>
        </div>    
    </div>
  )
}

export default Nav