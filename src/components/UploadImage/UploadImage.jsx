import cameraIcon from '../../assets/camera-icon.png'
import excIcon from '../../assets/exc-icon.png';
import './UploadImage.scss';

const UploadImage = ({
    handleLaptopImageupload,
    laptopImage,
    error,
}) => {
    return (
        <div
            className={`upload-image-container ${!laptopImage && 'vertical-padding'} ${error && 'image-error'}`}
        >
            {laptopImage ? (
                <img className='laptop-image' src={laptopImage} alt="Laptop Image" />
            ) : (

                <label htmlFor='laptop-image-input' >
                    <img className='camera-icon' src={cameraIcon} alt="Camera Icon" />
                    <h2 className={`upload-image-text ${error && 'image-text-error'}`} >ლეპტოპის ფოტოს ატვირთვა</h2>
                    <input
                        className='laptop-image-input'
                        type="file"
                        name='laptop_image'
                        id='laptop-image-input'
                        onChange={handleLaptopImageupload}
                    />
                    {error && <img className='exc-icon' src={excIcon}/>}
                </label>

            )}
        </div>
    );
};

export default UploadImage;
