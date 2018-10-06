// import React from "react";
import React, { Component } from 'react';
import Wrapper from "../Wrapper";
import CardBtn from "../CardBtn";
import "./Card.css";

// load up a series of button definitions
const ArticleButtons = [
  {
    "id": 1,
    "datavalue": "read",
    "title": "Read",
    "icon": "fas fa-book-open"
  },
  {
    "id": 2,
    "datavalue": "save",
    "title": "Save",
    "icon": "fas fa-thumbtack"
  },
  {
    "id": 3,
    "datavalue": "delete",
    "title": "Delete",
    "icon": "far fa-trash-alt"
  }
];

class Card extends Component {

  ///////////////////////////
  // handle state
  ///////////////////////////

  // load the images from the json array
  state = {
    articleButtons: ArticleButtons
  };
  
  render() {
    return (

      <div
        className="card article-card"
        // style={{
        //   backgroundImage: props.image ? `url(${props.image})` : "none"
        // }}
      >
        {!this.props.image && <i className="fas fa-book-open" aria-hidden="true" />}
        
        <Wrapper>
          {this.state.articleButtons.map(articleBtn => (
            <CardBtn
              id={articleBtn.id}
              key={articleBtn.id}
              data-value={articleBtn.datavalue}
              title={articleBtn.title}
              icon={articleBtn.icon}
              // style={{ opacity: props.image ? 1 : 0 }}
              onClick={this.props.handleBtnClick}
            />
          ))}
        </Wrapper>
      </div>

    )
  }
}

export default Card;
