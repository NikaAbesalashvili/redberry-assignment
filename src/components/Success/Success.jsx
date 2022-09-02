import { Link } from 'react-router-dom';

import './Success.scss';
import successImage from '../../assets/success.png';

const Success = () => {
    return (
        <div className='success' >
            <img className='success-image' src={successImage} alt="Success" />
            <div className="links">

                <Link className='records-link' to='records'>
                    სიაში გადაყვანა
                </Link>
                <Link className='landing-link' to='/' >
                    მთავარი
                </Link>
            </div>
        </div>
    );
};

export default Success;
