import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

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
