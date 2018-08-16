import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "typeface-roboto"
import store from "./store"
import { Provider } from "react-redux"
import registerServiceWorker from "./registerServiceWorker"
import { setCategories } from "./action-creators/categories"
import { fetchResources } from "./action-creators/resources"

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
store.dispatch(setCategories)
store.dispatch(fetchResources)
