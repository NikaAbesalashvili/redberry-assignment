import './Button.scss';

const Button = ({
    buttonText,
    buttonType,
    clickFunctionallity,
}) => {
    return (
        <button
            className='button'
            onClick={clickFunctionallity}
            type={buttonType}
        >
            {buttonText}
        </button>
    );
};

export default Button;
