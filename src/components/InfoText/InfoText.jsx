import './InfoText.scss';

const InfoText = ({
    helperText,
    mainText,
}) => {
    return (
        <div className='info-text' >
            <h2 className='helper-text' >
                {helperText}
            </h2>
            <span className='main-text' >
                {mainText}
            </span>
        </div>
    );
};


export default InfoText;
