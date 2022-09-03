import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRecord } from '../api';

export const useRecord = () => {

    const [recordData, setRecordData] = useState({  });
    const { recordId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadRecord();
    }, [])

    const loadRecord = async () => {
        const apiData = await fetchRecord(recordId);
        const { data } = apiData.data;
        setRecordData(data);
    };

    const handleBackButton = () => {
        navigate('/records');
    };

    return {
        recordData,
        handleBackButton,
    };
};
