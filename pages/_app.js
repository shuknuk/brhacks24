// _app.js

import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BRHS Hacks 2024</title>
        <meta name="description" content="BRHS Hacks - Join us for an exciting hackathon at BRHS. Innovate, code, and compete to solve real-world problems." />
        <meta name="keywords" content="BRHS Hacks, bridgewater-raritan hackathon, brhs hacks, brhacks24, br hacks 24, bridgewater hackathon, 2024 high school hackathon bridgewater raritan hackathon 2024" />
        <meta name="author" content="BRHS Hacks Team" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
