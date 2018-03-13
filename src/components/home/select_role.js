import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import DatePicker from 'material-ui/DatePicker';
import { addRole } from '../../actions/index';
import { connect } from 'react-redux';
/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
 class SelectRole extends React.Component {
  state = {
    open: true,
    value: 0,
  };

//   handleOpen = () => {
//     this.setState({open: true});
//   };

  handleClose = () => {  
    this.setState({open: false});
  };

  handleChange = (event, index, value) => {
    var data= {
      user_id:'114394743017489649055',
      role_id: value,
    }
    this.props.addRole(data);
    this.setState({ value });
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        {/* <RaisedButton label="WHO ARE YOU?" onClick={this.handleOpen} /> */}
     
        <Dialog
          title="WHO ARE YOU?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {/* Open a Date Picker dialog from within a dialog. */}
          <SelectField
            
            floatingLabelText="Select Role"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem  value={0} primaryText="None" />
            <MenuItem  value={1} primaryText="Provider" />
            <MenuItem  value={2} primaryText="Customer" />
          {/* <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" /> */}
        </SelectField>
        </Dialog>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     userData: state.userData
//   }
// }

function mapDispatchToProps(dispatch) {
 return {
    addRole: function (dispatch) {
      addRole(dispatch);
    }
  }
}

export default connect(state => {
  console.log('in select role, redux state',state);
  return {
    userData: state.userData
  }
},mapDispatchToProps)(SelectRole);