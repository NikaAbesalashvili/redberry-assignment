import React, { useState, useContext, useEffect } from "react";
import { fetchCPUs } from '../api';

const LaptopCPUsContext = React.createContext();

export const useLaptopCPUs = () => {
    return useContext(LaptopCPUsContext);
};

export const LaptopCPUsProvider = ({ children }) => {

    const [laptopCPUs, setLaptopCPUS] = useState([]);

    useEffect(() => {
        loadLaptopCPUs();
    }, [])

    const loadLaptopCPUs = async () => {
        const apiData = await fetchCPUs();
        const { data } = apiData.data;
        setLaptopCPUS(data);
    };

    return (
        <LaptopCPUsContext.Provider value={{ laptopCPUs }} >
            { children }
        </LaptopCPUsContext.Provider>
    );
};
