import React, { Component } from 'react';
import '../App.css';
import Articles from '../components/Articles';
import Article from '../components/Article';
import Menu from '../components/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  }
});

// const Articles = (props) => {
//   <Route path={`${this.props.match.url}/:articleId`} component={Article}/>
// }

class BlogPage extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Articles/>
      </MuiThemeProvider>
    );
  }
}

export default BlogPage;
