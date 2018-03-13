import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form'
import LoginReducer from './reducer_login';
//import AddressReducer from './reducer_address';
import BusinessReducer  from "./reducer_business";

import AppointmentReducer from './reducer_Appointment';
import ServiceReducer from './reducer_Service';
import UserReducer from './reducer_User'

const rootReducer = combineReducers({
    form : formReducer,
    userData: LoginReducer,
 //   address: AddressReducer,
    business: BusinessReducer,
    appointment: AppointmentReducer,
    service: ServiceReducer,
    user: UserReducer

});

export default rootReducer;
