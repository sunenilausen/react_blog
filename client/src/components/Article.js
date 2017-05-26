import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';

const styles = {
  root: {
    marginTop: '1rem',
    width: '100%'
  }
}

class Article extends Component {
  render() {
    return (
      <Card style={styles.root}>
        <CardHeader title={this.props.title}/>
        <CardText>
         {this.props.content}
        </CardText>
      </Card>
    );
  }
}

export default Article;
