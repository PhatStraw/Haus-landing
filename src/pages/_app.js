import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { useCallback, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const onScroll = useCallback((event) => {
    var navbar = document.getElementById('navbar');
    if (window.scrollY >= 200) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }, []);
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, [onScroll]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
