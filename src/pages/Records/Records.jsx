import { Header, Record } from '../../components';
import { useRecords } from '../../hooks';
import './Records.scss';

const Records = () => {
    
    const { records, handleBackButton } = useRecords();
    
    return (
        <>
            <Header

                headerText='ჩანაწერების სია'
                backButtonFunctionallity={handleBackButton}
            />
            <section className='records' >
                {records.length > 0 && (
                    records.map((record) => (
                        <Record
                            laptopName={record.laptop.name}
                            laptopImage={record.laptop.image}
                            laptopId={record.laptop.id}
                            username={record.user.name}
                            userSurname={record.user.surname}
                            key={record.laptop.id}
                        />
                    ))
                )}
            </section>
        </>
    );
};

export default Records;
