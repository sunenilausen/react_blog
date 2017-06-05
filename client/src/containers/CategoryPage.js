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
    if (prevProps.name !== this.props.name) {
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
    this.fetch(`/api/v1/categories/${this.props.name}`)
      .then(articles => {
        this.setState({articles: articles})
      })
  }
  render() {
    return (
      <div>
        <h2> { this.props.name } </h2>
        <Articles articles={this.state.articles}/>
      </div>
    );
  }
}

export default CategoryPage;
