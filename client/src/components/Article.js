import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import ReactMarkdown from 'react-markdown'
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class Article extends Component {
  render() {
    return (
      <div>
        <h1 article-title> { this.props.article.title } </h1>
        <ReactMarkdown source={ this.props.article.content }/>
      </div>
    );
  }
}

export default Article;
