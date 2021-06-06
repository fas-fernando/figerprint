import { http } from "./config";

export default {
    listar: () => {
        return http.get('/');
    },

    salvar: (paciente) => {
        return http.post('paciente', paciente);
    },

    apagar: (paciente) => {
        return http.delete('${paciente.id}', { data: paciente });
    }
}