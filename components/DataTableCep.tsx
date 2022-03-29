// Primereact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Models
import { Data } from '../models/data';

interface DataTableCepProps{
    value: Data[];
    sortable?: boolean;
    paginator?: boolean;
}

export const DataTableCep = ({value, sortable, paginator}: DataTableCepProps) =>{
    return(
        <>
            <DataTable 
                value={value} 
                responsiveLayout = "stack"
                rows={5}
                rowsPerPageOptions={[5, 10, 25]}
                paginator={paginator}
                paginatorTemplate={"RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink"}
                paginatorClassName="justify-content-end"
                emptyMessage = "Nenhuma informação encontrada.">
                <Column field = "cep" header = "CEP" sortable={sortable}/>
                <Column field = "logradouro" header = "Logradouro" sortable={sortable}/>
                <Column field = "complemento" header = "Complemento" sortable={sortable}/>
                <Column field = "bairro" header = "Bairro" sortable={sortable}/>
                <Column field = "localidade" header = "Localidade" sortable={sortable}/>
                <Column field = "uf" header = "UF" sortable={sortable}/>
                <Column field = "ibge" header = "IBGE" sortable={sortable}/>
                <Column field = "gia" header = "GIA" sortable={sortable}/>
                <Column field = "ddd" header = "DDD" sortable={sortable}/>
                <Column field = "siafi" header = "SIAFI" sortable={sortable}/>
            </DataTable>
        </>
    );
}
