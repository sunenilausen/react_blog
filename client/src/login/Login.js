import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
  }
}

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  }
});

class Login extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.root}>
          <Card>
            <CardHeader title="Login" style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            }}/>
            <CardText>
              <form style={{
                display: 'flex', 
                justifyContent: 'space-around',
                flexDirection: 'column',
              }}>
                <TextField floatingLabelText="Email"/>
                <TextField floatingLabelText="Password"/>
                <CardActions>
                  <FlatButton label='Submit' type="submit" value="Submit" />
                  <FlatButton label='Forgot Password?' type="submit" value="Submit" />
                </CardActions>
              </form>
            </CardText>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
