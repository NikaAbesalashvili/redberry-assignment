import './Button.scss';

const Button = ({
    buttonSize,
    buttonText,
    buttonType,
    clickFunctionallity,
}) => {
    return (
        <button
            className={`button ${buttonSize ? buttonSize : ''}`}
            onClick={clickFunctionallity}
            type={buttonType}
        >
            {buttonText}
        </button>
    );
};

export default Button;
