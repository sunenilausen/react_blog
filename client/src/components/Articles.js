import React, { Component } from 'react';
import ArticleCard from './ArticleCard';

class Articles extends Component {
  

  render() {
      let articles = this.props.articles
      return articles
      ? <div className="horizontal-container" width="300px">
          {Object.keys(articles).map((key) => {
            return <ArticleCard title={articles[key].title} content={articles[key].content} id={key}/>
          })} 
        </div>
      : <div>
          Nothing
        </div>
  }
}

export default Articles;
