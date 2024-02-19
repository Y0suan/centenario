import React from 'react'
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterBlack = () => {
  return (
    <footer className='footer'>
        <div>
            <h1>Logo</h1>
            <p> ¡Síguenos ahora y forma parte de nuestra comunidad!</p>
            <div className='redes' >
                <Link href={'/'} ><FaFacebook/></Link>
                <Link href={'/'} ><FaInstagram/></Link>
            </div>
        </div>
      <nav>
        <h2 className='title' >Navegador</h2>
        <ul className='navLinks'>
          <li><Link href="/"><p>Home</p></Link></li>
          <li><Link href="/historia"><p>Historia</p></Link></li>
          <li><Link href="/trabajo"><p>Trabajo</p></Link></li>
          <li><Link href="/proyectos"><p>Proyectos</p></Link></li>
          <li><Link href="/cursos"><p>Cursos</p></Link></li>
          <li><Link href="/contacto"><p>Contacto</p></Link></li>
        </ul>
      </nav>
      <div >
        <h2 className='title' >Contacto</h2>
        <div className='contactInfo'>
          <p>Dirección: 123 Calle Principal, Ciudad</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterBlack;
