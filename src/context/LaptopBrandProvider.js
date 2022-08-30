import React, { useState, useContext } from 'react';
import { fetchBrands } from '../api';

const LaptopBrandContext = React.createContext();

export const useLaptopBrands = () => {
    return useContext(LaptopBrandContext);
};

export const LaptopBrandProvider = ({ children }) => {
    
    const [laptopBrands, setLaptopBrands] = useState([]);

    const loadLaptopBrands = async () => {
        const apiData = await fetchBrands();
        const { data } = apiData.data;
        setLaptopBrands(data);
    };
    
    return (
        <LaptopBrandContext.Provider value={{ laptopBrands, loadLaptopBrands }} >
            { children }
        </LaptopBrandContext.Provider>
    );
};
