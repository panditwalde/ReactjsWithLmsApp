import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import LaptopIcon from '@material-ui/icons/Laptop';
import ZoomInSharpIcon from '@material-ui/icons/ZoomInSharp';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import AssessmentSharpIcon from '@material-ui/icons/AssessmentSharp';
import ViewHeadlineSharpIcon from '@material-ui/icons/ViewHeadlineSharp';
import "../CssFile/Dashboard.css";
import Recruitment from './Recruitment';
import Setting from './Setting';
import Requirement from './Requirement';
import Dashboard from './Dashboard';
import Assignment from './Assignment';
import Onboarding from './Onboarding';
import UserProfile from './UserProfile';
const drawerWidth = 240;

const theme = createMuiTheme({
  overrides: {
    MuiToolbar: { root: { justifyContent: "flex-end" } }


  }
});

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});


class PersistentDrawerLeft extends React.Component {
  state = {
    open: true,
    dashboard: false,
    recruitment: true,
    onborading: false,
    requirement: false,
    assignment: false,
    setting: false
  };

  handelDashboard = () => {

    this.setState({ dashboard: true });
    this.setState({ recruitment: false });
    this.setState({ onborading: false });
    this.setState({ requirement: false });
    this.setState({ assignment: false });
    this.setState({ setting: false });
  };
  handelRecruitment = () => {
    this.setState({ dashboard: false });
    this.setState({ recruitment: true });
    this.setState({ onborading: false });
    this.setState({ requirement: false });
    this.setState({ assignment: false });
    this.setState({ setting: false });
  };
  handelAssignment = () => {
    this.setState({ dashboard: false });
    this.setState({ recruitment: false });
    this.setState({ onborading: false });
    this.setState({ requirement: false });
    this.setState({ assignment: true });
    this.setState({ setting: false });



  };
  handelOnboarding = () => {
    this.setState({ dashboard: false });
    this.setState({ recruitment: false });
    this.setState({ onborading: true });
    this.setState({ requirement: false });
    this.setState({ assignment: false });
    this.setState({ setting: false });

  };
  handleDrawerOpen = () => {
  };
  handelRequirement = () => {
    this.setState({ dashboard: false });
    this.setState({ recruitment: false });
    this.setState({ onborading: false });
    this.setState({ requirement: true });
    this.setState({ assignment: false });
    this.setState({ setting: false });
  };

  handelSetting = () => {
    this.setState({ dashboard: false });
    this.setState({ recruitment: false });
    this.setState({ onborading: false });
    this.setState({ requirement: false });
    this.setState({ assignment: false });
    this.setState({ setting: true });

  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };



  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar style={{ backgroundColor: 'white' }}
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <MuiThemeProvider theme={theme}>

            <Toolbar disableGutters={!open} >
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
              </IconButton >
              <div
              >
                <UserProfile />
              </div>

            </Toolbar>
          </MuiThemeProvider>


        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton >
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List   >
            <ListItem
              button
              onClick={this.handelDashboard}

              key="Dashboard"
              className="over"
            >
              <ListItemIcon>
                <LaptopIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem
              button
              onClick={this.handelRecruitment}

              key="Recruitment"
              className="over"
            >
              <ListItemIcon>
                <ZoomInSharpIcon />

              </ListItemIcon>
              <ListItemText primary="Recruitment" />
            </ListItem>

            <ListItem
              button
              onClick={this.handelOnboarding}

              key="Onboarding"
              className="over"
            >
              <ListItemIcon>
                <AssessmentSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Onboarding" />
            </ListItem>

            <ListItem
              button
              onClick={this.handelRequirement}

              key="Requirement"
              className="over"
            >
              <ListItemIcon>
                <ViewHeadlineSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Requirement" />
            </ListItem>

            <ListItem
              button
              onClick={this.handelAssignment}

              key="Assignment"
              className="over"
            >
              <ListItemIcon>
                <SwapVertIcon />
              </ListItemIcon>
              <ListItemText primary="Assignment" />
            </ListItem>


            <ListItem className="over"
              button
              onClick={this.handelSetting}

              key="Setting"

            >
              <ListItemIcon>
                <SettingsRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItem>
          </List>
        </Drawer>
        <main

          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          {this.state.dashboard === true ? (<Dashboard />) : (null)}

          {this.state.recruitment === true ? (<Recruitment />) : (null)}
          {this.state.onborading === true ? (<Onboarding />) : (null)}
          {this.state.requirement === true ? (<Requirement />) : (null)}
          {this.state.assignment === true ? (<Assignment />) : (null)}
          {this.state.setting === true ? (<Setting />) : (null)}



        </main>

      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
