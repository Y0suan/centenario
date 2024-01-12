import React from 'react';
import styled from 'styled-components';
import CompartirWpp from '../Botones/Compartir';
import ShareByEmailButton from '../Botones/ShareByEmailButton';
import { google, outlook, office365, yahoo, ics } from "calendar-link";
import Link from 'next/link';
import { SiGooglecalendar } from "react-icons/si";

const BigCardLoader = () => {


  return (
    <div className='contBigCardLoader'>
      <div className='imagen'>
        
      </div>
      <div className='text'>
        <p></p>
        <h3 className='tituloPrincipal' ></h3>
        <p></p>
        <div className='btnCont'>
            <a className='btn'></a>
            <a className='btn'></a>
            <a className='btn'></a>
        </div>

      </div>
    </div>
  );
};

export default BigCardLoader;
