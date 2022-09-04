import { useRecord } from '../../hooks';
import { useTeams, usePositions, useLaptopBrands } from '../../context';
import { Header, InfoText } from '../../components';

import './RecordDedails.scss';

const RecordDedails = () => {

    const { recordData, handleBackButton } = useRecord();

    const { teams } = useTeams();
    const { positions } = usePositions();
    const { laptopBrands } = useLaptopBrands();

    return (
        <>
            <Header
                headerText='ლეპტოპის ინფო'
                backButtonFunctionallity={handleBackButton}
            />
            <section className='laptop-info' >
                <div className="image-user-info">

                    <img className='record-image' src={`https://pcfy.redberryinternship.ge/${recordData?.laptop?.image}`} alt="Laptop Image" />
                    
                    <div className='user-info' >
                        
                        <InfoText
                            helperText='სახელი:'
                            mainText={`${recordData?.user?.name} ${recordData?.user?.surname}`}
                        />
                        
                        <InfoText
                            helperText='თიმი:'
                            mainText={teams[recordData?.user?.team_id - 1]?.name}
                        />
                        
                        <InfoText
                            helperText='პოზიცია:'
                            mainText={positions[recordData?.user?.position_id - 1]?.name}
                        />
                        
                        <InfoText
                            helperText='მეილი:'
                            mainText={recordData?.user?.email}
                        />
                        
                        <InfoText
                            helperText='ტელ. ნომერი:'
                            mainText={
                                `${recordData?.user?.phone_number.slice(0, 4)} ${recordData?.user?.phone_number.slice(4, 7)} ${recordData?.user?.phone_number.slice(7, 9)} ${recordData?.user?.phone_number.slice(9, 11)} ${recordData?.user?.phone_number.slice(11, 13)}`
                            }
                        />

                    </div>

                </div>

                <div className="laptop-description">
                    
                    <div className="laptop-main-info">

                        <InfoText
                            helperText='ლეპტოპის სახელი:'
                            mainText={recordData?.laptop?.name}
                        />

                        <InfoText
                            helperText='ლეპტოპის ბრენდი:'
                            mainText={laptopBrands[recordData?.laptop?.brand_id -1]?.name}
                        />

                        <InfoText
                            helperText='RAM:'
                            mainText={recordData?.laptop?.ram}
                        />

                        <InfoText
                            helperText='მეხსიერების ტიპი:'
                            mainText={recordData?.laptop?.hard_drive_type}
                        />
                    </div>

                    <div className="cpu-info">

                        <InfoText
                            helperText='CPU:'
                            mainText={recordData?.laptop?.cpu?.name}
                        />

                        <InfoText
                            helperText='CPU-ს ბირთვი:'
                            mainText={recordData?.laptop?.cpu?.cores}
                        />

                        <InfoText
                            helperText='CPU-ს ნაკადი:'
                            mainText={recordData?.laptop?.cpu?.threads}
                        />

                    </div>

                </div>

                <div className="additional-laptop-info">

                    <InfoText
                        helperText='მდგომარეობა'
                        mainText={`${recordData?.laptop?.state === 'new' ? 'ახალი': 'მეორადი'}`}
                    />

                    <InfoText
                        helperText='ლეპტოპის ფასი'
                        mainText={`${recordData?.laptop?.price}₾`}
                    />

                    {recordData?.laptop?.purchase_date && (
                        <InfoText
                            helperText='შეძენის რიცხვი'
                            mainText={recordData.laptop?.purchase_date}
                        />
                    )}

                </div>

            </section>
        </>
    );
};

export default RecordDedails;
