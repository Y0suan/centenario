import Layout from '@/Component/Layoud';
import Loader from '@/Component/Loader';
import React, { useEffect, lazy, Suspense } from 'react';

const CalendarPage = lazy(() => import('@/Component/Calendar/Calendar'));
const SectionHome = lazy(() => import('@/Component/Section/SectionHome'));
const SectionScroll = lazy(() => import('@/Component/Section/SectionScroll'));

const LoaderFallback = () => <Loader />;

export default function HomePage() {
  return (
    <>
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
