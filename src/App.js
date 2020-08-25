import React, { Fragment, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createBowserHistory from "history/createBrowserHistory";

import "./styles.css";

import HelloWorld from "./HelloWorld";
import CounterButton from "./CounterButton";
import Button from "./Button";
import Form from "./Form";
import Content from "./Content";
import ExtButton from "./ExtButton";
import Menu from "./Menu";
import Navigation from "./Navigation";

const history = createBowserHistory();

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter history={history}>
          <Navigation />
          <Switch>
            <Route exact path="/" component={HelloWorld} />
            <Route path="/button" component={Button} />
            <Route path="/form" component={Form} />
            <Route path="/CounterButton" component={CounterButton} />
            <Route path="/Content" component={Content} />
            <Route path="/ExtButton" component={ExtButton} />
            <Route path="/Menu" component={Menu} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
