import fetch from 'isomorphic-fetch'
import {
  GET_COMPANIES,
  EDIT_COMPANY_FORM_UPDATED,
  GET_COMPANY
} from '../constants'
import { find, propEq } from 'ramda'

const url = process.env.REACT_APP_BASE_URL + '/companies'

export const setCompanies = async (dispatch, getState) => {
  const companies = await fetch(url).then(res => res.json())

  // console.log('from ac', companies)
  dispatch({ type: GET_COMPANIES, payload: companies })
}

export const setCompany = _id => async (dispatch, getState) => {
  const companies = await dispatch(setCompanies)
  console.log(_id)
  const company = find(propEq('_id', _id), companies)

  console.log('company AC', company)
  dispatch({ type: GET_COMPANY, payload: company })
}

export const changeCompany = async (dispatch, getState) => {
  const changedCompany = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(getState().companies)
  }).then(res => res.json())

  console.log(changedCompany)
  dispatch({ type: EDIT_COMPANY_FORM_UPDATED, payload: changedCompany })
}
