import React, { Component } from 'react'
import './App.css'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Categories from './pages/categories/index'
import Resources from './pages/resources/index'
import ResourcesSearch from './pages/resources/search'
import { MarketViewTheme, MarketView } from './pages/market/index'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/resources/search" component={ResourcesSearch} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/marketview" component={MarketView} />
          <Route exact path="/marketviewtheme" component={MarketViewTheme} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
