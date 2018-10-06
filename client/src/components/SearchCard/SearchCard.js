import React, { Component } from 'react';
// import CardBtn from "../CardBtn";
import "./SearchCard.css";

// load up a series of button definitions
const Buttons = [
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
    buttons: Buttons
  };
  
  render() {
    return (

      <div
        className="card"
        // style={{
        //   backgroundImage: props.image ? `url(${props.image})` : "none"
        // }}
      >
        {/* {!this.props.image && <i className="fas fa-book-open" aria-hidden="true" />} */}
        
          <div className="card-header">
            <strong>
              <i className="fa fa-list-alt"></i> Search Parameters</strong>
          </div>
          <div className="card-body">

            {/* <!-- Here we create an HTML Form for handling the inputs--> */}
            <form>

              {/* <!-- Here we create the text box for capturing the search term--> */}
              <div className="form-group">
                <label htmlFor="search">Search Term:</label>
                <input type="text" className="form-control" id="search-term"></input>
              </div>

              {/* <!-- Here we capture the number of records that the user wants to retrieve  --> */}
              <div className="form-group">
                <label htmlFor="pwd">Number of Records to Retrieve:</label>
                <select id="article-count" value={this.state.value} className="custom-select" aria-labelledby="dropdownMenuButton">
                  <option value="1">1</option>
                  {/* <!-- Setting the option for 5 as default --> */}
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>

              {/* <!-- Here we capture the Start Year Parameter--> */}
              <div className="form-group">
                <label htmlFor="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" id="start-year"></input>
              </div>

              {/* <!-- Here we capture the End Year Parameter --> */}
              <div className="form-group">
                <label htmlFor="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year"></input>
              </div>

              {/* <!-- Here we have our final submit button --> */}
              <button type="submit" className="btn btn-default" id="run-search">
                <i className="fa fa-search"></i> Search</button>
              <button className="btn btn-default ml-2" id="clear-all">
                <i className="fa fa-trash"></i> Clear Results</button>

            </form>
          </div>

        {/* {this.state.buttons.map(btn => (
          <CardBtn
            id={btn.id}
            key={btn.id}
            data-value={btn.datavalue}
            title={btn.title}
            icon={btn.icon}
            // style={{ opacity: props.image ? 1 : 0 }}
            onClick={this.props.handleBtnClick}
          />
        ))} */}
      </div>

    )
  }
}

export default Card;
