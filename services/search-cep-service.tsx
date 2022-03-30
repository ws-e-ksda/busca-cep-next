// Axios
import axios from 'axios';

// Models
import { DataAdress } from '../models/data-endereco';

class CepService{
    
    async getCep(cep:string) {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
        return response;
    
    }

    async getAdress(params: DataAdress) {
        const response = axios.get(`https://viacep.com.br/ws/${params.uf}/${params.city}/${params.publicPlace}/json`);
        return response;
    }
}

export default CepService;