// Axios
import axios, { AxiosRequestConfig } from 'axios';

// Models
import { DataAdress } from '../models/data-endereco';

class CepService{
    prefix: string = "https://viacep.com.br/ws";
    async getAdress(cep:string) {

        const url = `${this.prefix}/${cep}/json`;
        let options: AxiosRequestConfig = {
            method: 'get',
            url: url
        };

        let response:any = {};
        await axios(options)
        .then((res) => {
            response = res.data;
        })
        .catch(() => {response.badRequest = true});

        return response;
    }

    async getCep(params: DataAdress) {

        const url =  `${this.prefix}/${params.uf}/${params.city}/${params.publicPlace}/json`;
        let options: AxiosRequestConfig = {
            method: 'get',
            url: url
        }
        
        let response:any = {};
        await axios(options)
        .then((res) => {
            response = res.data;
        })
        .catch(() => {response.badRequest = true});

        return response;
    }
}

export default CepService;