import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "../CssFile/login.css";
import Button from '@material-ui/core/Button';
import { brown } from '@material-ui/core/colors';
import { userForgotPassword } from '../Service/UserDetailsService';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',

    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
    minWidth: '280px',
    backgroundColor: '#81bf39',
    color: '81bf39'
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 400,
  },
});



class ForgotPassword extends React.Component {
  state = {
    emailid: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ emailid: event.target.value });
  };

  forgotpasswordhandle = () => {

    userForgotPassword(this.state.emailid).then(Response => {
      console.log(Response.data.message);
      alert(`${Response.data.message}`);



    }).catch(error => {
      alert(`${Response.message}`);
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="mainlogin">

        <span className="loginheadline">ForgotPassword</span>
        <div className={classes.root} style={{ paddingTop: "8%" }}>

          <TextField
            margin="dense"
            size="small"
            name="Emaild"
            id="outlined-required"
            label="Emailid"
            variant="outlined"
            className={classNames(classes.margin, classes.textField)}
            onChange={this.handleChange('Emailid')}


          />
        </div>


        <div style={{ paddingTop: "8%" }}>
          <Button onClick={this.forgotpasswordhandle} variant="contained" color="secondary" className={classes.button}>
            Submit
      </Button>

        </div>
      </div>
    );
  }
}



export default withStyles(styles)(ForgotPassword);
