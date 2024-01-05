import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const CompartirWhatsApp = ({ titulo }) => {
  const compartirPorWhatsApp = () => {
    const linkActual = window.location.href;
    const mensaje = `¡Mira esta publicación! ${titulo} ${linkActual}`;
    const linkWhatsApp = `whatsapp://send?text=${encodeURIComponent(mensaje)}`;
    window.location.href = linkWhatsApp;
  };

  return (
    <button className='BtnWpp' onClick={compartirPorWhatsApp}>
      <FaWhatsapp/>
        Compartir por WhatsApp
    </button>
  );
};

export default CompartirWhatsApp;
