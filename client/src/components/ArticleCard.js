import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import ReactMarkdown from 'react-markdown'
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router-dom';

class ArticleCard extends Component {
  render() {
    return (
      <Card className="fixed-size">
        <Link to={`/blog/${this.props.title}`}>
          <CardHeader title={this.props.title}/>
        </Link>
        <CardText>
          <ReactMarkdown source={this.props.content}/>
        </CardText>
      </Card>
    );
  }
}

export default ArticleCard;
