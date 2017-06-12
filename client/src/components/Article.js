import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import ReactMarkdown from 'react-markdown'
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class Article extends Component {
  render() {
    return (
      <div className="markdown-body">
        <h2> { this.props.article.title } </h2>
        <span className="date"> { this.props.article.created_at } </span>
        <ReactMarkdown source={ this.props.article.content }/>
      </div>
    );
  }
}

export default Article;
