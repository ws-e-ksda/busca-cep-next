// Componenetes
import { Panel } from '../../components/Panel';
import { DataTableCep } from '../../components/DataTableCep';

// Serviço
import CepService from '../../services/search-cep-service';

// Models
import { Data } from '../../models/data';

// Primereact
import { Toast } from 'primereact/toast';

// Hooks
import { useEffect, useRef, useState } from 'react';

// Next
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
    
    const cepService = new CepService();
    let res = await cepService.getCep(context.params.cep);
    
    return {
        props:{ response: res }
    }
}

export default function Cep({response}: any){
    
    const toast: any = useRef(null);

    let toastMessage = {
        severity: "success", 
        summary:  "Requisição concluída", 
        detail:   "CEP buscado com sucesso"
    }

    let info:Array<Data> = [];
    let cep = "CEP não encontrado. Tente novamente.";

    if(!response.badRequest){
        if(!response.erro){
            info = [response];
            cep = `CEP: ${response.cep}`;
        }
    }

    // toast.current.show({...toastMessage});
    return (
        <Panel title={`${cep}`}>
            <DataTableCep value={info}/>
            <Toast ref={toast} className="primary"/>
        </Panel>
    );
}
