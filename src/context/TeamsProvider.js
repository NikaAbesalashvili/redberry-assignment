import React, { useState, useContext, useEffect } from "react";
import { fetchTeams } from '../api';

const TeamsContext = React.createContext();

export const useTeams = () => {
    return useContext(TeamsContext);
};

export const TeamsProvider = ({ children }) => {

    const [teams, setTeams] = useState([]);
    
    useEffect(() => {
        loadTeams();
    }, [])

    const loadTeams = async () => {
        const apiData = await fetchTeams();
        const { data } = apiData.data;
        setTeams(data);
    };

    return (
        <TeamsContext.Provider value={{ teams, loadTeams }} >
            { children }
        </TeamsContext.Provider>
    );
};
