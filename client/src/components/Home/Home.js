// import React from "react";
import React, { Component } from 'react';
import Wrapper from "../Wrapper";
import Card from "../Card";
import "./Home.css";
import articles from "./articlesTemp.json";

class Home extends Component {

  ///////////////////////////
  // handle state
  ///////////////////////////

  // load the images from the json array
  state = {
    articles: articles
  };
  
  render() {
    return (
    // const Home = () => (
      <section className="home">
        HOME SECTION
        <Wrapper>
          {this.state.articles.map(articleItem => (
            <Card
              id={articleItem.id}
              key={articleItem.id}
              title={articleItem.title}
              date={articleItem.date}
              url={articleItem.url}
              // onClick={ e => this.handleImageSelected(e, articleItem.id)}
            />
          ))}
        </Wrapper>
      </section>
    // );
    )
  }
}

export default Home;
