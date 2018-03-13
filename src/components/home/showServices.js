import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchServices} from '../../actions'
class ShowServices extends Component {
    render() {
        return (
            <div>
                <button onClick={() => { this.props.fetchService() }}>CLICK</button>
                <div>{JSON.stringify(this.props.service.map(services => services.map((service) => service.id)), null, 4)}</div>
                <div>{JSON.stringify(this.props.service.map(services => services.map(service => service.service_name )), null, 4)}</div>
                <div>{JSON.stringify(this.props.service.map(services => services.map(service => service.service_duration)), null, 4)}</div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        service: state.service
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchService: function () {
            fetchServices(dispatch);
        }
    }

    // return bindActionCreators({
    //     fetchAppointments: fetchAppointments
    // }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowServices);