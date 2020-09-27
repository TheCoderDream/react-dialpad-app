import {combineReducers} from "redux";
import dialpad from './dialpad';
import contactList from './contactList';


export default combineReducers({
    dialpad,
    contactList
});
