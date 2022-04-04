// React
import { ReactChild } from 'react';

// Primereact
import { Card }   from 'primereact/card';
import { Button } from 'primereact/button';

// Next
import Link from 'next/link';
import Head from 'next/head';

// NextAuth
import {useSession, signIn, signOut} from 'next-auth/react';

interface PanelProps{
    title?: string;
    backButton?: boolean;
    children: ReactChild | ReactChild[];
}

export const Panel = ( {title, children, backButton = true}: PanelProps) =>{
    const header =  
    <div className={backButton?"flex justify-content-between m-3":"flex justify-content-end m-3"}>
        {backButton &&
            <Link href="/">
                <Button className="p-button-outlined p-button-sm"
                        icon="pi pi-arrow-left" />
            </Link>
        }
        <Button label="Sair" icon="pi pi-sign-out" 
            className="p-button-outlined" onClick={() => signOut({callbackUrl:"/auth/login"})}/>
    </div>

    
    return (
        <>
            <Head>
                <title>Busca CEP</title>
                <link rel="icon" href="/brasil.ico" />
            </Head>
            <Card className="card shadow-5 border-50 border-round border-1 m-3"
                    header={header}>
                
                <h1 className='text-primary'>{title}</h1>
                {children}
            </Card>
        </>
    );
}