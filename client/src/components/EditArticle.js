import React, { Component } from 'react';
import '../App.css';
import Article from '../components/Article';
import ReactMarkdown from 'react-markdown'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class EditArticle extends Component {
  constructor(props) {
    super(props)
    this.state = { article: {title: '', content: '' } }
  }

  componentDidMount() {
    this.setState({article: this.props.article})
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  patchArticle () {
    return fetch(`/api/v1/articles/${this.props.article.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.props.article.id,
        title: this.state.article.title,
        content: this.state.article.content,
      })
    })
  }

  handleContentChange(event, newValue) {
    this.setState({article: {title: this.state.article.title, content: newValue}})
  }

  handleTitleChange(event, newValue) {
    this.setState({article: {title: newValue, content: this.state.article.content}})
  }

  render() {
    return (
      <div>
        <h1> Edit Article </h1>
        <Card>
          <CardHeader title="Editor" />
          <CardText>
             <TextField
              value={ this.state.article.title }
              onChange={ this.handleTitleChange.bind(this) }
              floatingLabelText="Title"
              fullWidth={true}
            />
            <br />
            <TextField
              value={ this.state.article.content }
              onChange={ this.handleContentChange.bind(this) }
              floatingLabelText="Content"
              multiLine={true}
              rows={4}
              fullWidth={true}
            />
          </CardText>
          <CardActions>
            <FlatButton 
              label="Save" 
              onTouchTap={ this.patchArticle.bind(this) }
            />
            <FlatButton label="Delete" />
          </CardActions>
        </Card>
        <br />
        <Card>
          <CardHeader title="Preview" />
          <Article article={ this.state.article } /> 
          <br />
        </Card>
      </div>
    );
  }
}

export default EditArticle;