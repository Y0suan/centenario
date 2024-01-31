import React from 'react'
import { GiBookmarklet } from "react-icons/gi";
import { BsPersonVcardFill } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";

export const ListDonation = () => {
  return (
    <div className='ListDonation' >
    <div className='MiniCardCont colorZian '>
        <GiBookmarklet className='MiniCardIcon' />
        <div className='MiniCardText' >
            <h2>30+</h2>
            <p>Más de 30 cursos dictados.</p>
        </div>
    </div>
    <div className='MiniCardCont colorRed'>
        <BsPersonVcardFill className='MiniCardIcon' />
        <div className='MiniCardText' >
            <h2>10+</h2>
            <p>Participamos en más de 10 programas</p>
        </div>
    </div>
    <div className='MiniCardCont colorAmarillo'>
        <GiMeal className='MiniCardIcon' />
        <div className='MiniCardText' >
            <h2>15+</h2>
            <p>Estamos en mas de 15 merenderos</p>
        </div>
    </div>
    </div>
  )
}
