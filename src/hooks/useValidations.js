import { useState } from "react";

export const useValidations = () => {

    const [errors, setErrors] = useState({  });

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
        if(userInfo.phone_number !== 10 || phoneNumberRegex.test(userInfo.phone_number.replace('+', '')) || userInfo.phone_number.slice(0, 1) !== '+') userErros.phoneNumberError = true;
        
    }

    return {

    };
};
