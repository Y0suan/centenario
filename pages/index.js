import Layout from '@/Component/Layoud';
import Loader from '@/Component/Loader';
import React, { useEffect, lazy, Suspense } from 'react';
const CalendarPage = lazy(() => import('@/Component/Calendar/Calendar'));
const SectionHome = lazy(() => import('@/Component/Section/SectionHome'));
const SectionScroll = lazy(() => import('@/Component/Section/SectionScroll'));
import ReactGA from 'react-ga';

const LoaderFallback = () => <Loader/>;

export default function HomePage() {
  useEffect(() => {
    // Verifica si ya se inicializó react-ga antes de hacerlo nuevamente
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize('G-H0EHX8H1FP'); // Reemplaza con tu ID de seguimiento
      window.GA_INITIALIZED = true;
    }
    ReactGA.pageview('/');
  }, []);

  return (
    <Layout>
      <Suspense fallback={<LoaderFallback />}>
        <SectionHome />
        <CalendarPage />
        <SectionScroll />
      </Suspense>
    </Layout>
  );
}
