import { useNavigate } from 'react-router-dom';

export const useLanding = () => {
    
    const navigate = useNavigate();

    const buttonNavigation = (url) => {
        navigate(url);
    };

    return {
        buttonNavigation,
    };
};