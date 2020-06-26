import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import {
  Avatar,
  TextField,

} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ChangePassword extends React.Component {
  state = {
    open: false,
    password: '',
    showPassword: false,
    confirmpassword: '',
    showconfirmpassword: false,
    currentpassword: '',
    showcurrentpassword: false
  };

  handleChange = prop => event => {
    this.setState({ password: event.target.value });
  };

  handleChange1 = prop => event => {
    this.setState({ confirmpassword: event.target.value });
  };
  handleChange2 = prop => event => {
    this.setState({ currentpassword: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickShowPassword1 = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));

  };
  handleClickShowPassword2 = () => {
    this.setState(state => ({ showconfirmpassword: !state.showconfirmpassword }));

  };
  handleClickShowPassword3 = () => {
    this.setState(state => ({ showcurrentpassword: !state.showcurrentpassword }));

  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="" onClick={this.handleClickOpen}> < Button>Change Password</Button></div>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          badgeContent={
            <div
              style={{ backgroundColor: "white", borderRadius: "50%" }}
            // onClick={HandleOpenFileChange}
            ></div>
          }
        >
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{<div style={{ display: 'flex', justifyContent: 'center' }}>Change Password</div>}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">


                <div >

                  <div style={{ paddingTop: "5%" }}>
                    <TextField
                      margin="dense"
                      size="small"
                      id="outlined-adornment-password"
                      variant="outlined"
                      type={this.state.showcurrentpassword ? 'text' : 'password'}
                      label="currentPassword"
                      value={this.state.currentpassword}
                      onChange={this.handleChange2('currentPassword')}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="Toggle password visibility"
                              onClick={this.handleClickShowPassword3}
                            >
                              {this.state.showcurrentpassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>


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
                              onClick={this.handleClickShowPassword1}
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
                              onClick={this.handleClickShowPassword2}
                            >
                              {this.state.showconfirmpassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>


                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: "8%" }}>
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button variant="contained" color="secondary" >      submit
      </Button>

                  </div>
                </div>

              </DialogContentText>
            </DialogContent>

          </Dialog>
        </Badge>
      </div>
    );
  }
}

export default ChangePassword;
