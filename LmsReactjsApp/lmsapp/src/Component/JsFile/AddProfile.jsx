
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../CssFile/ForgotPassword.css";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

import {
  TextField

} from "@material-ui/core";
class AddProfile extends React.Component {
  state = {
    open: false,
    file: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleFileChange = event => {
    console.log(event.target.value);
    this.setState({ file: event.target.files[0] });


  }
  handleFileSubmitChange = () => {
    const formData = new FormData();

    formData.append("file", this.state.filefile, this.state.file.name);

    console.log(formData);




  }

  render() {
    return (
      <div>

        <CameraAltIcon
          style={{ backgroundColor: "white", borderRadius: "50%" }}
          onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"><div style={{ display: 'flex', justifyContent: 'center' }}>{"upload user profile"}</div></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">

              <div>
                <TextField type="file"
                  onChange={this.handleFileChange}

                ></TextField>
              </div >
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '15%' }}>
                <Button variant="default" onClick={this.handleClose}
                >
                  Cancel
               </Button>
                <Button variant="contained" color="default" onClick={this.handleFileSubmitChange}
                >
                  Upload
        <CloudUploadIcon />
                </Button>

              </div>

            </DialogContentText>
          </DialogContent>

        </Dialog>
      </div>
    );
  }
}

export default AddProfile;
