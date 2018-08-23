import {
  GET_COMPANIES,
  EDIT_COMPANY_FORM_LOADED,
  EDIT_COMPANY_FORM_UPDATED,
  EDIT_COMPANY_FORM_SAVE_SUCCEEDED
} from '../constants'
import { merge } from 'ramda'

const initialCompany = {
  _id: '',
  type: '',
  name: '',
  description: '',
  firstName: '',
  lastName: '',
  site: '',
  icon: ''
}

export const companies = (state = [], action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return action.payload
    default:
      return state
  }
}

export const editCompany = (state = initialCompany, action) => {
  switch (action.type) {
    case EDIT_COMPANY_FORM_LOADED:
      return action.payload
    case EDIT_COMPANY_FORM_SAVE_SUCCEEDED:
      return initialCompany
    case EDIT_COMPANY_FORM_UPDATED:
      return merge(state, action.payload)
    default:
      return state
  }
}
