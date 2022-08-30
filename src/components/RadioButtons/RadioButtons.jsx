import './RadioButtons.scss';

const RadioButtons = ({
    radioGroupText,
    firstValue,
    secondValue,
    firstOption,
    secondOption,
    inputName,
    handleRadioButtonChange,
}) => {
    return (
        <div className='radio-buttons' >
            <h2 className="radio-group-text">{radioGroupText}</h2>
            <div className="radio-group" onChange={handleRadioButtonChange} >

                <input
                    className='radio-input'
                    type='radio'
                    id={firstValue}
                    name={inputName}
                    value={firstValue}
                />
                <label className='radio-label' htmlFor={firstValue} >{firstOption}</label>
                <input
                    className='radio-input'
                    type='radio'
                    id={secondValue}
                    name={inputName}
                    value={secondValue}
                />
                <label className='radio-label' htmlFor={secondValue} >{secondOption}</label>
            
            </div>
        </div>
    );
};

export default RadioButtons;
