import axios from "axios";

const API = axios.create({ baseURL: 'https://pcfy.redberryinternship.ge/api' });

const fetchTeams = () =>  API.get('/teams');
const fetchBrands = () => API.get('/brands');
const fetchCPUs = () => API.get('/cpus');
const fetchPositions = () => API.get('/positions');

// Laptops endpoints
export const createLaptop = (laptopData) => API.post('/laptop/create', laptopData);
export const fetchAllLAptops = () => API.get('/laptops');
export const fetchLaptop = (laptopID) => API.get(`/laptop/${laptopID}`);
