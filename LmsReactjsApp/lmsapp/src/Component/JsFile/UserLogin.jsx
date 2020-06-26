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
import { userLogin } from '../Service/UserDetailsService';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: {
      margin: theme.spacing.unit,
    },
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
    minWidth: '280px',
    backgroundColor: '#81bf39',
    color: '81bf39'
  },

  textField: {
    flexBasis: 280,
  },
  close: {
    padding: theme.spacing.unit / 2,
  },
});



class UserLogin extends React.Component {
  queue = [];

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      showPassword: false,
      error: {},
      emailid: '',
      isValid: true,
      open: false,
      messageInfo: '',
      fields: {},
      errors: {}

    };
    this.handleValid = this.handleValid.bind(this);

  }



  handleValid = () => {
    console.log("ddd");

    let error = this.state.error;
    let emailid = this.state.emailid;
    let password = this.state.password;
    let isValid = this.state.isValid;
    if (emailid == " ") {
      isValid = false;
      error["emailid"] = "username is required";
    }

    if (password === "") {
      isValid = false;
      error["password"] = "Password is required";
    }
    console.log(this.state.password);

    this.setState({
      error: error
    });
    return isValid;
  };

  loginhandle = () => {
    console.log(this.state.isValid);



    let userlogin = {};
    userlogin.email = this.state.emailid;
    userlogin.password = this.state.password;
    userLogin(userlogin).then(response => {
      console.log(response.data.obj);

      let name = response.data.obj.userdetailmodel.firstName + " " + response.data.obj.userdetailmodel.lastName;

      localStorage.setItem("Token", response.data.obj.token);
      localStorage.setItem("Name", name);
      localStorage.setItem("firstName", response.data.obj.userdetailmodel.firstName);
      localStorage.setItem("lastName", response.data.obj.userdetailmodel.lastName);
      localStorage.setItem("email", response.data.obj.userdetailmodel.email);

      localStorage.setItem("ProfilePic", response.data.obj.userdetailmodel.path);







      this.setState({ messageInfo: response.data.message });
      this.setState({ open: true });
      this.props.history.push("/mydrawer");




    })
      .catch(error => {
        this.setState({ messageInfo: "same problem" });
        this.setState({ open: true });

      });



  }

  forgotpassword = () => {
    this.props.history.push("/ForgotPassword");
  };
  handleChange = prop => event => {

    this.setState({ password: event.target.value });
  };
  emailidhandleChange = prop => event => {

    this.setState({ emailid: event.target.value });
  };


  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };



  render() {
    const { classes } = this.props;


    return (
      <div className="mainlogin">
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <span className="loginheadline">Login</span>
          <div className={classes.root} style={{ paddingBottom: '5%' }}>
            <TextField
              margin="dense"
              size="small"
              name="username"
              id="outlined-required"
              label="username"
              variant="outlined"
              className={classNames(classes.margin, classes.textField)}
              onChange={this.emailidhandleChange('username')}


            />
          </div>
          <span style={{ color: "red" }}>{this.state.error.emaild}</span>


          <div style={{ paddingBottom: '5%' }}>
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
          <span style={{ color: "red" }}>{this.state.error.emaild}</span>


          <div className="forgotpassword">
            <Button onClick={this.forgotpassword} style={{ textTransform: 'lowercase', color: '#0423ce' }}>Forgot Password?</Button>


          </div>
          <span></span>
          <div>
            <Button onClick={this.loginhandle} variant="contained" color="secondary" className={classes.button}>
              Login
      </Button>


          </div>
        </ValidatorForm>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          onExited={this.handleExited}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.messageInfo}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}




export default withStyles(styles)(UserLogin);
