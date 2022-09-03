import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecordData, useTeams, usePositions, useLaptopBrands, useLaptopCPUs } from '../context';
import { extractLaptopInfo, extractUserInfo } from '../helpers';
import { useValidations } from './useValidations';
import { createLaptop } from '../api';

export const useAddRecord = () => {

    const [success, setSuccess] = useState(false);
    const [optionsFilter, setOptionsFilter] = useState('');

    const { recordData } = useRecordData();
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

    const handleAddRecordStepChange = () => {
        if(addRecordStep === 1) {
            const userInfo = extractUserInfo(recordData);
            validateUserInfo(userInfo);
        } else if(addRecordStep === 2) {
            const laptopInfo = extractLaptopInfo(recordData);
            validateLaptopInfo(laptopInfo);
        }
    };

    const addLaptop = async () => {
        const response = await createLaptop(recordData);
        const { status } = response;
        if(status === 200) {
            setSuccess((prevState) => !prevState);
            localStorage.clear();
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addLaptop();
    };

    const chooseOptionsFilter = (choosedFilter) => {
        setOptionsFilter(choosedFilter);
    };

    return {
        addRecordStep,
        recordData,
        teams,
        positions,
        laptopBrands,
        laptopCPUs,
        errors,
        laptopErrors,
        buttonType,
        success,
        optionsFilter,
        handleBackButtonClick,
        handleAddRecordStepChange,
        handleFormSubmit,
        chooseOptionsFilter,
    };
};