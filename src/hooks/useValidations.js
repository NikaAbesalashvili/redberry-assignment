import { useState } from "react";

export const useValidations = () => {

    const [errors, setErrors] = useState({  });
    const [laptopErrors, setLaptopErrors] = useState({  });
    const [addRecordStep, setAddRecordStep] = useState(1);
    const [buttonType, setButtonType] = useState('button');

    const validateUserInfo = (userInfo) => {
        const userErros = {  };
        const nameSurnameRegex = /^[ა-ჰ]+$/;
        const emailRegex = /@redberry.ge$/;
        const phoneNumberRegex = /^[0-9]+$/;

        if(userInfo.name.length < 2 || !nameSurnameRegex.test(userInfo.name)) userErros.nameError = true;
        if(userInfo.surname.length < 2 || !nameSurnameRegex.test(userInfo.surname)) userErros.surnameError = true;
        if(!userInfo.team_id) userErros.teamError = true;
        if(!userInfo.position_id) userErros.positionError = true;
        if(!emailRegex.test(userInfo.email)) userErros.emailError = true;
        if(
            userInfo.phone_number.length !== 13 ||
            !phoneNumberRegex.test(userInfo.phone_number.replace('+', '')) || 
            !userInfo.phone_number.startsWith('+995')
        ) userErros.phoneNumberError = true;
        
        if(Object.keys(userErros).length === 0) setAddRecordStep((prevStep) => prevStep + 1);

        setErrors(userErros);
    };

    const validateLaptopInfo = (laptopInfo) => {
        const errors = {  };
        const regexForLaptopName = /^[a-zA-Z0-9!@#$%^&*()_+=]*$/;
        const numbersRegex = /^[0-9]+$/;

        if(!laptopInfo.laptop_name || !regexForLaptopName.test(laptopInfo.laptop_name)) errors.laptopNameError = true;
        if(!laptopInfo.laptop_image) errors.laptopImageError = true;
        if(!laptopInfo.laptop_brand_id) errors.laptopBrandError = true;
        if(!laptopInfo.laptop_cpu) errors.laptopCPUError = true;
        if(
            !laptopInfo.laptop_cpu_cores ||
            !numbersRegex.test(laptopInfo.laptop_cpu_cores) ||
            parseInt(laptopInfo.laptop_cpu_cores) < 1
        
        ) errors.laptopCPUCoresError = true;
        if(
            !laptopInfo.laptop_cpu_threads ||
            !numbersRegex.test(laptopInfo.laptop_cpu_threads) ||
            parseInt(laptopInfo.laptop_cpu_threads) < 1
        
        ) errors.laptopCPUThreadsError = true;
        if(
            !laptopInfo.laptop_ram || 
            parseInt(laptopInfo.laptop_ram) < 1 ||
            !numbersRegex.test(laptopInfo.laptop_ram)
        ) errors.laptopRAMError = true;
        if(!laptopInfo.laptop_hard_drive_type) errors.laptopHarddriveError = true;
        if(!laptopInfo.laptop_state) errors.laptopStateError = true;
        if(
            !laptopInfo.laptop_price ||
            parseInt(laptopInfo.laptop_price) < 1 ||
            !numbersRegex.test(laptopInfo.laptop_price)
        ) errors.laptopPriceError = true;

        if(Object.keys(errors).length === 0) setButtonType('submit');

        setLaptopErrors(errors);
    };

    const decreaseStep = () => {
        setAddRecordStep((prevStep) => {
            if(prevStep === 2) return 1;
            return
        });
    };

    return {
        errors,
        laptopErrors,
        addRecordStep,
        buttonType,
        validateUserInfo,
        validateLaptopInfo,
        decreaseStep,
    };
};
