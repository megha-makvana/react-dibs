import {FETCH_SERVICE }from '../actions/index'

export default function(state=[],action){
    switch(action.type) {
        
        case FETCH_SERVICE:
            return [...state,action.payload.data];
        
        default:
        return state;
    }
}