import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import ReactMarkdown from 'react-markdown'
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

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
          <ReactMarkdown source={this.props.content}/>
        </CardText>
         <CardActions>
          <FlatButton label="Edit" href={`/article/${this.props.id}`}/>
          <Toggle 
            label="Visible" 
            labelPosition="right"
            style={{margin: 20}}
           />
        </CardActions>
      </Card>
    );
  }
}

export default Article;
