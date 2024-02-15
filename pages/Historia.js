import { NuestraHistoria } from '@/Component/Historia/NuestraHistoria'
import { QuienesSomos } from '@/Component/Historia/QuienesSomos'
import NavbarResponsivo from '@/Component/NavResponsivo'
import React from 'react'

const Historia = () => {
  return (
    <div>
        <NavbarResponsivo/>
        <QuienesSomos/>
        <NuestraHistoria/>
    </div>
  )
}

export default Historia