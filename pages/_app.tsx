import '../styles/globals.css';
import type { AppProps } from 'next/app';

// Prime Themes
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '/node_modules/primeflex/primeflex.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
