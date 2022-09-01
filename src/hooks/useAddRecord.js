import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTeams, usePositions, useLaptopBrands, useLaptopCPUs } from '../context';
import { convertImageToBase64, extractLaptopInfo, extractUserInfo } from '../helpers';
import { useValidations } from './useValidations';
import { createLaptop } from '../api';

const TOKEN = process.env.REACT_APP_API_TOKEN;

export const useAddRecord = () => {

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
    const [imageToDisplay, setImageToDisplay] = useState(''); 

    const { teams, loadTeams } = useTeams();
    const { positions, loadPositions } = usePositions();
    const { laptopBrands, loadLaptopBrands } = useLaptopBrands() 
    const { laptopCPUs, loadLaptopCPUs } = useLaptopCPUs();

    const {
        errors,
        laptopErrors,
        addRecordStep,
        buttonType,
        validateUserInfo,
        validateLaptopInfo,
        decreaseStep,
    } = useValidations();

    const navigate = useNavigate()

    useEffect(() => {
        loadTeams();
        loadPositions();
        loadLaptopBrands();
        loadLaptopCPUs();
    }, []);

    const handleBackButtonClick = () => {
        if(addRecordStep === 1) navigate('/')
        else decreaseStep()
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
        if(addRecordStep === 1) {
            const userInfo = extractUserInfo(recordData);
            validateUserInfo(userInfo);
        } else if(addRecordStep === 2) {
            const laptopInfo = extractLaptopInfo(recordData);
            validateLaptopInfo(laptopInfo);
        }
    };

    const handleLaptopImageUpload = async (event) => {
        const image = event.target.files[0];
        const imageBase64 = await convertImageToBase64(image);

        setImageToDisplay(imageBase64);
        

        setRecordData((prevData) => ({
            ...prevData,
            laptop_image: `https://pcfy.redberryinternship.ge/storage/images/${imageBase64}`
        }));
    };

    const addLaptop = async () => {
        const response = await createLaptop(recordData);
        console.log(response);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addLaptop();
    };

    return {
        addRecordStep,
        imageToDisplay,
        recordData,
        teams,
        positions,
        laptopBrands,
        laptopCPUs,
        errors,
        laptopErrors,
        buttonType,
        handleBackButtonClick,
        handleChange,
        handleSelectChange,
        handleAddRecordStepChange,
        handleAddRecordStepChange,
        handleLaptopImageUpload,
        handleFormSubmit,
    };
};