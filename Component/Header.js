import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';




const Header = () => {



  return (
    <div className='cont-Header'>
    <div className='logo-Cont'>
      <p className='logo-icon'>A</p>
      <h1 className='logo' >Agenda Municipal Eldorado</h1>
    </div>
    <form className='formHeader'>
          <input
            type="text"
            name="searchQuery"
            placeholder="Buscar..."
          />
          <button className='btn-buscar' type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 buscador-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          </button>
        </form>
    </div>
  )
}

export default Header