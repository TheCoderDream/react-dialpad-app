import {ADD_CONTACT, REMOVE_CONTACT} from "../actions/types";
import {data} from './data'

const initialState = data;

const contactList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_CONTACT:
            return state.filter(contact => contact.id !== action.payload);
        default:
            return state;
    }
};

export default contactList;
