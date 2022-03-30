// Next.js
import type { NextPage } from 'next';
import Head              from 'next/head';
import Link              from 'next/link';

// Primereact
import { Button }       from 'primereact/button';
import { Card }         from 'primereact/card';

const Home: NextPage = () => {
  
    return(
      <>
        <Head>
          <title>Busca CEP</title>
          <link rel="icon" href="/brasil.ico" />
        </Head>
        <Card className="card shadow-5 border-50 border-round border-1 m-3">
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
        </Card>
      </>
    );

  }
export default Home;
