import Button from '../Button/Button';
import { useRecordData } from '../../context';
import cameraIcon from '../../assets/camera-icon.png'
import excIcon from '../../assets/exc-icon.png';
import doneIcon from '../../assets/done-icon.png';
import './UploadImage.scss';

const UploadImage = ({
    handleLaptopImageupload,
    laptopImage,
    uploadedImageSize,
    uploadedImageName,
    error,
}) => {

    const { handleImageReupload } = useRecordData();

    return (
        <div
            className={`upload-image-container ${!laptopImage ? 'vertical-padding' : 'border-less-white'} ${error ? 'image-error' : ''}`}
        >
            {laptopImage ? (
                <>
                    <img className='laptop-image' src={laptopImage} alt="Laptop Image" />
                    <div className="reupload">
                        <div className='left-side' >
                            <img src={doneIcon} alt="Done Icon" />
                            <div className='image-info' >
                                <h2 className='uploaded-image-name' >{uploadedImageName}</h2>
                                <h3 className='uploaded-image-size' >{`${uploadedImageSize}`.slice(0, `${uploadedImageSize}`.indexOf('.') + 3)} mb</h3>
                            </div>
                        </div>
                        <Button
                            buttonSize='smallest'
                            buttonText='თავიდან ატვირთე'
                            buttonType='button'
                            clickFunctionallity={handleImageReupload}
                        />
                    </div>
                </>
            ) : (

                <label htmlFor='laptop-image-input' >
                    <img className='camera-icon' src={cameraIcon} alt="Camera Icon" />
                    <h3 className={`upload-image-text ${error && 'image-text-error'}`} >ლეპტოპის ფოტოს ატვირთვა</h3>
                    {error && <img className='exc-icon' src={excIcon}/>}
                    <h2 className={`upload-image-text-desktop ${error && 'image-text-error'}`} >ჩააგდე ან ატვირთე ლეპტოპის ფოტო</h2>
                    <span className='upload-image-span' >ატვირთე</span>
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
