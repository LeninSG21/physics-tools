import type { AppProps } from 'next/app';

import { Footer } from '../components';
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
