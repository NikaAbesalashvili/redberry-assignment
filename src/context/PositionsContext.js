import React, { useState, useContext } from "react";
import { fetchPositions } from '../api';

const PositionsContext = React.createContext();

export const usePositions = () => {
    return useContext(PositionsContext);
};

export const PositionsProvider = ({ children }) => {

    const [positions, setPositions] = useState([]);

    const loadPositions = async () => {
        const apiData = await fetchPositions();
        const { data } = apiData.data;
        setPositions(data);
    };

    return (
        <PositionsContext.Provider value={{ positions, loadPositions }} >
            { children }
        </PositionsContext.Provider>
    );
};
