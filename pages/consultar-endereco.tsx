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

// Serviço
import CepService from '../services/search-cep-service';

// ------------------------------------------------------- \\

export default function ConsultarEndereco(){

    const ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 
                'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 
                'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS',
                'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    const [selectedUF, setSelectedUF] = useState("");
    const [city, setCity] = useState("");
    const [publicPlace, setPublicPlace] = useState("");

    const [info, setInfo] = useState<Array<Data>>([]); // Infos da tabela
    const [historic, setHistoric] = useState(new Map()); // Histórico de ceps pesquisados
    
    const cepService = new CepService();

    const [buttonLoading, setButtonLoading] = useState(false); // Button submit
    const [buttonCheckIcon, setButtonCheckIcon] = useState("pi pi-check");

    const toast: any = useRef(null);
    
    const handleSubmitForm = async (e: any) => {
        e.preventDefault();
        setButtonLoading(true);
        setButtonCheckIcon("");
        
        // A princípio a requisição deu certo
        let toastMessage = {
            severity: "success", 
            summary:  "Requisição concluída", 
            detail:   "CEP buscado com sucesso"
        }

        const paramsCep = {
            uf: selectedUF,
            city: city,
            publicPlace: publicPlace
        }

        let newInfo = [];
        try{
            const response = await cepService.getAdress(paramsCep);
            if(response.data.length > 0){
                newInfo = response.data;
            }else{
                toastMessage = {
                    severity: "warn", 
                    summary:  "Requisição concluída", 
                    detail:   "Não foram encontrados registros no banco de dados"
                }
            }
        }catch(e){
            toastMessage = {
                severity: "error",
                summary: "Erro na requisição",
                detail: "Falha ao tentar buscar CEP"
            }
        }

        setInfo(newInfo);
        setButtonLoading(false);
        setButtonCheckIcon("pi pi-check");

        // Mensagem feedback
        toast.current.show(toastMessage);
    }

    return(
        <>
            <Panel title="Consultar endereço">
                <form onSubmit={handleSubmitForm}>
                    <div className="md:inline-flex">
                        <div className="field block">
                            <label htmlFor="uf" className="block" >UF</label>
                            <Dropdown className="mr-3" id="uf" placeholder="Ex.: RJ"
                                    value={selectedUF}
                                    options={ufs}
                                    required
                                    onChange={(e) => setSelectedUF(e.target.value)}/>
                        </div>

                        <div className="field block">
                            <label htmlFor="cidade" className="block">Cidade</label>
                            <InputText className="mr-3" id="cidade" placeholder="Ex.: Rio de Janeiro" 
                                    value={city}
                                    required
                                    minLength={3}
                                    onChange={(e) => setCity(e.target.value)}/>
                        </div>
                        <div className="field block">
                            <label htmlFor="logradouro" className="block">Logradouro</label>
                            <InputText className="mr-3" id="logradouro" placeholder="Ex.: Rua do Rocha" 
                                    value={publicPlace}
                                    required
                                    minLength={3}
                                    onChange={(e) => setPublicPlace(e.target.value)}/>
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
                <DataTableCep value = {info} sortable={true} paginator={true}/>
            </Panel>
            <Toast ref={toast} className="primary"/>
        </>
    );
}