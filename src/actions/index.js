
import axios from 'axios';
import setAuthorizationToken from './set_Authorization';
import jwt_decode from 'jwt-decode';

 export const ADD_ROLE='add_role';
 export const SET_UP_BUS='setup_business';
 export const GET_LOC='get_location';

export const SET_CURRENT_USER='set_current_user';
export const CREATE_USER = 'create_user';
const url = `http://localhost:1337`

// export function createUser(data){
//     const request=axios.post(`${url}/user/createUser`,data);
//     request.then((result)=>{
//          console.log('Login Data',result);
//         return {
//             type: CREATE_USER,
//             payload: result
//         }
//     })
     
// }

export function createUser(data) {
    const request = axios.post(`${url}/user/createUser`, data);
    request.then(result => {
        console.log('result data', result)
        var jwt = result.data;
        localStorage.setItem('jwtToken', jwt);
        setAuthorizationToken(jwt);
        console.log('Decoded Data', jwt_decode(jwt));
        const pdata = jwt_decode(jwt);
        return {
            type: CREATE_USER,
            payload: pdata
            //setCurrentUser(pdata)
        }
    });
}
export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user
    }
}


export function addRole(values){
    const request=axios.post(`${url}/role/addRoles`,values);
    request.then((result)=>{
        console.log('Post data:',result);
        return {
            type: ADD_ROLE,
            payload: result
        }
    })
}
export function getLocation(){
    const request = axios.get(`${url}/user/getLoc/43`);
    request.then((result)=>{
        console.log('Location:',result.data);
        return {
            type: GET_LOC,
            payload: result
        }
    })
}
export function setupBusiness(data){
    console.log('before action data',data);
    const request = axios.post(`${url}/user/setupBusiness/107038288780071834255`,data);
    request.then((result) => {
        console.log('Business: ', result.data);
        return {
            type: SET_UP_BUS,
            payload: result
        }
    })
}

export const FETCH_APPOINTMENTS = 'FETCH_APPOINTMENTS';
export const FETCH_SERVICE = 'FETCH_SERVICE';
export const FETCH_USERS = 'FETCH_USERS';

export function fetchAppointments(dispatch) {
    const request = axios.get(`${url}/appointment/getAppointments/1`);
    request.then((result) => {
        console.log('Appointment', result.data);
        dispatch({
            type: FETCH_APPOINTMENTS,
            payload: result
        })
    })

}

export function fetchServices(dispatch) {
    const request1 = axios.get(`${url}/user/getServices/business12`);
    request1.then((result) => {
        console.log('Services:', result.data);
        dispatch({
            type: FETCH_SERVICE,
            payload: result
        })
    })
}

export function fetchUsers(dispatch) {
    const request = axios.get(`${url}/user/fetchUsers/43`);
    request.then((result) => {
        console.log('Users:', result.data);
        dispatch({
            type: FETCH_USERS,
            payload: result
        })
    })
}