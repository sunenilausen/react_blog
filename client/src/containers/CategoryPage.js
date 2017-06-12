import React, { Component } from 'react';
import '../App.css';
import Articles from '../components/Articles';
import Article from '../components/Article';
import Menu from '../components/Menu';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class CategoryPage extends Component {
  constructor () {
    super()
    this.state = {}
    this.getArticles = this.getArticles.bind(this)
  }
  componentDidMount () {  
    this.getArticles()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.categoryId !== this.props.match.params.categoryId) {
      this.getArticles();
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
  getArticles () {
    this.fetch(`/api/v1/categories/${this.props.match.params.categoryId}`)
      .then(articles => {
        this.setState({articles: articles})
      })
  }
  render() {
    return (
      <div>
        <h1> { this.props.match.params.categoryId } </h1>
        <Articles articles={this.state.articles}/>
      </div>
    );
  }
}

export default CategoryPage;
