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
    min = null,
    error = null,
}) => {
    return (
        <div className='input-component'>
            <label
                className={`input-label ${error ? 'error' : ''}`}
                htmlFor={labelForInputId}
            >
                    {labelText}
            </label>
            <input
                className={`input ${inputType === 'number' ? 'no-arrows' : ''} ${error ? 'error-input' : ''}`}
                type={inputType}
                placeholder={inputPlaceholder}
                name={inputName}
                value={inputValue}
                onChange={handleInputChange}
                min={min && min}
                
            />
            {inputHint && <p className={`input-hint ${error ? 'red-hint' : ''}`} >{inputHint}</p>}
        </div>
    );
};

export default Input;
