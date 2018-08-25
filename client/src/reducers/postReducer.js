import { 
    USER_LOGIN,
    SAVE_USER,
    SAVE_GUEST,
    SAVE_HOST
} from '../actions/types';
import moment from 'moment';


const initialState = {
    isLoading: false,
    token: '',
    email: "",
    password: "",
    guestLocation: "",
    smokingIn: false,
    smokingOut: false,
    hasAlcohol: false,
    hasFood: false,
    hasMoney: false,
    hasDD: false,
    description: "",
    partyAge: [21, 99],
    partyDistance: 1,
    address: "",
    guestAge: [21, 99],
    guestDistance: 1,
    guestAmount: [2, 40],
    firstName: "",
    lastName: "",
    birthdate: moment(),
    phoneNumber: "",
}

export default function (state = initialState, action) {
    console.log('reducing');
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                items: action.payload
            };
        case SAVE_USER:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}