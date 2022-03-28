import axios, { AxiosRequestConfig } from 'axios';

class CepService{
    async getAdress(cep:string) {

        const url = `https://viacep.com.br/ws/${cep}/json`;
        let options: AxiosRequestConfig = {
            method: 'get',
            url: url
        };

        let response = await axios(options);
        return response.data;
    }

//     async function getCep(params:) {
        
//     }
}

export default CepService;