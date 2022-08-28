import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTeams, usePositions } from '../context';

const TOKEN = process.env.REACT_APP_API_TOKEN;

export const useAddRecord = () => {

    const [addRecordStep, setAddRecordStep] = useState(1);

    const [recordData, setRecordData] = useState({
        name: '',
        surname: '',
        team_id: '',
        position_id: '',
        phone_number: '',
        email: '',
        token: TOKEN,
        laptop_name: '',
        laptop_image: '',
        laptop_brand_id: '',
        laptop_cpu: '',
        laptop_cpu_cores: '',
        laptop_cpu_threads: '',
        laptop_ram: '',
        laptop_hard_drive_type: '',
        laptop_state: '',
        laptop_purchase_date: '',
        laptop_price: '',
    });

    const { teams, loadTeams } = useTeams();
    const { positions, loadPositions } = usePositions();
    const navigate = useNavigate()

    useEffect(() => {
        loadTeams();
        loadPositions();
    }, []);

    const handleBackButtonClick = () => {
        if(addRecordStep === 1) navigate('/')
        else setAddRecordStep((prevStep) => prevStep - 1);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRecordData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (name, value) => {
        setRecordData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    };

    return {
        addRecordStep,
        recordData,
        teams,
        positions,
        handleBackButtonClick,
        handleInputChange,
        handleSelectChange,
    };
};