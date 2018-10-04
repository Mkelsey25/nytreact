import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron';

class App extends Component {

  
  //////////////////////////////////////////////
  // handle communicating with express server
  //////////////////////////////////////////////
  state = {
    response: "",
    appName: "New York Times Search",
    appSubtitle: "",
    appIcon: "far fa-newspaper",
    copyrightYear: "2018"
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  /////////////////////////
  //
  /////////////////////////
  render() {
    return (
      <div className="App container">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <p className="App-intro">{this.state.response}</p>
        <Jumbotron
          title={this.state.appName}
          titleicon={this.state.appIcon}
          message={this.state.appSubtitle}
        >
        </Jumbotron>
        <Home>  
          
        </Home>
        <Footer
          year={this.state.copyrightYear}
        >
        </Footer>
      </div>
    );
  }
}

export default App;
