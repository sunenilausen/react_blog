import React, { Component } from 'react';
import '../App.css';
import Articles from '../components/Articles';
import Menu from '../components/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  }
});

class Home extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Menu/>
          <Articles/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
