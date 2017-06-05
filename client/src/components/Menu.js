import React, {Component} from 'react';
import {AppBar, IconButton, IconMenu, MenuItem, FlatButton, Toggle, Tabs, Tab, ToolbarGroup, Toolbar} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {Link} from 'react-router-dom'

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" style={buttonStyle}/>
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton ><MoreVertIcon color="white" /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */

class Menu extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={
            <ToolbarGroup>
              <Link to={'/categories/Code'}>
                <MenuItem primaryText="Code" style={buttonStyle} />
              </Link>
             <Link to={'/categories/Life'}>
                <MenuItem primaryText="Life" style={buttonStyle} />
              </Link>
              <Link to={'/categories/Food'}>
                <MenuItem primaryText="Food" style={buttonStyle} />
              </Link>
              <Link to={'/categories/Art'}>
                <MenuItem primaryText="Art" style={buttonStyle} />
              </Link>
              <Link to={'/categories/Other'}>
                <MenuItem primaryText="Other" style={buttonStyle} />
              </Link>
              {this.state.logged ? <Logged /> : <Login />}
            </ToolbarGroup>
          }
        >
          
        </AppBar>
        
      </div>
    );
  }
}

const buttonStyle = {
  color: 'white'
}
export default Menu;