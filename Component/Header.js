import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components';
import Center from './Center'


import { RiMenu2Line } from 'react-icons/ri';

const StyledHeader = styled.div`
background-image: linear-gradient(6deg, rgba(12,10,92,0.7287289915966386) 0%, rgba(6,14,70,0.7287289915966386) 100%), url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Posadas_-_Centro_-_Casa_de_Gobierno_de_Misiones.JPG/1024px-Posadas_-_Centro_-_Casa_de_Gobierno_de_Misiones.JPG');
width: 100%;
height: 70vh;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (max-width: 740px) {
height  :auto ;
padding-bottom: 2rem;
padding-top: 2rem;
}
`



const Header = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <StyledHeader>
      
      <h1>Registro Único de Audiencias
de Gestión de Intereses</h1>
      <form className='formHeader' >
        <input type="text" name="searchQuery" placeholder="Buscar..." />
        <button className='btn-primary ' type="submit">Buscar</button>
      </form>
  


      <button className="btn-secondari" onClick={toggleForm}>
Personalizá tu búsqueda
      </button>
      <form style={{ display: showForm ? 'block' : 'none' }}>
        {/* Aquí tus campos de formulario */}
        {/* Por ejemplo: */}
        <div className='filtrosHeader' >
        <label>Fecha</label>
        <input className='input-secondari' type="date" name="field1" placeholder="Campo 1" />
        </div>
        <div className='filtrosHeader'>
          <label>Motivo</label>
        <input className='input-secondari' type="text" name="field2" placeholder="Motivo de la audiencia" />
        </div>
        {/* <button className="btn-primary" type="submit">
          Enviar
        </button> */}
      </form>
      <div className='flex ' >

      </div>
    </StyledHeader>
  )
}

export default Header