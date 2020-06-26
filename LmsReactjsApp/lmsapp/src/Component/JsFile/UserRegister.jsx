import React, { Component } from 'react'
import classNames from 'classnames';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "../CssFile/UserRegister.css";
import Button from '@material-ui/core/Button';
import { userRegister } from '../Service/UserDetailsService';
const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        top: "13%"
      }
    },

    UserRegister: {
      textField: {
        4: { flexBasis: '00px' }


      }
    },
    PersistentDrawerLeft: {
      drawer: {
        width: "0px"
      }
    }
  }
});
const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',

    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
    minWidth: '140px',
    backgroundColor: '#81bf39',
    color: '81bf39'
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 0,
  },
});

export class UserRegister extends Component {
  constructor(props) {
    super(props)

    this.state = {

      password: '',
      showPassword: false,
      confirmpassword: '',
      showconfirmpassword: false,
      firstName: '',
      lastName: '',
      email: '',
      contact_number: ''



    }
  }
  firstNamehandleChange = prop => event => {
    this.setState({ firstName: event.target.value });
  };
  lastNamehandleChange = prop => event => {
    this.setState({ lastName: event.target.value });
  };

  emailhandleChange = prop => event => {
    this.setState({ email: event.target.value });
  };
  contactnumberhandleChange = prop => event => {
    this.setState({ contact_number: event.target.value });
  };

  handleChange = prop => event => {
    this.setState({ password: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleChange1 = prop => event => {
    this.setState({ confirmpassword: event.target.value });
  };

  handleClickShowPassword1 = () => {
    this.setState(state => ({ showconfirmpassword: !state.showconfirmpassword }));
  };
  loginpage = () => {


    this.props.history.push("/userlogin");
  };
  userRegisterhandle = () => {
    let Userdetaildto = {};
    Userdetaildto.firstName = this.state.firstName;
    Userdetaildto.lastName = this.state.lastName;
    Userdetaildto.email = this.state.email;
    Userdetaildto.password = this.state.password;
    Userdetaildto.contact_number = this.state.contact_number;
    if (this.state.password === this.state.confirmpassword) {

      userRegister(Userdetaildto).then(Response => {
        console.log(Response);
      }).catch(err => {
        console.log(Response);

      });


    }
    else {

    }

  }


  render() {
    const { classes } = this.props;

    return (

      <div className="mainuserregister">
        <MuiThemeProvider theme={theme}>
          <span className="registerheadline">Registration</span>

          <div className="userfirstlast">
            <div style={{ width: '35%' }} >
              <TextField
                margin="dense"
                size="small"
                name="firstname"
                id="outlined-required"
                label="firstname"
                variant="outlined"
                className={classNames(classes.margin, classes.textField)}
                onChange={this.firstNamehandleChange('firstname')}


              />
            </div>

            <div style={{ width: '35%' }} >
              <TextField
                margin="dense"
                size="small"
                name="lastname"
                id="outlined-required"
                label="lastname"
                variant="outlined"
                className={classNames(classes.margin, classes.textField)}
                onChange={this.lastNamehandleChange('lastname')}


              />
            </div>

          </div>

          <div className="emailid">
            <TextField
              margin="dense"
              size="small"
              name="emailid"
              id="outlined-required"
              label="emailid"
              variant="outlined"
              className={classNames(classes.margin, classes.textField)}
              onChange={this.emailhandleChange('emailid')}


            />
          </div>

          <div className="moiblenumber"  >

            <TextField
              margin="dense"
              size="small"
              name="MoibleNumber"
              id="outlined-required"
              label="moibleNumber"
              variant="outlined"
              className={classNames(classes.margin, classes.textField)}
              onChange={this.contactnumberhandleChange('moibleNumber')}


            />
          </div>
          <div className="userpasswordconfirm">
            <div className="password" style={{ width: '35%', marginLeft: '8px' }} >
              <TextField
                margin="dense"
                size="small"
                id="outlined-adornment-password"
                variant="outlined"
                type={this.state.showPassword ? 'text' : 'password'}
                label="Password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className="password" style={{ width: '35%', marginRight: '8px' }} >
              <TextField
                margin="dense"
                size="small"
                id="outlined-adornment-password"
                variant="outlined"
                type={this.state.showconfirmpassword ? 'text' : 'password'}
                label="confirmPassword"
                value={this.state.confirmpassword}
                onChange={this.handleChange1('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword1}
                      >
                        {this.state.showconfirmpassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className="buttoncss">

            <Button onClick={this.userRegisterhandle} variant="contained" color="secondary" className={classes.button}>
              submit
      </Button>
            <Button onClick={this.loginpage} style={{ textTransform: 'lowercase', color: '#0423ce' }}>Already registered?</Button>

          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default withStyles(styles)(UserRegister);

