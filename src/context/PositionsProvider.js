import React, { useState, useContext, useEffect } from "react";
import { fetchPositions } from '../api';

const PositionsContext = React.createContext();

export const usePositions = () => {
    return useContext(PositionsContext);
};

export const PositionsProvider = ({ children }) => {

    const [positions, setPositions] = useState([]);

    useEffect(() => {
        loadPositions();
    }, [])

    const loadPositions = async () => {
        const apiData = await fetchPositions();
        const { data } = apiData.data;
        setPositions(data);
    };

    return (
        <PositionsContext.Provider value={{ positions }} >
            { children }
        </PositionsContext.Provider>
    );
};
