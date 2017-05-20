import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';

class Article extends Component {
  render() {
    return (
      <Card>
        <CardHeader title={this.props.title}/>
        <CardText>
         {this.props.content}
        </CardText>
      </Card>
    );
  }
}

export default Article;
