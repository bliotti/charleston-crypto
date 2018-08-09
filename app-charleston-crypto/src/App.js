import React, { Component } from "react"
import "./App.css"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import Home from "./pages/home"
import Categories from "./pages/categories/index"
import Resources from "./pages/resources/index"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
