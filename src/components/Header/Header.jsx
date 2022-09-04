import { FaAngleLeft } from 'react-icons/fa'
import './Header.scss';

const Header = ({
    headerStyle = null,
    headerText,
    headerStep = null,
    backButtonFunctionallity,
    hasNavigation = false,
    onUserInfo,
    onLaptopInfo,
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
            <div className={`header-texts ${hasNavigation ? 'hidden' : ''}`} >
                <h1 className='header-text' >{headerText}</h1>
                {headerStep && <h2 className='step-text' >{headerStep}/2</h2>}
            </div>
            {hasNavigation && (

                <div className='controller' >
                    <span
                        className='controller-span'
                        onClick={onUserInfo}
                    >
                        თანამშრომლის ინფო
                    </span>
                    <span
                        className='controller-span'
                        onClick={onLaptopInfo}
                    >
                        ლეპტოპის მახასიათებლები
                    </span>
                </div>

            )}
        </header>
    );
};

export default Header;
