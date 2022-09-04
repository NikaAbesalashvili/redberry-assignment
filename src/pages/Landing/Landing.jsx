import { useLanding } from '../../hooks';
import { Button } from '../../components';

import redberryLogo from '../../assets/redberry-logo.png';
import landingImage from '../../assets/landing-mobile.png';
import landingImageDesktop from '../../assets/landing-desktop.png';
import './Landing.scss';

const Landing = () => {

    const { buttonNavigation } = useLanding();

    return (
        <section
            className="landing-section"
        >
            <img src={redberryLogo} alt="Redberry Logo" />
            <img className='mobile-image' src={landingImage} alt="Landing Image" />
            <img className='desktop-image' src={landingImageDesktop} alt="Landing Image" />
            <div className="buttons">
                <Button
                    buttonText='ჩანაწერის დამატება'
                    buttonType='button'
                    clickFunctionallity={() => buttonNavigation('/add-record')}
                />
                <Button
                    buttonText='ჩანაწერების სია'
                    buttonType='button'
                    clickFunctionallity={() => buttonNavigation('/records')}
                />
            </div>
        </section>
    );
};

export default Landing;
