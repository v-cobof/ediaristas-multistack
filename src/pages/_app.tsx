import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import theme from '../ui/themes/theme'
import Head from 'next/head';
import Header from '../ui/components/surface/Header/Header';
import Footer from '../ui/components/surface/Footer/Footer';
import { AppContainer } from '../ui/styles/pages/_app.style'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

        <title>e-diaristas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable @next/next/no-page-custom-font*/}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;1,100&display=swap" rel="stylesheet" />
        {/* eslint-disable @next/next/no-css-tags*/}
        <link href="../../public/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />

      </Head>

      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp
