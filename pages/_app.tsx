// Next
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

// NextAuth
import { SessionProvider, useSession } from 'next-auth/react';

// React
import { ReactChild } from 'react';

// Styles
import '../styles/globals.css';

// Prime Themes
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/md-light-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '/node_modules/primeflex/primeflex.css';


interface AuthProps{
  children: ReactChild;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      {router.pathname !== '/auth/login' ?

        <Auth>
          <Component {...pageProps} />
        </Auth>

        :

        <Component {...pageProps} />
      }
    </SessionProvider>
  )
}

function Auth({ children }: AuthProps) {
  const { data: session } = useSession({ required: true });
  if (!session) return <></>;

  return (
    <>
      {children}
    </>
  );
}

export default MyApp;