import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


const CompartirWpp = ({ titulo }) => {
    const compartirPorWhatsApp = () => {
        const linkActual = window.location.href;
        const mensaje = `¡Mira esta publicación! ${titulo} ${linkActual}`;
        const linkWhatsApp = `whatsapp://send?text=${encodeURIComponent(mensaje)}`;
        window.location.href = linkWhatsApp;
      };
  return (
    <button className='BtnWppFa' onClick={compartirPorWhatsApp}>
    <FaWhatsapp/>
    </button>
  )
}

export default CompartirWpp