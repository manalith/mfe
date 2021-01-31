import React from 'react'
import history from "./history"
import {Route, Router, Switch} from "react-router-dom";
import Home from './home/Home'

export default class App extends React.Component {

  render() {
    return (
      <div className="main-app">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}
