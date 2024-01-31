import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <div class='cont-Nav'>
    <div className='scroll scrollbar-hidden'>
        <Link href={'/secretaria-gobierno-eventos'} class='nav-link'>
            Historia
        </Link>
        <Link href={'/secretaria-hacienda-eventos'} class='nav-link'>
            Galeria
        </Link>
        <Link href={'/secretaria-obras-publicas-eventos'} class='nav-link'>
            Programas
        </Link>
        <Link href={'/secretaria-ambiente-eventos'} class='nav-link'>
            Cursos
        </Link>
        <Link href={'/secretaria-produccion-eventos'} class='nav-link'>
            Socios
        </Link>
        {/* <Link href={'/secretaria-accion-social-eventos'} class='nav-link'>
            Sec. de Acción Social
        </Link> */}
    </div>    
</div>
  )
}
