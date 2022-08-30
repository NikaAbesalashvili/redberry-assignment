import './Input.scss';

const Input = ({
    labelText,
    labelForInputId,
    inputPlaceholder,
    inputName,
    inputValue,
    inputHint = null,
    handleInputChange,
    inputType = 'text',
    min = null
}) => {
    return (
        <>
            <label className='input-label' htmlFor={labelForInputId} >{labelText}</label>
            <input
                className={`input ${inputType === 'number' && 'no-arrows'}`}
                type={inputType}
                placeholder={inputPlaceholder}
                name={inputName}
                value={inputValue}
                onChange={handleInputChange}
                min={min && min}
                
            />
            {inputHint && <p className='input-hint' >{inputHint}</p>}
        </>
    );
};

export default Input;
