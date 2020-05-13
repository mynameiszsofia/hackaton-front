import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import SignUp from "./pages/signup/signup";
/* import SignIn from "./pages/signin/singin"; */
import MapScreen from "./pages/mapScreen/mapScreen";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/mapScreen" exact component={MapScreen} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
