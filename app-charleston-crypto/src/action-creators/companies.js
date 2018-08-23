import fetch from 'isomorphic-fetch'
import {
  GET_COMPANIES,
  EDIT_COMPANY_FORM_UPDATED,
  EDIT_COMPANY_FORM_LOADED
} from '../constants'
import { find, propEq } from 'ramda'

const url = process.env.REACT_APP_BASE_URL + '/companies'

export const setCompanies = async (dispatch, getState) => {
  const companies = await fetch(url).then(res => res.json())

  // console.log('from ac', companies)
  dispatch({ type: GET_COMPANIES, payload: companies })
}

export const setCompany = id => async (dispatch, getState) => {
  await dispatch(setCompanies)

  const companies = getState().companies

  console.log({ companies })

  const company = find(propEq('_id', id), companies)

  console.log({ company })

  dispatch({ type: EDIT_COMPANY_FORM_LOADED, payload: company })
}

export const changeCompany = history => async (dispatch, getState) => {
  const changedCompany = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(getState().editCompany)
  }).then(res => res.json())

  console.log(changedCompany)
  dispatch({ type: EDIT_COMPANY_FORM_UPDATED, payload: changedCompany })
}
