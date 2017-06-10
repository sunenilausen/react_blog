import React, { Component } from 'react';
import ArticleCard from './ArticleCard';

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
  

  render() {
      let articles = this.props.articles
      return articles
      ? <div style={styles.root}>
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
