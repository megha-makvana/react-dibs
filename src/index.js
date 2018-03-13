import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
// import App from './components/App';
// import BookAppointment from './components/book_appointment'
import HomePage from './components/home/homepage'
//import ProviderHome from './components/provider/provider_dashboard/index'
import SelectRole from './components/home/select_role'
import registerServiceWorker from './registerServiceWorker';
import SetupBusinessForm from './components/provider/Business_Setup/set_business';
import { createStore,applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import setAuthorizationToken from './actions/set_Authorization'
import myBookings from './components/customer/customer_myBookings/myBookings';
// import GetLocation from './components/getLocation'
import { setCurrentUser } from './actions'
import  jwt_decode  from 'jwt-decode';
import thunk from './createThunkMiddleware';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStoreWithMiddleware(rootReducer)


console.log('before setting header')
//setAuthorizationToken(localStorage.jwtToken);

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt_decode(localStorage.jwtToken)));
}


ReactDOM.render(
<Provider store={store}>
<MuiThemeProvider>
    <BrowserRouter>
    <div>
    <Switch>
        {/* <Route path='/getLoc' component={GetLocation} /> */}
        <Route path="/home/select_role" component={SelectRole} />
        <Route path="/provider/Business_Setup/set_business" component={SetupBusinessForm} />
        {/* <Route path="/provider/home" component={ProviderHome} /> */}
        {/* <Route path="/customer/book" component={App} /> */}
        <Route path="/customer/MyBookings" component={myBookings} />
        <Route path='/' component={HomePage} />
       
    </Switch>
    </div>
    </BrowserRouter>
</MuiThemeProvider>
</Provider>
,document.getElementById('root'));
registerServiceWorker();
