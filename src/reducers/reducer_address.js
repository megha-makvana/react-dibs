import { GET_LOC } from '../actions/index'

export default function AddressReducer(state = [], action) {
    console.log('reached')
    console.log(action.type);
    switch(action.type) {
        case GET_LOC: {
            console.log('Reducer data:',action.payload.data);
            return [action.payload.data, ...state];
        }
        default:
            return state;

    }
}