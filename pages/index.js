import { Cuidadoresdelacasa } from '@/Component/Cuidadoresdelacasa';
import Donaciones from '@/Component/Donaciones';
import { Donaciones2 } from '@/Component/Donaciones2';
import { Home } from '@/Component/Home';
import { Layout } from '@/Component/Layout/Layout';
import { ListDonation } from '@/Component/ListDonation';
import Mision from '@/Component/Mision';
import NavbarResponsivo from '@/Component/NavResponsivo';
import { Proyectos } from '@/Component/Proyectos';
import React, { useEffect, lazy, Suspense } from 'react';


export default function HomePage() {
  return (
    <div className='body' >
     <NavbarResponsivo/> 
    <Home/>
    <ListDonation/>
    <Mision/>
    <Proyectos/>
    <Donaciones2/>
    <Cuidadoresdelacasa/>
    </div>
  );
}
