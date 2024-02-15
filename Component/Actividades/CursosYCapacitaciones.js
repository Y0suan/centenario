import React from 'react'
import { CardMediana } from './CardMediana'
import { CardMediana2 } from './CardMediana2'

export const CursosYCapacitaciones = () => {
  return (
    <div className='CursosYCapacitaciones' >
        <h1>Cursos y Capacitaciones</h1>
        <div className='cont'>
        <CardMediana/>
        <CardMediana2/>
        </div>
    </div>
  )
}
