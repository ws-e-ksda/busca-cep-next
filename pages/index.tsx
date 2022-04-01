// Next.js
import type { NextPage } from 'next';
import Link              from 'next/link';

// Primereact
import { Button }       from 'primereact/button';

// Componentes
import { Panel } from '../components/Panel';

const Home: NextPage = () => {
  
    return(
      <>
        <Panel backButton={false}>
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
