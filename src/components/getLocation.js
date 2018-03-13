import React,{ Component } from 'react';
import { getLocation } from '../actions/index';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

class GetLocation extends Component {
  
    componentDidMount(){
         this.props.getLocation();
    }
    static defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11,
        
    }
    render() {
       
        const API_KEY ="AIzaSyAJSQADoODmxYj6oMGIJonfZZeQrM0d39s";
        const AnyReactComponent = ({ text }) => <div>{text}</div>;
        console.log('Props:',this.props);
        console.log('Address:',this.props.address);
        console.log('State',this.state);

        return(
            <div>{JSON.stringify(this.loc,null,4)}
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                />
            </GoogleMapReact>
            </div>

        )
    
    }
}

function mapStateToProps(state) {
    return{ 
       address:state.address
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getLocation: function(){
            getLocation(dispatch);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetLocation);