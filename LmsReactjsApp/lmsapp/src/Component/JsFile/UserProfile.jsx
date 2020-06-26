import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Popover from '@material-ui/core/Popover';
import "../CssFile/UserProfile.css";
import {
  Avatar,
  TextField,
  Dialog,
  DialogTitle,

  DialogContent,
  DialogContentText
} from "@material-ui/core";
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  overrides: {

    element: { style: { top: '65px' } },

  }


});

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

class UserProfile extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };


  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <MuiThemeProvider theme={theme}>


          <span>
            <Avatar
              alt={localStorage.getItem("Name")}
              src={localStorage.getItem("ProfilePic")}
              aria-owns={open ? 'simple-popper' : undefined}
              aria-haspopup="true"
              variant="contained"
              onClick={this.handleClick} />
          </span>
          <Popover
            id="simple-popper"
            open={open}
            anchorEl={anchorEl}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}

          >
            <Typography className={classes.typography} style={{
              top: '52px',
              left: '1058px'
            }}>

              <div className="mainprofile">
                <div className="firstcss">
                  <div style={{
                    marginLeft: '37%'
                  }}>

                    <Avatar
                      alt={localStorage.getItem("Name")}
                      src={localStorage.getItem("ProfilePic")}
                      style={{ width: "77px", height: "77px" }}
                    />
                  </div>
                  <div > < EditProfile /></div>
                </div >

                <div className="namecss">{localStorage.getItem("Name")}</div>
                <div className="emailcss" >{localStorage.getItem("email")}</div>
                <Divider />
                <div className="btncss">
                  <ChangePassword />
                  <Button variant="contained" >
                    Logout
      </Button>



                </div>

              </div>
            </Typography>
          </Popover>
        </MuiThemeProvider>
      </div>
    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserProfile);
