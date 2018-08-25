import axios from "axios";
import cors from 'cors';
import {
    USER_LOGIN,
    SAVE_USER,
    SAVE_GUEST,
    SAVE_HOST
} from './types';

export const userLogin = (loginData) => dispatch => {
    return axios.post("/api/usersessions", loginData);
};

export const saveUser = (userData) => dispatch => {
    axios.post("/api/users", userData)
        .then(res => res.json())
        .then(userData => dispatch({
            type: SAVE_USER,
            payload: userData
        })
        );
};

export const saveGuest = (guestData) => dispatch => {
    axios.post("/api/parties/guests", guestData)
        .then(res => res.json())
        .then(guestData => dispatch({
            type: SAVE_GUEST,
            payload: guestData
        })
        );
};

export const saveHost = (hostData) => dispatch => {
    axios.post("/api/parties/hosts", hostData)
        .then(res => res.json())
        .then(hostData => dispatch({
            type: SAVE_HOST,
            payload: hostData
        })
        );
};