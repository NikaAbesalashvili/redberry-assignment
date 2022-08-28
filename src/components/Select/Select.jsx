import { useSelect } from '../../hooks';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import './Select.scss';

const Select = ({
    options,
    handleSelectChange,
    selectedOption,
    name,
}) => {

    const {
        newSelectedOption,
        dropdownExpanded,
        handleDropdownButton,
        handleSelect,
    } = useSelect();

    return (
        <div className='dropdown' >

            <div className='main-area' >
                <h2 className='selected-option' >
                    {newSelectedOption ? newSelectedOption : selectedOption}
                </h2>
                <button
                    className='dropdown-button'
                    onClick={handleDropdownButton}
                    type='button'
                >
                    {dropdownExpanded ? (
                        <FaAngleUp />
                    ) : (
                        <FaAngleDown />
                    )}
                </button>
            </div>
            
            {dropdownExpanded && (
                <div className="container">
                    <div className="expanded">
                        {options.map((option) => (
                            <h2
                                className='team-option'
                                key={option.id}
                                onClick={() => handleSelect(option.id, option.name, name, handleSelectChange)}
                            >
                                {option.name}
                            </h2>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default Select;
