import Image from 'next/image';
import React from 'react';
import { google, outlook, office365, yahoo, ics } from "calendar-link";
import Link from 'next/link';
import { SiGooglecalendar } from "react-icons/si";

const CardXl = ({produc}) => {
      // Función para limitar la descripción a un máximo de 20 palabras
  const truncateDescription = (description) => {
    const words = description.split(' ');
    const truncated = words.slice(0, 20).join(' ');
    return truncated + (words.length > 20 ? '...' : ''); // Agregar puntos suspensivos si hay más de 20 palabras
  };

  const event = {
    title: produc.title,
    description: produc.description,
    start: produc.fecha,
    duration: [3, "hour"],
  };
  
  const url = '/product/' + produc._id ;

  return (
    <Link href={url} passHref className='cardXl'>
      
        <div className='imgXl'>
          <Link href={google(event)} target='_blank' className='Link' >
            <SiGooglecalendar />
          </Link>
          {/* Mostrar solo la primera imagen si existen imágenes */}
          {produc.images.length > 0 && (
            <img src={produc.images[0]} alt='Product' /> 
          )}
        </div>
        <div className='textXl'>
          <h2>{produc.title}</h2>
          <p>{truncateDescription(produc.description)}</p> 
          <div>
            <p>{produc.fecha}</p>
            {produc.category && (
            <a href='/'>{produc.category.name}</a>
          )}
          </div>
        </div>

    </Link>
  )
}

export default CardXl