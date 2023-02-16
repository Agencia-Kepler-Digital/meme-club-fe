import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ColyseusContextProvider } from '../contexts/ColyseusContext';
import { GlobalStyles } from '../styles/global';
import * as gtag from '@/src/lib/gtag';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ColyseusContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ColyseusContextProvider>
  );
}
