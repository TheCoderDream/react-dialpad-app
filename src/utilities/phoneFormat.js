export const phoneFormat = (phoneNumber) => {
    return (phoneNumber + '').replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
};
