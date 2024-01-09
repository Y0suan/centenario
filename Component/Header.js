import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';



const Header = () => {



  return (
    <div className='cont-Header'>
    <Link href={'/'} className='logo-Cont'>
      {/* <p className='logo-icon'>A</p> */}
      <h1 className='logo'>
      <span className='green' >Agenda</span>
      <span className='blue'  >Municipal</span>
      <span className='yellow'  >Eldorado</span>
    </h1>
    </Link>
    <img className='imgLogo' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1704793637/agenda-next-panel/qwds1dfaepxputm1ln8q.jpg' ></img>
    {/* <form class='ContBuscador'>        
      <input
          type="text"
          name="price"
          id="price"
          className=""
          placeholder="Busca un evento"
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
        </svg>
    </form> */}
    </div>


  )
}

export default Header