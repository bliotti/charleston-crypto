import {
  SET_COMPANIES,
  EDIT_COMPANY_FORM_LOADED,
  EDIT_COMPANY_FORM_UPDATED,
  EDIT_COMPANY_FORM_SAVE_SUCCEEDED,
  COMPANY_DELETE_SUCCEECED,
  NEW_COMPANY_SAVE_SUCCEEDED,
  NEW_COMPANY_FORM_UPDATED,
  NEW_COMPANY_FORM_CLEARED,
  NEW_COMPANY_SAVE_FAILED
} from '../constants'
import { merge } from 'ramda'
import { initialCompanies } from '../assets/initialState'

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
    case SET_COMPANIES:
      return action.payload || initialCompanies
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
    case COMPANY_DELETE_SUCCEECED:
      return initialCompany
    default:
      return state
  }
}

export const newCompany = (state = initialCompany, action) => {
  switch (action.type) {
    case NEW_COMPANY_FORM_UPDATED:
      return merge(state, action.payload)
    case NEW_COMPANY_SAVE_FAILED:
      return merge(state, action.payload)
    // case EDIT_COMPANY_SAVE_FAILED:
    //   return merge(state, {
    //     isError: true,
    //     isSaving: false,
    //     errorMsg: action.payload
    //   })
    // case NEW_COMPANY_SAVE_STARTED:
    //   return merge(state, {
    //     isError: false,
    //     isSaving: true,
    //     errorMsg: ""
    //   })
    case NEW_COMPANY_SAVE_SUCCEEDED:
      return initialCompany

    case NEW_COMPANY_FORM_CLEARED:
      return initialCompany
    default:
      return state
  }
}
