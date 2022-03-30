// Hooks
import { useState, useRef } from 'react';

// Primereact
import { InputMask } from "primereact/inputmask";
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

// ------------------------------------------------------- \\

export default function ConsultarCep(){

    const [cep, setCep] = useState(""); // CEP input
    
    const [buttonLoading, setButtonLoading] = useState(false); // Button submit
    const [buttonCheckIcon, setButtonCheckIcon] = useState("pi pi-check");

    const [info, setInfo] = useState<Array<Data>>([]); // Infos da tabela
    const [historic, setHistoric] = useState(new Map()); // Histórico de ceps pesquisados

    const cepService = new CepService();

    const toast: any = useRef(null);

    const onChangeCep = (e: any) => setCep(e.target.value);

    const handleSubmitForm = async(e: any) => {
        e.preventDefault();
  
        setButtonLoading(true);
        setButtonCheckIcon("");
        
        // A princípio a requisição deu certo
        let toastMessage = {
            severity: "success", 
            summary:  "Requisição concluída", 
            detail:   "CEP buscado com sucesso"
        }

        const cepWithoutMask = cep.replace("-", "").replace(".", "");

        // Verifica se está no mapa
        let infoStatus: InfoStatus = historic.get(cepWithoutMask);
        if(infoStatus){
            if(infoStatus.statusErro){
                toastMessage = {
                    severity: "warn",
                    summary: "Erro na requisição",
                    detail: "CEP consultado não foi encontrado na base de dados"
                }
            }
        }else{ // Se não está no mapa, faz nova requisição
            
            try{
                const response = await cepService.getCep(cepWithoutMask);   
                // console.log(response);
                if(response.data.erro){
                    infoStatus = {
                        info: [],
                        statusErro: true
                    };
    
                    toastMessage = {
                        severity: "warn",
                        summary: "Erro na requisição",
                        detail: "CEP consultado não foi encontrado na base de dados"
                    }
                }else{
                    infoStatus = {
                        info: [response.data],
                        statusErro: false
                    };
                }

                // Atualiza o mapa
                const _historic = new Map(historic);
                _historic.set(cepWithoutMask, infoStatus);
                setHistoric(_historic);
            }catch(error:any){

                toastMessage = {
                    severity: "error",
                    summary: "Erro na requisição",
                    detail: "Falha ao tentar buscar CEP"
                }
    
                infoStatus = {
                    info: [],
                    statusErro: true
                };
            }
        }   

        setInfo(infoStatus.info);

        setButtonLoading(false);
        setButtonCheckIcon("pi pi-check");

        // Mensagem de feedback
        toast.current.show(toastMessage);
    }

    return (
        <>
            <Panel title="Consultar cep">
                <form onSubmit={handleSubmitForm} >
                    <div className='sm:inline-flex'> 
                        <div className='field'>
                            <label htmlFor='cep' className='block'>CEP</label>
                            <span className = "p-input-icon-left block w-10rem">    
                                <i className = "pi pi-search"/>
                                <InputMask className='p-inputtext inputfield w-full'
                                    id = "cep"
                                    value={cep}
                                    placeholder = "99.999-999"
                                    required
                                    mask='99.999-999'
                                    onChange={onChangeCep}
                                />
                            </span>
                        </div>
                        <div className='flex align-content-end flex-wrap'>
                            <Button className = "p-button  align-self-center mb-4 mt-3 block sm:ml-3 sm:mt-0"
                                label = 'Enviar'
                                icon  = {buttonCheckIcon}
                                loading = {buttonLoading}
                                type='submit'
                            />
                        </div>
                    </div>
                </form>
                <DataTableCep value = {info}/>
            </Panel>            
            <Toast ref={toast} className="primary"/>
        </>
    );
}