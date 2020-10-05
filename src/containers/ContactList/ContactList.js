import React from 'react';
import { connect } from 'react-redux';
import {contactFilterByPhone} from "../../utilities/contactFilterByPhone";
import Contact from "../../components/Contact/Contact";
import './ContactList.css';




const ContactList = (
    {
        contacts
    }
) => {
    return (
        <div className={'list-container'}>
                {contacts.map(contact => {
                  return (  <Contact key={contact.id} name={contact.name} phone={contact.phone}
                             avatar={`https://ui-avatars.com/api/?name=${contact.name}`}/>)
                })}
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return { contacts: contactFilterByPhone(state.contactList, state.dialpad)}
};

export default connect(mapStateToProps, null)(ContactList);
