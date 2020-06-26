



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
import "../CssFile/SetNewPassword.css";
import Button from '@material-ui/core/Button';
import { brown } from '@material-ui/core/colors';
import { setNewUserPassword } from '../Service/UserDetailsService';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Badge from '@material-ui/core/Badge';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {

    MuiBadge: {
      anchorOriginTopRightRectangle: {
        top: '143px',
        right: '137px'

      }
    },
    MuiOutlinedInput: {
      root: {
        // width: 'max-content',

      }
    },
    MuiBadge: {
      colorPrimary: {

        backgroundColor: '#43b53f',
      }
    },
    MuiBadge: {
      badge: {
        padding: '6%',
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
    // marginRight: theme.spacing.unit * 3, 
  },
  textField: {
    flexBasis: 400,
  },
  close: {
    padding: theme.spacing.unit / 2,
  },


});



class SetNewPassword extends React.Component {
  state = {
    password: '',
    showPassword: false,
    confirmpassword: '',
    showconfirmpassword: false,
    open: false,

  };


  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleChange1 = prop => event => {
    console.log(event.target.value);

    this.setState({ confirmpassword: event.target.value });
  };

  handleClickShowPassword1 = () => {
    this.setState(state => ({ showconfirmpassword: !state.showconfirmpassword }));
  };
  setNewPassowrdhandle = () => {
    let setpassworddto = {}
    setpassworddto.password = this.state.password;
    setpassworddto.cfmpassword = this.state.confirmpassword;
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.xw0wWGGzxZBMattBsKUw5e8nffwz7waJmunE_ag7k34";

    setNewUserPassword(setpassworddto, token).then(Response => {
      console.log(Response);
      this.setState({ open: true });

    }).catch(err => {
      console.log(err);
    })


  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Badge className={classes.margin} badgeContent={<div className="">Change Password</div>} color="primary">

          <div className="mainsetpass">


            <div style={{ paddingTop: "8%" }}>
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

            <div style={{ paddingTop: "5%" }}>
              <TextField
                margin="dense"
                size="small"
                id="outlined-adornment-password"
                variant="outlined"
                type={this.state.showconfirmpassword ? 'text' : 'password'}
                label="confirmPassword"
                value={this.state.confirmpassword}
                onChange={this.handleChange1('confirmPassword')}
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


            <div style={{ paddingTop: "3%" }}>
              <Button onClick={this.setNewPassowrdhandle} variant="contained" color="secondary" className={classes.button}>
                submit
      </Button>

            </div>

            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">Note archived</span>}
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
        </Badge>
      </MuiThemeProvider>
    );
  }
}



export default withStyles(styles)(SetNewPassword);
