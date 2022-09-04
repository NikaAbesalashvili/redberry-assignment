import { Link } from 'react-router-dom';

import './Success.scss';
import successImage from '../../assets/success.png';

const Success = () => {
    return (
        <div className="success-component">
            <div className='success' >
                <img className='success-image' src={successImage} alt="Success" />
                <h2 className='success-text' >ჩანაწერი დამატებულია</h2>
                <div className="links">

                    <Link className='records-link' to='records'>
                        სიაში გადაყვანა
                    </Link>
                    <Link className='landing-link' to='/' >
                        მთავარი
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Success;
