import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import AddProfile from './AddProfile';


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
import { modilfyUserdetails } from '../Service/UserDetailsService';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class EditProfile extends React.Component {
  state = {
    open: false,
    open1: false,

    firstName: '',
    lastName: '',
    email: '',
    messageinfo: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  firstNamehandleChange = prop => event => {
    this.setState({ firstName: event.target.value });
  };
  lastNamehandleChange = prop => event => {
    console.log(event.target.value);

    this.setState({ lastName: event.target.value });
  };
  emailhandleChange = prop => event => {
    this.setState({ email: event.target.value });
  };

  handleClick = () => {
    this.setState({ open1: true });
  };

  handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open1: false });
  };

  handleUpdateuserChange = () => {

    let userdetailmodel = {};

    userdetailmodel.firstName = this.state.firstName;
    userdetailmodel.lastName = this.state.lastName;
    userdetailmodel.email = this.state.email;
    let token = localStorage.getItem("Token");

    modilfyUserdetails(userdetailmodel, token).then(Response => {
      console.log(Response.data.message);
      this.setState({ messageinfo: Response.data.message });

      this.setState({ open1: true });




    }).catch((err) => {
      console.log(err);


    });



  }

  componentDidMount() {

    this.setState({ firstName: localStorage.getItem("firstName") });

    this.setState({ lastName: localStorage.getItem("lastName") });

    this.setState({ email: localStorage.getItem("email") });



  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="editiconcss" onClick={this.handleClickOpen}> < EditRoundedIcon /></div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{<div style={{ display: "flex", justifyContent: 'center' }}>User Profile</div>}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">



              <div style={{
                marginLeft: '7%'
              }}>          <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '4%'
              }}>
                  <Badge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right"
                    }}
                    badgeContent={
                      <AddProfile />

                    }
                  >
                    <Avatar
                      alt={localStorage.getItem("Name")}
                      src={localStorage.getItem("ProfilePic")}
                      style={{ width: "77px", height: "77px" }}
                    />
                  </Badge></div>


                <div className="userfirstlast">
                  <div style={{ width: '35%' }} >
                    <TextField
                      margin="dense"
                      size="small"
                      name="firstname"
                      id="outlined-required"
                      label="firstname"
                      variant="outlined" style={{ margin: 8 }}
                      value={this.state.firstName}

                      fullWidth
                      margin="normal"
                      InputProps={{
                        disableUnderline: true
                      }}
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
                      variant="outlined" style={{ margin: 8 }}
                      value={this.state.lastName}

                      fullWidth
                      margin="normal"
                      InputProps={{
                        disableUnderline: true
                      }}



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
                    variant="outlined" style={{ margin: 8 }}
                    value={this.state.email}

                    fullWidth
                    margin="normal"
                    InputProps={{
                      disableUnderline: true
                    }}

                    onChange={this.emailhandleChange('emailid')}


                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button onClick={this.handleClose}>Cancel</Button>
                  <Button variant="contained" color="secondary" onClick={this.handleUpdateuserChange} >      submit
      </Button>

                </div>
              </div>

            </DialogContentText>
          </DialogContent>

        </Dialog>


        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open1}
          autoHideDuration={6000}
          onClose={this.handleClose1}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.messageinfo}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose1}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              // className={classes.close}
              onClick={this.handleClose1}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>

    );
  }
}
EditProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default EditProfile;
