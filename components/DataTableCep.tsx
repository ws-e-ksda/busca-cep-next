// Primereact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const DataTableCep = (props: any) =>{
    return(
        <>
            <DataTable 
                value={props.value} 
                responsiveLayout = "stack"
                emptyMessage = "Nenhuma informação encontrada.">
                <Column field = "cep" header = "CEP"/>
                <Column field = "logradouro" header = "Logradouro"/>
                <Column field = "complemento" header = "Complemento"/>
                <Column field = "bairro" header = "Bairro"/>
                <Column field = "localidade" header = "Localidade"/>
                <Column field = "uf" header = "UF"/>
                <Column field = "ibge" header = "IBGE"/>
                <Column field = "gia" header = "GIA"/>
                <Column field = "ddd" header = "DDD"/>
                <Column field = "siafi" header = "SIAFI"/>
            </DataTable>
        </>
    );
}
