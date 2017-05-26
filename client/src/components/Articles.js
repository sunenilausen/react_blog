import React, { Component } from 'react';
import Article from './Article';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '1rem'
  }
}

class Articles extends Component {
  constructor () {
    super()
    this.state = {}
    this.getArticles = this.getArticles.bind(this)
    this.getArticle = this.getArticle.bind(this)
  }
  componentDidMount () {
    this.getArticles()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getArticles () {
    this.fetch('api/v1/articles')
      .then(articles => {
        this.setState({articles: articles})
        this.getArticle(articles[0].id)
      })
  }
  getArticle (id) {
    this.fetch(`api/v1/articles/${id}`)
      .then(article => this.setState({article: article}))
  }

  render() {
      let {articles, article} = this.state
      return articles
      ? <div style={styles.root}>
          {Object.keys(articles).map((key) => {
            return <Article title={articles[key].title} content={articles[key].content}/>
          })} 
        </div>
      : <div>
          Nothing
        </div>
  }
}

export default Articles;
