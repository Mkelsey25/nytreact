import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";
import Footer from "./components/Footer";
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

        <p className="App-intro">{this.state.response}</p>

        <Jumbotron
          title={this.state.appName}
          titleicon={this.state.appIcon}
          message={this.state.appSubtitle}
        >
        </Jumbotron>

        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            {/* both /articles and /articles/:id begin with /roster */}
            <Route path='/articles' component={Saved}/>
          </Switch>
        </Router>

        <Footer
          year={this.state.copyrightYear}
        >
        </Footer>
      </div>
    );
  }
}

export default App;
