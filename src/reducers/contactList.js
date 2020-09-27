import {ADD_CONTACT, REMOVE_CONTACT} from "../actions/types";

const initialState = [
    {
        "name": "Angie",
        "phone": 8628479392,
        "id": 1
    },
    {
        "name": "Beatrice",
        "phone": 9178324720,
        "id": 2
    },
    {
        "name": "Candice",
        "phone": 8624853750,
        "id": 26
    },
    {
        "name": "Carl",
        "phone": 8043742719,
        "id": 3
    },
    {
        "name": "Dave",
        "phone": 8621240412,
        "id": 4
    },
    {
        "name": "Eugene",
        "phone": 8621934852,
        "id": 5
    },
    {
        "name": "Francis",
        "phone": 8625638282,
        "id": 6
    },
    {
        "name": "Lancelot",
        "phone": 8629103456
    },
    {
        "name": "Romeo",
        "phone": 7266652928,
        "id": 7
    },
    {
        "name": "Tobias",
        "phone": 9174851938,
        "id": 8
    },
    {
        "name": "Toby",
        "phone": 2932942947,
        "id": 9
    },
    {
        "name": "Tony",
        "phone": 8623456789,
        "id": 10
    },
    {
        "name": "Uncle Mike",
        "phone": 2123954957,
        "id": 11
    },
    {
        "name": "Zelda",
        "phone": 2349876547,
        "id": 12
    },
    {
        "name": "Ziggy",
        "phone": 2347652323,
        "id": 13
    }];

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
