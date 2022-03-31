// Next
import { GetStaticPaths, GetStaticProps } from 'next';

// Componenetes
import { Panel } from '../../components/Panel';
import { DataTableCep } from '../../components/DataTableCep';

// Serviço
import CepService from '../../services/search-cep-service';

// Models
import { Data } from '../../models/data';

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

interface InfoCep {
    info: Data[];
    cep: string;
}

export const getStaticProps: GetStaticProps = async (context: any) => {

    const cepService = new CepService();

    let data: InfoCep;
    try {
        const res = await cepService.getCep(context.params.cep);
        data = { info: [res.data], cep: res.data.cep }
    } catch {
        data = { info: [], cep: "CEP não encontrado. Tente novamente." }
    }

    return {
        props: { response: data as InfoCep}
    }
}

export default function Cep({ response }: any) {
    return (
        <>
            <Panel title={response.cep}>
                <DataTableCep value={response.info} />
            </Panel>
        </>
    );
}
