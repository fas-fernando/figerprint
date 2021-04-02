import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export const fetchAllPatients = () => client.get('/');
export const storePatient = (data) => client.post('/', data);
export const updatePatient = (data) => client.put('/', data);
export const deletePatient = (id) => client.delete(`/${id}`);

export default {
    fetchAllPatients,
    storePatient,
    updatePatient,
    deletePatient,
};