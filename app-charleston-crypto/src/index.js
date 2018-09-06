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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import {
  white,
  amber,
  grey,
  darkBlack,
  deepPurple
} from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#ffffff' },
    secondary: grey,
    textColor: amber
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App dispatch={store.dispatch} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

// registerServiceWorker()
store.dispatch(setCompanies)
store.dispatch(fetchResources)
