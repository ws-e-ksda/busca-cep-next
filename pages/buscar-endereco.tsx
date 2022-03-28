// Hooks
import { useState, useRef } from 'react';

// Primereact
import { InputText } from 'primereact/inputtext';
import { Dropdown }   from 'primereact/dropdown';
import { Button }    from 'primereact/button';
import { Toast }     from 'primereact/toast';

// Componenetes
import { DataTableCep } from '../components/DataTableCep';
import { Panel }        from '../components/Panel';

// Models
import { Data } from '../models/data';
import { InfoStatus } from '../models/infoStatus';

// Serviço
import CepService from '../services/search-cep-service';

export default function BuscarEndereco(){

    const ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 
                'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 
                'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS',
                'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    const [selectedUF, setSelectedUF] = useState("");

    const [info, setInfo] = useState<Array<Data>>([]); // Infos da tabela
    const [historic, setHistoric] = useState(new Map()); // Histórico de ceps pesquisados
    
    const [buttonLoading, setButtonLoading] = useState(false); // Button submit
    const [buttonCheckIcon, setButtonCheckIcon] = useState("pi pi-check");


    const toast: any = useRef(null);
    
    const handleSubmitForm = (e: any) => {
        e.preventDefault();
        // setButtonLoading(true);
        // setButtonCheckIcon("");
        
        // A princípio a requisição deu certo
        let toastMessage = {
            severity: "success", 
            summary:  "Requisição concluída", 
            detail:   "CEP buscado com sucesso"
        }
    }

    return(
        <Panel title="Buscar endereço">
            <form onSubmit={handleSubmitForm}>
                <div  className="inline-flex">
                    <div className="field">
                        <label htmlFor="uf" className="block" >UF</label>
                        <Dropdown className="mr-3" id="uf" placeholder="Ex.: RJ"
                                value={selectedUF}
                                options={ufs}
                                required
                                onChange={(e) => setSelectedUF(e.target.value)}/>
                    </div>

                    <div className="field">
                        <label htmlFor="cidade" className="block">Cidade</label>
                        <InputText className="mr-3" id="cidade" placeholder="Ex.: Rio de Janeiro" 
                                required
                                minLength={3}/>
                    </div>
                    <div className='field'>
                        <label htmlFor="logradouro" className="block">Logradouro</label>
                        <InputText className="mr-3" id="logradouro" placeholder="Ex.: Rua do Rocha" 
                                required
                                minLength={3}/>
                    </div>
                    <div className='flex align-content-end flex-wrap'>
                        <Button className = "p-button align-self-center mb-4"
                            label = 'Enviar'
                            icon  = {buttonCheckIcon}
                            loading = {buttonLoading}
                            type='submit'
                        />
                    </div>                  
                </div>
            </form>
            <DataTableCep value = {info}/>
            <Toast ref={toast} className="primary"/>
        </Panel>
    );
}