import { FETCH_APPOINTMENTS } from "../actions/index";
import _ from 'lodash';

export default function(state= [], action) {
    switch (action.type) {
        case FETCH_APPOINTMENTS:
            var newState = [action.payload.data, ...state];
            console.log(newState);
            return _.mapKeys(action.payload.data, 'appointment_id');
        
    default:
    return state;
    }
}