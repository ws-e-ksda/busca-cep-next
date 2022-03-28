// Primereact
import { Card }   from 'primereact/card';
import { Button } from 'primereact/button';

// Next
import Link from 'next/link';
import Head from 'next/head';

export const Panel = (props: any) =>{
    return (
        <>
            <Head>
                <title>Busca CEP</title>
                <link rel="icon" href="/brasil.ico" />
            </Head>
            <Card className="card shadow-5 border-50 border-round border-1 m-3">
                <Link href="/">
                    <Button className="p-button-outlined p-button-sm"
                            icon="pi pi-arrow-left" >
                        <a></a>
                    </Button>
                </Link>
                <h1 className='text-primary'>{props.title}</h1>
                {/* Forms */}
                {props.children}
                
            </Card>
        </>
    );
}