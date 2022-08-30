import cameraIcon from '../../assets/camera-icon.png'
import './UploadImage.scss';

const UploadImage = ({ handleLaptopImageupload, laptopImage }) => {
    return (
        <div className={`upload-image-container ${!laptopImage && 'vertical-padding'}`}>
            {laptopImage ? (
                <img className='laptop-image' src={laptopImage} alt="Laptop Image" />
            ) : (

                <label htmlFor='laptop-image-input' >
                    <img className='camera-icon' src={cameraIcon} alt="Camera Icon" />
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
