import { CursosYCapacitaciones } from '@/Component/Actividades/CursosYCapacitaciones'
import NavbarResponsivo from '@/Component/NavResponsivo'
import React from 'react'

const Actividades = () => {
  return (
    <div className='Actividades' >
      <NavbarResponsivo/>
      <CursosYCapacitaciones/>
    </div>
  )
}

export default Actividades