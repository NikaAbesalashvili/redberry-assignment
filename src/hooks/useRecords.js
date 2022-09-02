import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllLAptops } from '../api';

export const useRecords = () => {

    const [records, setRecords] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadLaptops();
    }, []);

    const handleBackButton = () => {
        navigate('/');
    };

    const loadLaptops = async () => {
        const apiData = await fetchAllLAptops();
        const { data } = apiData.data;
        setRecords(data);
    };

    return {
        records,
        handleBackButton,
    };
};