import { useAddRecord } from '../../hooks';
import { Header, Input, Select, Button, UploadImage, RadioButtons } from '../../components';

import './AddRecord.scss';

const AddRecord = () => {

    const {
        addRecordStep,
        recordData,
        teams,
        positions,
        laptopBrands,
        laptopCPUs,
        handleBackButtonClick,
        handleChange,
        handleSelectChange,
        handleAddRecordStepChange,
        handleFormSubmit,
        handleLaptopImageUpload,
    } = useAddRecord();

    return (
        <>
            <Header
                headerStyle='grey'
                headerStep={addRecordStep}
                headerText='თანამშრომლის ინფო'
                backButtonFunctionallity={handleBackButtonClick}
            />
            <section className='add-record-section' >
                <form className='add-record-form' onSubmit={handleFormSubmit} >
                {addRecordStep === 1 ? (
                    <>

                        <Input
                            labelText='სახელი'
                            labelForInputId='name'
                            inputPlaceholder='გრიშა'
                            inputName='name'
                            inputValue={recordData.name}
                            inputHint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
                            handleInputChange={handleChange}
                        />
                        <Input
                            labelText='გვარი'
                            labelForInputId='surname'
                            inputPlaceholder='ბაგრატიონი'
                            inputName='surname'
                            inputValue={recordData.surname}
                            inputHint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
                            handleInputChange={handleChange}
                        />

                        {teams.length > 0 && (
                            <Select
                                options={teams}
                                handleSelectChange={handleSelectChange}
                                selectedOption='თიმი'
                                name='team_id'
                            />
                        )}

                        {positions.length > 1 && (
                            <Select
                                options={positions}
                                handleSelectChange={handleSelectChange}
                                selectedOption='პოზიცია'
                                name='position_id'
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
                        />

                    </>
                    ) : (
                        <>

                            <UploadImage
                                handleLaptopImageupload={handleLaptopImageUpload}
                                laptopImage={recordData.laptop_image}
                            />

                            <Input
                                labelText='ლეპტოპის სახელი'
                                labelForInputId='laptop_name'
                                inputPlaceholder='HP'
                                inputName='laptop_name'
                                inputValue={recordData.laptop_name}
                                inputHint='ლათინური ასოები, ციფრები, !@#$%^&*()_+='
                                handleInputChange={handleChange}
                            />

                            <Select                 
                                options={laptopBrands}
                                handleSelectChange={handleSelectChange}
                                selectedOption='ლეპტოპის ბრენდი'
                                name='laptop_brand_id'
                            />

                            <Select                 
                                options={laptopCPUs}
                                handleSelectChange={handleSelectChange}
                                selectedOption='CPU'
                                name='laptop_cpu'
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
                            />

                            <RadioButtons
                                radioGroupText='მეხსიერების ტიპი'
                                firstValue='ssd'
                                firstOption='SSD'
                                secondValue='hdd'
                                secondOption='HDD'
                                inputName='laptop_hard_drive_type'
                                handleRadioButtonChange={handleChange}
                            />
                            
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
                            />

                            <RadioButtons
                                radioGroupText='ლეპტოპის მდგომარეობა'
                                firstValue='new'
                                firstOption='ახალი'
                                secondValue='old'
                                secondOption='ძველი'
                                inputName='laptop_state'
                                handleRadioButtonChange={handleChange}
                            />

                        </>

                    )}

                    <div className={`form-buttons ${addRecordStep < 2 ? 'fend' : 'space-between'}`} >
                        <Button
                            buttonText='შემდეგი'
                            buttonType='button'
                            clickFunctionallity={handleAddRecordStepChange}
                        />
                    </div>

                </form>
            </section>
        </>
    );
};

export default AddRecord;
