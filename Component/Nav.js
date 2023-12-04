import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div class='cont-Nav'>
            <Link href={'/'} class='nav-link'>
                Sec. de Gobierno
            </Link>
            <Link href={'/'} class='nav-link'>
                Sec. de Hacienda
            </Link>
            <Link href={'/'} class='nav-link'>
                Sec. de Obras Publicas
            </Link>
            <Link href={'/'} class='nav-link'>
                Sec. de Ambiente
            </Link>
            <Link href={'/'} class='nav-link'>
                Sec. de Produccion
            </Link>
            <Link href={'/'} class='nav-link'>
                Sec. de Accion Social
            </Link>

    </div>
  )
}

export default Nav