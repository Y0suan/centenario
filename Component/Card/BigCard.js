import React from 'react';
import styled from 'styled-components';
import CompartirWpp from '../Botones/Compartir';
import ShareByEmailButton from '../Botones/ShareByEmailButton';
import { google, outlook, office365, yahoo, ics } from "calendar-link";
import Link from 'next/link';
import { SiGooglecalendar } from "react-icons/si";

const BigCard = ({ product }) => {
  // Función para obtener un máximo de 20 palabras
  const truncateDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  };

  const truncatedDescription = truncateDescription(product.description, 50);

  const event = {
    title: product.title,
    description: product.description,
    start: product.fecha,
    duration: [3, "hour"],
  };
  
  const url = '/product/' + product._id ;

  return (
    <div className='contBigCard'>
      <div className='imagen'>
        <img src={product.images} alt="Product" />
      </div>
      <div className='text'>
        <p>{product.fecha}</p>
        <h3 className='tituloPrincipal' >{product.title}</h3>
        <p>{truncatedDescription}</p>
        {/* <btn className='btnPrincipal' >Comparte</btn> */}
        <div className='btnCont'>
        <CompartirWpp/>
        <ShareByEmailButton/>
        <Link href={google(event)} target='_blank' className='btnCalendarFa' >
            <SiGooglecalendar />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BigCard;
