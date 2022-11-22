import axios from 'axios';

class JustificativoService {
    IngresarJustificativo(justificativo) {
        return axios.post('http://localhost:8035/justificativo/subirJustificativo', justificativo)
    }
}

export default new JustificativoService();