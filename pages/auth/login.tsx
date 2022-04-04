// Next
import Head  from 'next/head';

// NextAuth
import { signIn } from 'next-auth/react';

// Primereact
import { Card }   from 'primereact/card';
import { Button } from 'primereact/button';
import { Image }  from 'primereact/image';

export default function Login() {

    const header = <Image alt='card' src="/background-header-login.jpg" width="395" height="200" />
    const footer = <Button label='Entrar' icon={"pi pi-github"}
        className="p-button-outlined" onClick={() => signIn('github', { callbackUrl: '/' })} />
    return (
        <>
            <div className="flex justify-content-center mt-8">
                <Head>
                    <title>Login</title>
                    <link rel="icon" href="/brasil.ico" />
                </Head>
                <Card className="inline-block text-primary shadow-5"
                    header={header}
                    title="Seja bem vindo(a) ao BUSCA CEP"
                    subTitle="Faça seu login pelo Github."
                    footer={footer} />
            </div>
        </>
    );

}