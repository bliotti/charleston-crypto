import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { drawer } from './reducers/drawer'
import { categories } from './reducers/categories'
import { companies, editCompany, company } from './reducers/companies'
import { resources, resourcesSearchText } from './reducers/resources'
import { exchangeData } from './reducers/exchangeData'

const store = createStore(
  combineReducers({
    drawer,
    categories,
    resources,
    resourcesSearchText,
    exchangeData,
    companies,
    company,
    editCompany
  }),
  applyMiddleware(thunk)
)

export default store
