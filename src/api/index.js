import axios from "axios";

const API = axios.create({ baseURL: 'https://pcfy.redberryinternship.ge/api', });
const TOKEN = process.env.REACT_APP_API_TOKEN;

export const fetchTeams = () =>  API.get('/teams');
export const fetchBrands = () => API.get('/brands');
export const fetchCPUs = () => API.get('/cpus');
export const fetchPositions = () => API.get('/positions');

// Laptops endpoints
export const createLaptop = (laptopData) => API.post('/laptop/create', laptopData, {
    headers: {
        'Content-Type': 'multipart/form-data' 
    }
});
export const fetchAllLAptops = () => API.get(`/laptops?token=${TOKEN}`);
export const fetchRecord = (recordID) => API.get(`/laptop/${recordID}?token=${TOKEN}`);
