import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {contactFilterByPhone} from "../../utilities/contactFilterByPhone";
import Contact from "../../components/Contact/Contact";
import './ContactList.css';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const Avatars =  importAll(require.context('../../assets/thumbnails', false, /\.(png|jpe?g|svg)$/));

const ContactList = (
    {
        contacts
    }
) => {
    const [avatars, setAvatars] = useState(null);
    useEffect(() => {
      Promise
    });
    return (
        <div className={'list-container'}>
                {contacts.map(contact => {
                  return (  <Contact key={contact.id} name={contact.name} phone={contact.phone}
                             avatar={Avatars[`${contact.name}.jpg`]}/>)
                })}
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return { contacts: contactFilterByPhone(state.contactList, state.dialpad)}
};

export default connect(mapStateToProps, null)(ContactList);
