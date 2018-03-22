import {setSi, setLoc, serialize, clearKey } from '../utils'

export default {
    mToken(state, data) {
        state.token = data;
        setLoc('token', data);
    },
    mInfo(state, data) {
        state.info = JSON.parse(JSON.stringify(data));
    },
    mExit(state) {
        clearKey();
        state.token = '';
    },
    mList(state, data) {
        state.list = Boolean(data.length) ? [...state.list, ...data] : [];
    } 
}