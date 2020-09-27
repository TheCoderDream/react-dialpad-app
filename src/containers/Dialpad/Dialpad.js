import React, {Component} from 'react';
import NumberPad from "../../components/NumberPad/NumberPad";
import ContactList from "../ContactList/ContactList";
import './Dialpad.css';
import NumberDisplay from "../../components/NumberDisplay/NumberDisplay";

class Dialpad extends Component {
    render() {
        return (
            <div className={'top-panel'}>
                <h1>Find contacts</h1>
                <NumberDisplay/>
                <NumberPad/>
                <div className={'bottom-panel'}>
                    <ContactList/>
                </div>
            </div>
        );
    }
}

export default Dialpad;
