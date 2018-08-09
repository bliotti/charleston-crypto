import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { drawer } from "./reducers/drawer"
import { categories } from "./reducers/categories"
import { resources } from "./reducers/resources"

const store = createStore(
  combineReducers({ drawer, categories, resources }),
  applyMiddleware(thunk)
)

export default store
