import Layout from '@/Component/Layoud';
import Loader from '@/Component/Loader';
import React, { useEffect, lazy, Suspense } from 'react';

const CalendarPage = lazy(() => import('@/Component/Calendar/Calendar'));
const SectionHome = lazy(() => import('@/Component/Section/SectionHome'));
const SectionScroll = lazy(() => import('@/Component/Section/SectionScroll'));

const LoaderFallback = () => <Loader />;

export default function HomePage() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA('G-H0EHX8H1FP'); // Reemplaza con tu ID de seguimiento
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  
  const initializeGA = (measurementId) => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', measurementId);
    window.gtag = gtag; // Asigna la función gtag a window.gtag
  };
  
  const logPageView = () => {
    if (window.GA_INITIALIZED) {
      window.gtag('config', 'G-H0EHX8H1FP', { 'page_path': window.location.pathname });
    }
  };
  return (
    <>
      {/* Contenido del componente */}
      <Layout>
        <Suspense fallback={<LoaderFallback />}>
          <SectionHome />
          <CalendarPage />
          <SectionScroll />
        </Suspense>
      </Layout>
    </>
  );
}
