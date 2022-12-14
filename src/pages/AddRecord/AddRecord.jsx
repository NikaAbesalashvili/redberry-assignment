import { useAddRecord, useValidations } from '../../hooks';
import { extractUserInfo } from '../../helpers';
import {
    useRecordData,
    useTeams,
    usePositions,
    useLaptopBrands,
    useLaptopCPUs 
} from '../../context';
import {
    Header,
    Input,
    Select,
    Button,
    UploadImage,
    RadioButtons,
    Success
} from '../../components';

import redberryLogo from '../../assets/redberry-logo-desktop.png';
import './AddRecord.scss';

const AddRecord = () => {

    const {
        buttonType,
        addRecordStep,
        errors,
        laptopErrors,
        success,
        optionsFilter,
        handleBackButtonClick,
        handleAddRecordStepChange,
        handleFormSubmit,
        chooseOptionsFilter,
    } = useAddRecord();

    const {
        recordData,
        imageToDisplay,
        uploadedImageName,
        uploadedImageSize,
        handleChange,
        handleCustomSelectChange,
        handleLaptopImageUpload,
    } = useRecordData();

    const { validateUserInfo } = useValidations();

    const { teams } = useTeams();
    const { positions } = usePositions();
    const { laptopBrands } = useLaptopBrands();
    const { laptopCPUs } = useLaptopCPUs();

    

    return (
        <>
            {success ? (
                <Success/>
            ) : (
                <>
                    <Header
                        headerStyle='grey'
                        headerStep={addRecordStep}
                        headerText='თანამშრომლის ინფო'
                        backButtonFunctionallity={handleBackButtonClick}
                        hasNavigation={true}
                        // onUserInfo={decreaseStep}
                        onLaptopInfo={() => validateUserInfo(extractUserInfo(recordData))}
                    />
                    <section className='add-record-section' >

                        <form className='add-record-form' onSubmit={handleFormSubmit} >
                            {addRecordStep === 1 ? (
                                <div className='user-info-box' >
                                    
                                    <div className="name-surname-box">

                                        <Input
                                            labelText='სახელი'
                                            labelForInputId='name'
                                            inputPlaceholder='გრიშა'
                                            inputName='name'
                                            inputValue={recordData.name}
                                            inputHint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
                                            handleInputChange={handleChange}
                                            error={errors.nameError}
                                        />

                                        <Input
                                            labelText='გვარი'
                                            labelForInputId='surname'
                                            inputPlaceholder='ბაგრატიონი'
                                            inputName='surname'
                                            inputValue={recordData.surname}
                                            inputHint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
                                            handleInputChange={handleChange}
                                            error={errors.surnameError}
                                        />
                                        
                                    </div>

                                    {teams.length > 0 && (
                                        <Select
                                            options={teams}
                                            handleSelectChange={handleCustomSelectChange}
                                            selectedOption={`${recordData.team_id ? teams[recordData.team_id - 1].name : 'თიმი'}`}
                                            name='team_id'
                                            error={errors.teamError}
                                            chooseOptionsFilter={chooseOptionsFilter}
                                        />
                                    )}

                                    {positions.length > 1 && (
                                        <Select
                                            options={positions}
                                            handleSelectChange={handleCustomSelectChange}
                                            selectedOption={`${recordData.position_id ? positions[recordData.position_id - 1].name : 'პოზიცია'}`}
                                            name='position_id'
                                            error={errors.positionError}
                                            optionsFilter={optionsFilter}
                                        />
                                    )}

                                    <Input
                                        labelText='მეილი'
                                        labelForInputId='email'
                                        inputPlaceholder='grish666@redberry.ge'
                                        inputName='email'
                                        inputValue={recordData.email}
                                        inputHint='უნდა მთავრდებოდეს @redberry.ge-ით'
                                        handleInputChange={handleChange}
                                        inputType='email'
                                        error={errors.emailError}
                                    />

                                    <Input
                                        labelText='ტელეფონის ნომერი'
                                        labelForInputId='phone_number'
                                        inputPlaceholder='+995 598 00 07 01'
                                        inputName='phone_number'
                                        inputValue={recordData.phone_number}
                                        inputHint='ქართული მობ-ნომრის ფორმატი'
                                        handleInputChange={handleChange}
                                        inputType='tel'
                                        error={errors.phoneNumberError}
                                    />

                                </div>
                            ) : (
                                <>
                                    <div className='boxes' >

                                        <div className="box first ">

                                            <UploadImage
                                                handleLaptopImageupload={handleLaptopImageUpload}
                                                laptopImage={imageToDisplay}
                                                error={laptopErrors.laptopImageError}
                                                uploadedImageName={uploadedImageName}
                                                uploadedImageSize={uploadedImageSize}
                                            />

                                            <Input
                                                labelText='ლეპტოპის სახელი'
                                                labelForInputId='laptop_name'
                                                inputPlaceholder='HP'
                                                inputName='laptop_name'
                                                inputValue={recordData.laptop_name}
                                                inputHint='ლათინური ასოები, ციფრები, !@#$%^&*()_+='
                                                handleInputChange={handleChange}
                                                error={laptopErrors.laptopNameError}
                                            />

                                            <Select                 
                                                options={laptopBrands}
                                                handleSelectChange={handleCustomSelectChange}
                                                selectedOption={`${recordData.laptop_brand_id ? laptopBrands[recordData.laptop_brand_id - 1].name : 'ლეპტოპის ბრენდი'}`}
                                                name='laptop_brand_id'
                                                error={laptopErrors.laptopBrandError}
                                            />

                                        </div>

                                        <div className="box second">

                                            <Select                 
                                                options={laptopCPUs}
                                                handleSelectChange={handleCustomSelectChange}
                                                selectedOption={`${recordData.laptop_cpu ? recordData.laptop_cpu : 'CPU'}`}
                                                name='laptop_cpu'
                                                error={laptopErrors.laptopCPUError}
                                            />

                                            <Input
                                                labelText='CPU-ს ბირთვი'
                                                labelForInputId='laptop_cpu_cores'
                                                inputPlaceholder='14'
                                                inputName='laptop_cpu_cores'
                                                inputValue={recordData.laptop_cpu_cores}
                                                inputHint='მხოლოდ ციფრები'
                                                handleInputChange={handleChange}
                                                inputType='number'
                                                min={1}
                                                error={laptopErrors.laptopCPUCoresError}
                                            />

                                            <Input
                                                labelText='CPU-ს ნაკადი'
                                                labelForInputId='laptop_cpu_threads'
                                                inputPlaceholder='14'
                                                inputName='laptop_cpu_threads'
                                                inputValue={recordData.laptop_cpu_threads}
                                                inputHint='მხოლოდ ციფრები'
                                                handleInputChange={handleChange}
                                                inputType='number'
                                                min={1}
                                                error={laptopErrors.laptopCPUThreadsError}
                                            />

                                            <Input
                                                labelText='ლეპტოპის RAM (GB)'
                                                labelForInputId='laptop_ram'
                                                inputPlaceholder='16'
                                                inputName='laptop_ram'
                                                inputValue={recordData.laptop_ram}
                                                inputHint='მხოლოდ ციფრები'
                                                handleInputChange={handleChange}
                                                inputType='number'
                                                min={1}
                                                error={laptopErrors.laptopRAMError}
                                            />

                                            <RadioButtons
                                                radioGroupText='მეხსიერების ტიპი'
                                                firstValue='SSD'
                                                firstOption='SSD'
                                                secondValue='HDD'
                                                secondOption='HDD'
                                                inputName='laptop_hard_drive_type'
                                                handleRadioButtonChange={handleChange}
                                                error={laptopErrors.laptopHarddriveError}
                                            />

                                        </div>

                                        <div className="box last">

                                            <Input
                                                labelText='შეძენის რიცხვი (არჩევითი)'
                                                labelForInputId='laptop_purchase_date'
                                                inputPlaceholder='დდ / თთ / წწწწ'
                                                inputName='laptop_purchase_date'
                                                inputValue={recordData.laptop_purchase_date}
                                                handleInputChange={handleChange}
                                                inputType='date'
                                            />

                                            <Input
                                                labelText='ლეპტოპის ფასი'
                                                labelForInputId='laptop_price'
                                                inputPlaceholder='0000'
                                                inputName='laptop_price'
                                                inputValue={recordData.laptop_price}
                                                inputHint='მხოლოდ რიცხვები'
                                                handleInputChange={handleChange}
                                                inputType='number'
                                                min={1}
                                                error={laptopErrors.laptopPriceError}
                                            />

                                            <RadioButtons
                                                radioGroupText='ლეპტოპის მდგომარეობა'
                                                firstValue='new'
                                                firstOption='ახალი'
                                                secondValue='used'
                                                secondOption='მეორადი'
                                                inputName='laptop_state'
                                                handleRadioButtonChange={handleChange}
                                                error={laptopErrors.laptopStateError}
                                            />

                                        </div>

                                    </div>
                                </>
                            )}

                            <div className={`form-buttons ${addRecordStep < 2 ? 'fend' : 'space-between'}`} >
                                
                                {addRecordStep === 2 && (
                                    <span
                                        className='back-span'
                                        onClick={handleBackButtonClick}
                                    >
                                        უკან
                                    </span>
                                )}
                                
                                <Button
                                    buttonSize='small'
                                    buttonText={`${addRecordStep === 1 ? 'შემდეგი' : 'დამახსოვრება'}`}
                                    buttonType={buttonType}
                                    clickFunctionallity={handleAddRecordStepChange}
                                />

                            </div>

                        </form>

                        <img className='redberry-logo-desktop' src={redberryLogo} alt="Redberry Logo" />

                    </section>
                </>
            )}
        </>
    );
};

export default AddRecord;
