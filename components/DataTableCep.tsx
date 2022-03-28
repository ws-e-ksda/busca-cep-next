// Primereact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const DataTableCep = (props: any) =>{
    return(
        <>
            <DataTable 
                value={props.value} 
                responsiveLayout = "stack"
                rows={5}
                rowsPerPageOptions={[5, 10, 25]}
                paginator={props.paginator}
                paginatorTemplate={"RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink"}
                paginatorClassName="justify-content-end"
                emptyMessage = "Nenhuma informação encontrada.">
                <Column field = "cep" header = "CEP" sortable={props.sortable}/>
                <Column field = "logradouro" header = "Logradouro" sortable={props.sortable}/>
                <Column field = "complemento" header = "Complemento" sortable={props.sortable}/>
                <Column field = "bairro" header = "Bairro" sortable={props.sortable}/>
                <Column field = "localidade" header = "Localidade" sortable={props.sortable}/>
                <Column field = "uf" header = "UF" sortable={props.sortable}/>
                <Column field = "ibge" header = "IBGE" sortable={props.sortable}/>
                <Column field = "gia" header = "GIA" sortable={props.sortable}/>
                <Column field = "ddd" header = "DDD" sortable={props.sortable}/>
                <Column field = "siafi" header = "SIAFI" sortable={props.sortable}/>
            </DataTable>
        </>
    );
}
