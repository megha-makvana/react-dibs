import React,{ Component } from 'react';
import { fetchAppointments } from '../../../actions';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class MyBookings extends Component {
    // componentDidMount(){
    //    // this.fetchAppointments()
    //   this.props.appointment;
      
    // }
    render() {
        return(
            <div>
                <button onClick={() => { this.props.fetchApp()}}>CLICK</button> 

           <div>{JSON.stringify(this.props.appointment,null,4)}</div>
           </div>
        )
        
    }
}

function mapStateToProps(state){
    return {
        appointment : state.appointment
    }
}
 
function mapDispatchToProps(dispatch){
    return {
        fetchApp: function(){
            fetchAppointments(dispatch);
        }
    }
    
    // return bindActionCreators({
    //     fetchAppointments: fetchAppointments
    // }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MyBookings);