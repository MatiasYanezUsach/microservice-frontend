import axios from 'axios';

class SolicitudService {
    IngresarSolicitud(solicitud) {
        return axios.post('http://localhost:8035/solicitud/subirSolicitud', solicitud)
    }
}

export default new SolicitudService();