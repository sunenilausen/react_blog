import React, { Component } from 'react';
import '../App.css';
import Article from '../components/Article';
import Menu from '../components/Menu';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const styles = {
  Aligner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AlignerItem: {
    width: '60%',
  }
}


class BlogPage extends Component {
  constructor () {
    super()
    this.state = {}
    this.state.article = {}
    this.getArticle = this.getArticle.bind(this)
  }
  componentDidMount () {  
    this.getArticle()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.articleId !== this.props.match.params.articleId) {
      this.getArticle();
    }
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getArticle () {
    this.fetch(`/api/v1/articles/${this.props.match.params.articleId}`)
      .then(article => {
        this.setState({article: article})
      })
  }
  render() {
    return (
      <div style={styles.Aligner}>
        <Article style={styles.AlignerItem} article={this.state.article}/> 
      </div>
    );
  }
}

export default BlogPage;