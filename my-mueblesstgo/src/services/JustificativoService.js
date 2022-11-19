import axios from 'axios';

const JUSTIFICATIVO_API_URL = "http://localhost:8080/justificativo/subirJustificativo";

class JustificativoService{

    createJustificativo(justificativo){
        return axios.post(JUSTIFICATIVO_API_URL, justificativo);
    }
}

export default new JustificativoService()