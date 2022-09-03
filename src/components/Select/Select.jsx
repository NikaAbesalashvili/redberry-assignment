import { useSelect } from '../../hooks';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import './Select.scss';

const Select = ({
    options,
    handleSelectChange,
    selectedOption,
    name,
    optionsFilter = null,
    chooseOptionsFilter = null,
    error = null,
}) => {

    const {
        newSelectedOption,
        dropdownExpanded,
        handleDropDown,
        handleSelect,
    } = useSelect();

    return (
        <div className={`dropdown ${error && 'red-border'}`} >

            <div className='main-area' >
                <h2 className='selected-option' >
                    {newSelectedOption ? newSelectedOption : selectedOption}
                </h2>
                <button
                    className='dropdown-button'
                    onClick={handleDropDown}
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
                            (optionsFilter ? (
                                optionsFilter === option?.team_id && (
                                    <h2
                                        className='team-option'
                                        key={option.id}
                                        onClick={() => handleSelect(option.id, option.name, option.name, name, handleSelectChange)}
                                    >
                                        {option.name}
                                    </h2>
                                )
                            ) : (
                                <h2
                                    className='team-option'
                                    key={option.id}
                                    onClick={() => handleSelect(option.id, option.name, option.name, name, handleSelectChange, chooseOptionsFilter)}
                                >
                                    {option.name}
                                </h2>
                            ))
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default Select;
