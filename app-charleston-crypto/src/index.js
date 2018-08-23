import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import 'typeface-roboto'
import store from './store'
// import registerServiceWorker from './registerServiceWorker'
import { setCompanies } from './action-creators/companies'
import { fetchResources } from './action-creators/resources'

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
)

// registerServiceWorker()
store.dispatch(setCompanies)
store.dispatch(fetchResources)
