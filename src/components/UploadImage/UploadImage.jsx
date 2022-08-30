import { AiFillCamera } from 'react-icons/ai';
import './UploadImage.scss';

const UploadImage = ({ handleLaptopImageupload, laptopImage }) => {
    return (
        <div className={`upload-image-container ${!laptopImage && 'vertical-padding'}`}>
            {laptopImage ? (
                <img src="laptop-image" alt="Laptop Image" />
            ) : (

                <label htmlFor='laptop-image-input' >
                    <button className="upload-image-button">
                        <AiFillCamera/>
                    </button>
                    <h2 className='upload-image-text' >ლეპტოპის ფოტოს ატვირთვა</h2>
                    <input
                        className='laptop-image-input'
                        type="file"
                        name='laptop_image'
                        id='laptop-image-input'
                        onChange={handleLaptopImageupload}
                    />
                </label>
                
            )}
        </div>
    );
};

export default UploadImage;
