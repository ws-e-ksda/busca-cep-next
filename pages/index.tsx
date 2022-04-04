// Next.js
import type { NextPage } from 'next';
import Link              from 'next/link';

// NextAuth
import {useSession, signIn} from 'next-auth/react';

// Primereact
import { Button }       from 'primereact/button';
import { Image }        from 'primereact/image';

// Componentes
import { Panel } from '../components/Panel';

const header = <Image alt='card' src="/background-header-login.jpg" width="150" height="150"/>
const footer = <Button label='Entrar' icon={"pi pi-github"} 
                       className="p-button-outlined" onClick={() => signIn('github', {callbackUrl: '/'})}/>

const Home: NextPage = () => {
  const {data: session} = useSession({required: true});
  return(
    <>
      <Panel title={`Olá, ${session?.user?.name}.`} backButton={false}>
        <h1 className="text-primary flex justify-content-center">O que você deseja encontrar?</h1>
        <div id="links" className='flex justify-content-center align-content-center p-3'>
          <Link href="consultar-cep">
            <Button className='p-button-link p-button-raised ml-2'>
              <a >Consultar CEP</a>
            </Button>
          </Link>
          <Link href="consultar-endereco">
            <Button className='p-button-link p-button-raised mr-2'>
              <a >Consultar endereço</a>
            </Button>
          </Link>
        </div>
      </Panel>
    </>
  );
}

export default Home;
