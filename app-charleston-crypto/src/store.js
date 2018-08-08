import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { drawer } from "./reducers/drawer"
import { categories } from "./reducers/categories"

const store = createStore(
  combineReducers({ drawer, categories }),
  applyMiddleware(thunk)
)

export default store
