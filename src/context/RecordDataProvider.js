import React, { useState, useContext } from 'react';
import { updateLocalStorage, convertImageToBase64 } from '../helpers';

const TOKEN = process.env.REACT_APP_API_TOKEN;
const LOCAL_STORAGE_PREFIX = 'redberry-assignment';

const initialRecordData = {
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
};

const RecordDataContext = React.createContext();

export const useRecordData = () => {
    return useContext(RecordDataContext);
};

export const RecordDataProvider = ({ children }) => {
    
    const [imageToDisplay, setImageToDisplay] = useState(''); 
    const [recordData, setRecordData] = useState(() => {
        const localStorageData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PREFIX));
        if(localStorageData) {
            return localStorageData;
        } else {
            localStorage.setItem(LOCAL_STORAGE_PREFIX, JSON.stringify(initialRecordData));
            return initialRecordData;
        }
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRecordData((prevData) => {
            updateLocalStorage(name, value);
            return {
                ...prevData,
                [name]: value
            }
        });
    };

    const handleCustomSelectChange = (name, value) => {
        setRecordData((prevData) => {
            updateLocalStorage(name, value);
            return {
                ...prevData,
                [name]: value
            }
        })
    };

    const handleLaptopImageUpload = async (event) => {
        const image = event.target.files[0];
        const imageBase64 = await convertImageToBase64(image);

        setImageToDisplay(imageBase64);
        

        setRecordData((prevData) => ({
            ...prevData,
            laptop_image: imageBase64,
        }));
    };
    
    return (
        <RecordDataContext.Provider
            value={{
                recordData,
                imageToDisplay,
                handleChange,
                handleCustomSelectChange,
                handleLaptopImageUpload,
            }}
        >
            { children }
        </RecordDataContext.Provider>
    );
};
