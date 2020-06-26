import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import PublishSharpIcon from '@material-ui/icons/PublishSharp';
import UploadEngineerData from './UploadEnginnerData';

const theme = createMuiTheme({

  overrides: {
    PrimarySearchAppBar:
    {
      search: {
        2: {
          borderRadius: '6px',
          backgroundColor: '#00BCD4',
        }
      },
      PrimarySearchAppBar: { inputRoot: { 24: { backgroundColor: '#00BCD4', } } }
    }



  }
});


const styles = theme => ({
  root: {
    width: '100%',
  },


  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },

});

class PrimarySearchAppBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }




  render() {
    const { classes } = this.props;



    return (
      <div className={classes.root} style={{ paddingTop: '5%' }}>
        <MuiThemeProvider theme={theme}>
          <div>
            <Toolbar><div>
              <div>

                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </div>
            </div>

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <UploadEngineerData />
                <AddCircleOutlinedIcon />
              </div>

            </Toolbar>

            <div>
            </div>

          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
