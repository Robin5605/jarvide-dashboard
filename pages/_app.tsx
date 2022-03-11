import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property='og:title' content='Welcome to Jarvide' />
        <meta property='og:site_name' content='Jarvide' />
        <meta property='og:description' content='A simple and easy IDE-liked Discord bot.' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
