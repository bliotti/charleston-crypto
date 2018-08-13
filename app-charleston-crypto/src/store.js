import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { drawer } from "./reducers/drawer"
import { categories } from "./reducers/categories"
import { resources, resourcesSearchText } from "./reducers/resources"

const store = createStore(
  combineReducers({ drawer, categories, resources, resourcesSearchText }),
  applyMiddleware(thunk)
)

export default store
