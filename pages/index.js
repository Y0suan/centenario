import { Cuidadoresdelacasa } from '@/Component/Cuidadoresdelacasa';
import Donaciones from '@/Component/Donaciones';
import { Home } from '@/Component/Home';
import { Layout } from '@/Component/Layout/Layout';
import { ListDonation } from '@/Component/ListDonation';
import Mision from '@/Component/Mision';
import { Proyectos } from '@/Component/Proyectos';
import React, { useEffect, lazy, Suspense } from 'react';


export default function HomePage() {
  return (
    <>
    <Layout/>
    <Home/>
    <ListDonation/>
    <Mision/>
    <Proyectos/>
    <Donaciones/>
    <Cuidadoresdelacasa/>
    </>
  );
}
