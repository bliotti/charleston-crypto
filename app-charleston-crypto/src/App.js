import React, { Component } from 'react'
import './App.css'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Categories from './pages/categories/index'
import Resources from './pages/resources/index'
import Companies from './pages/companies'
import CompanyView from './pages/companies/edit'
import ResourcesSearch from './pages/resources/search'
import Market from './pages/market/index'
import DashBoardPage from './pages/dash/index'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/resources/search" component={ResourcesSearch} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/companies" component={Companies} />
          <Route exact path="/companies/:id" component={CompanyView} />
          <Route exact path="/market/:id" component={Market} />
          <Route exact path="/dashboardpage" component={DashBoardPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
