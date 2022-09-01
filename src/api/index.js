import axios from "axios";

const API = axios.create({ baseURL: 'https://pcfy.redberryinternship.ge/api', });

export const fetchTeams = () =>  API.get('/teams');
export const fetchBrands = () => API.get('/brands');
export const fetchCPUs = () => API.get('/cpus');
export const fetchPositions = () => API.get('/positions');

// Laptops endpoints
export const createLaptop = (laptopData) => API.post('/laptop/create', laptopData);
export const fetchAllLAptops = () => API.get('/laptops');
export const fetchLaptop = (laptopID) => API.get(`/laptop/${laptopID}`);
