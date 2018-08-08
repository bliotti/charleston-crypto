import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "typeface-roboto"
import store from "./store"
import { Provider } from "react-redux"
import { setCategories } from "./action-creators/categories"

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById("root")
)

store.dispatch(setCategories)
