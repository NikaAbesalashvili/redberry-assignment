import { FaAngleLeft } from 'react-icons/fa'
import './Header.scss';

const Header = ({
    headerStyle = null,
    headerText,
    headerStep = null,
    backButtonFunctionallity,
}) => {
    return (
        <header
            className={headerStyle && 'grey'}
        >
            <button
                className='back-button'
                onClick={backButtonFunctionallity}
            >
                <FaAngleLeft />
            </button>
            <div className="header-texts">
                <h1 className='header-text' >{headerText}</h1>
                {headerStep && <h2 className='step-text' >{headerStep}/2</h2>}
            </div>
        </header>
    );
};

export default Header;
