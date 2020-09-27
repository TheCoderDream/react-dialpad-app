import React from 'react';
import {phoneFormat} from "../../utilities/phoneFormat";
import './Contact.css';

const Contact = (
    {
        name,
        phone,
        avatar
    }
) => {
    return (
        <React.Fragment>
            <div className={'list-item'}>
                <div className={'person'}>
                    <img
                        className={'avatar'}
                        src={avatar}
                        alt={name}/>
                    <span className={'name'}>{name}</span>
                </div>
                <span className={'phone'}>{phoneFormat(phone)}</span>
            </div>
        </React.Fragment>
    );
};

export default Contact;
