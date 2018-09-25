import fetch from 'isomorphic-fetch'
import {
  SET_COMPANIES,
  EDIT_COMPANY_FORM_UPDATED,
  EDIT_COMPANY_FORM_LOADED,
  NEW_COMPANY_FORM_UPDATED,
  COMPANY_DELETE_SUCCEECED,
  NEW_COMPANY_SAVE_FAILED
} from '../constants'
import { find, propEq } from 'ramda'
import { initialCompanies } from '../assets/initialState'

const url = process.env.REACT_APP_BASE_URL + '/companies'

export const setCompanies = async (dispatch, getState) => {
  const companies = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  console.log('from ac', companies)
  dispatch({
    type: SET_COMPANIES,
    payload: companies //!companies ? initialCompanies : companies
  })
}

export const setCompany = id => async (dispatch, getState) => {
  await dispatch(setCompanies)
  const companies = getState().companies
  const company = find(propEq('_id', id), companies) || {}

  dispatch({ type: EDIT_COMPANY_FORM_LOADED, payload: company })
}

export const changeCompany = history => async (dispatch, getState) => {
  const changedCompany = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(getState().editCompany)
  }).then(res => res.json())

  await dispatch(setCompanies)
  history.push('/')

  console.log(changedCompany)
  dispatch({ type: EDIT_COMPANY_FORM_UPDATED, payload: changedCompany })
}

export const createNewCompany = history => async (dispatch, getState) => {
  const newCompany = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(getState().newCompany)
  })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: NEW_COMPANY_SAVE_FAILED,
        payload: JSON.stringify(getState().newCompany.payload) //'Failed to save company. Please refresh and try again.'
      })
    )
  await dispatch(setCompanies)
  history.push('/')

  console.log('newCompany', newCompany)
  dispatch({ type: NEW_COMPANY_FORM_UPDATED, payload: newCompany })
  console.log('st', JSON.stringify(getState()))
}

// export const deleteCompany = (id,history) => (dispatch, getState) => {

//   fetch(`${url}/${id}`, {

//     method: 'DELETE'

//   }).then(res => res.json()).then(deleteResponse => {
//     console.log("deleteResponse", deleteResponse)
//   }
//   history.push('/')

//   console.log(newCompany)
//   dispatch({ type: NEW_COMPANY_FORM_UPDATED, payload: newCompany })
// }

export const deleteCompany = (id, history) => (dispatch, getState) => {
  // dispatch({ type: EVENT_DELETING_STARTED })

  fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(async deleteResponse => {
      console.log('deleteResponse', deleteResponse)

      dispatch({
        type: COMPANY_DELETE_SUCCEECED,
        payload: 'Deleted!'
      })
      await dispatch(setCompanies)
      history.push('/')
    })
}
