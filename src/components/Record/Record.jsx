import { Link } from 'react-router-dom';
import './Record.scss';

const Record = ({
    laptopImage,
    laptopName,
    laptopId,
    username,
    userSurname
}) => {
    return (
        <div className="record">
            <img className='laptop-image' src={`https://pcfy.redberryinternship.ge/${laptopImage}`} alt="Laptop Image" />
            <div className="info">
                <h2 className='user-name-surname' >{username} {userSurname}</h2>
                <h3 className='laptop-name' >{laptopName}</h3>
                <Link className='see-more-link' to={`/records/${laptopId}`} >
                    მეტის ნახვა
                </Link>
            </div>
        </div>
    );
};

export default Record;
