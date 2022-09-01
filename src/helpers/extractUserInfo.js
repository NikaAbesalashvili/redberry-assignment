export const extractUserInfo = (recordData) => {
    
    const {
        name,
        surname,
        team_id,
        position_id,
        email,
        phone_number,
    } = recordData;

    return {
        name,
        surname,
        team_id,
        position_id,
        email,
        phone_number,
    };
};