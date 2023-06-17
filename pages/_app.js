import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { SWRConfig } from 'swr';


import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <SWRConfig value={{ fetcher: (...args) => fetch(...args).then((res) => res.json()) }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}
