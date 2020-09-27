export const contactFilterByPhone = (contacts, dialvalue) => {

    if(!dialvalue) {
        return contacts;
    }

    return contacts.filter(contact => {
        return (contact.phone + '').includes(dialvalue);
    });

};
