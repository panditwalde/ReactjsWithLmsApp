import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PublishSharpIcon from '@material-ui/icons/PublishSharp';



import {
  TextField

} from "@material-ui/core";
import { uploadCsvfile } from '../Service/HiringService';
const theme = createMuiTheme({
  overrides: {

    MuiDialog: {
      paperWidthSm: {
        paddingRight: '3%',
        paddingLeft: '3%',
        paddingBottom: '3%'


      }
    },

    MuiButton: {
      contained: {
        backgroundColor: 'rgb(95, 136, 36)',
        color: '#eae3e3de',
      }

    },
    MuiSvgIcon: { root: { marginLeft: '7%' } }


  }
});

class AlertDialog extends React.Component {
  state = {
    open: false,
    file: "",
    filePreviewUrl: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFileChange = e => {


    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        filePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
    //   this.setState({csvfile:e.target.files[0]});
  };
  handleFileSubmitChange = () => {


    console.log(this.state.file);
    console.log(this.state.filePreviewUrl);



    uploadCsvfile(this.state.filePreviewUrl).then(response => {
      console.log(response);


    }).catch(err => {
      console.log(err);




    });





  };

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>


          <div onClick={this.handleClickOpen}> <PublishSharpIcon /></div>

          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            style={{ padding: '6%' }}
          >
            <DialogTitle id="alert-dialog-title" style={{ paddingBottom: '20%' }}><div style={{ display: 'flex', justifyContent: 'center' }}>{"Upload Engineer Data"}</div></DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">

                <div>
                  <TextField type="file"
                    onChange={this.handleFileChange}

                  ></TextField>
                </div >
                <div style={{ paddingTop: '6%' }}>File Format: XLSX</div>
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
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AlertDialog;
