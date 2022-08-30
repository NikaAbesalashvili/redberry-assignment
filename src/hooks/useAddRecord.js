import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTeams, usePositions, useLaptopBrands, useLaptopCPUs } from '../context';
import { convertImageToBase64 } from '../helpers';

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
    const { laptopBrands, loadLaptopBrands } = useLaptopBrands() 
    const { laptopCPUs, loadLaptopCPUs } = useLaptopCPUs();

    const navigate = useNavigate()

    useEffect(() => {
        loadTeams();
        loadPositions();
        loadLaptopBrands();
        loadLaptopCPUs();
    }, []);

    const handleBackButtonClick = () => {
        if(addRecordStep === 1) navigate('/')
        else setAddRecordStep((prevStep) => prevStep - 1);
    };

    const handleChange = (event) => {
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

    const handleAddRecordStepChange = () => {
        if(addRecordStep === 1) setAddRecordStep((prevStep) => prevStep + 1);
    };

    const handleLaptopImageUpload = async (event) => {
        const image = event.target.files[0];
        const imageBase64 = await convertImageToBase64(image);

        setRecordData((prevData) => ({
            ...prevData,
            laptop_image: imageBase64
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('FORM SUBMITED');
    };

    return {
        addRecordStep,
        recordData,
        teams,
        positions,
        laptopBrands,
        laptopCPUs,
        handleBackButtonClick,
        handleChange,
        handleSelectChange,
        handleAddRecordStepChange,
        handleAddRecordStepChange,
        handleLaptopImageUpload,
        handleFormSubmit,
    };
};