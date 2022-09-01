import { useState } from 'react';

export const useSelect = () => {
    
    const [dropdownExpanded, setDropdownExpanded] = useState(false);
    const [newSelectedOption, setNewSelectedOption] = useState('')

    const handleDropDown = () => {
        setDropdownExpanded((prevState) => !prevState);
    };

    const handleSelect = (optionId, selectValue = null, optionValue, name, handleSelectChange) => {
        setDropdownExpanded((prevState) => !prevState);
        setNewSelectedOption(optionValue);
        if(name === 'laptop_cpu') handleSelectChange(name, selectValue);
        else handleSelectChange(name, optionId);
    };
  
    return {
        dropdownExpanded,
        newSelectedOption,
        handleDropDown,
        handleSelect,
    };
};
