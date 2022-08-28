import './Input.scss';

const Input = ({
    labelText,
    labelForInputId,
    inputPlaceholder,
    inputName,
    inputValue,
    inputHint,
    handleInputChange,
    inputType = 'Text',
}) => {
    return (
        <>
            <label className='input-label' htmlFor={labelForInputId} >{labelText}</label>
            <input
                className='input'
                type={inputType}
                placeholder={inputPlaceholder}
                name={inputName}
                value={inputValue}
                onChange={handleInputChange}
            />
            <p className='input-hint' >{inputHint}</p>
        </>
    );
};

export default Input;
