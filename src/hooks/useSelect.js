import { useState } from 'react';

export const useSelect = () => {
    
    const [dropdownExpanded, setDropdownExpanded] = useState(false);
    const [newSelectedOption, setNewSelectedOption] = useState('')

    const handleDropdownButton = () => {
        setDropdownExpanded((prevState) => !prevState);
    };

    const handleSelect = (optionId, optionValue, name, handleSelectChange) => {
        setDropdownExpanded((prevState) => !prevState);
        setNewSelectedOption(optionValue);
        handleSelectChange(name, optionId);
    };
  
    return {
        dropdownExpanded,
        newSelectedOption,
        handleDropdownButton,
        handleSelect,
    };
};
