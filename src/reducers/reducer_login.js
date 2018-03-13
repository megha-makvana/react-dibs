import { CREATE_USER } from '../actions/index'
import { ADD_ROLE } from '../actions/index'
import { SET_CURRENT_USER } from "../actions/index";
// export default function LoginReducer(state={}, action={}){    
//     switch(action.type) {
        
//         case CREATE_USER: {
//             console.log('in reducer',action.payload.data);
//             return [action.payload.data, ...state];
//         }
//         case ADD_ROLE: {
//             console.log(action.payload.data);
//             return [action.payload.data, ...state];
//         }
//         default:
//         return state;

//     }
// }
export default function LoginReducer(state = { isAuthenticated: false, user: {} }, action = {}) {
     console.log('payload',action.payload);
     console.log('type',action.type);
    console.log('yo', localStorage.getItem('jwtToken'));
    
    switch (action.type) {
        case CREATE_USER:{
            console.log('in create user',action.payload.data)
            return [action.payload.data, ...state];
        }
        case SET_CURRENT_USER: {
            console.log('Inside Case set current user', localStorage.getItem('jwtToken'))
            console.log('action-user', action.user)
            return {
                isAuthenticated: localStorage.getItem('jwtToken') ? true : false,
                user: action.user
            };
        }
        case ADD_ROLE: {
            console.log(action.payload.data);
            return [action.payload.data, ...state];
        }
        default:
            console.log('returning default')
            return state;

    }
}