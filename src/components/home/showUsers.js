import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

class ShowUsers extends Component {
    render() {
        return (
            <div>
                <button onClick={() => { this.props.fetchUser() }}>CLICK</button>
                <div>{JSON.stringify(this.props.user.map(users => users.map(user => user)), null, 4)}</div>
                <div>{JSON.stringify(this.props.user.map(users => users.map(user => user.id)), null, 4)}</div>
                <div>{JSON.stringify(this.props.user.map(users => users.map(user => user.email)), null, 4)}</div>
                <div>{JSON.stringify(this.props.user.map(users => users.map(user => user.contact)), null, 4)}</div>
                <div>{JSON.stringify(this.props.user.map(users => users.map(user => user.address)), null, 4)}</div>
                <div>{JSON.stringify(this.props.user.map(users => users.map(user => user.services)), null, 4)}</div>
                <div>{JSON.stringify(this.props.user.map(users => users.map(user => user.userAppointments)), null, 4)}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        user:state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: function() {
            fetchUsers(dispatch);
        }
    }
}

function checkAvailability() {
    var isAvailable= this.props.user.map(users => users.map(user => user.schedules.map(schedule => schedule.isAvailable)));
    var status = this.props.user.map(users => users.map(user => user.userAppointments.map(appt => appt.status)))
    if(isAvailable ==='1'&& status==='1'){
        return 'Not Available'
    } 
    else {
        return 'Available'
    }
}

function allowCancel() {
    var cancel = this.props.user.map(users => users.map(user => user.cancel))
    if(cancel==='0'){
        // return (
        //     'No cancellation allowed';
        // )le 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowUsers);