import { useAddRecord } from '../../hooks';
import { Header, Input, Select } from '../../components';

import './AddRecord.scss';

const AddRecord = () => {

    const {
        addRecordStep,
        recordData,
        teams,
        positions,
        handleBackButtonClick,
        handleInputChange,
        handleSelectChange,
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
                <form className='add-record-form' >
                {addRecordStep === 1 ? (
                    <>

                        <Input
                            labelText='სახელი'
                            labelForInputId='name'
                            inputPlaceholder='გრიშა'
                            inputName='name'
                            inputValue={recordData.name}
                            inputHint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
                            handleInputChange={handleInputChange}
                        />
                        <Input
                            labelText='გვარი'
                            labelForInputId='surname'
                            inputPlaceholder='ბაგრატიონი'
                            inputName='surname'
                            inputValue={recordData.surname}
                            inputHint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
                            handleInputChange={handleInputChange}
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

                    </>
                    ) : (
                        <h1>SECOND STEP</h1>
                    )}
                </form>
            </section>
        </>
    );
};

export default AddRecord;
