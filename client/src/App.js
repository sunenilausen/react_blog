import React, { Component } from 'react';
import './App.css';
import Articles from './components/Articles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Articles/>
      </MuiThemeProvider>
    );
  }
}

export default App;
