import fetch from 'isomorphic-fetch'
import { GET_COMPANIES, EDIT_COMPANY_FORM_UPDATED } from '../constants'

const url = process.env.REACT_APP_BASE_URL + '/companies'

export const setCompanies = async (dispatch, getState) => {
  const companies = await fetch(url).then(res => res.json())

  console.log(companies)
  dispatch({ type: GET_COMPANIES, payload: companies })
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
