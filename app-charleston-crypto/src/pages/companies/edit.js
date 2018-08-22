import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TextField, Grid, Button, withStyles } from '@material-ui/core'
import MenuAppBar from '../../components/menuAppBar'
import { changeCompany } from '../../action-creators/companies'
import { EDIT_COMPANY_FORM_UPDATED } from '../../constants'

const styles = theme => ({
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    width: '50%'
  },
  margin: {
    margin: theme.spacing.unit
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
})

class CompanyView extends React.Component {
  // componentDidMount() {
  //   this.props.getCompanies()
  // }
  render() {
    const { firstName, lastName, description, name } = this.props.companies
    const { textField, center, margin, root, withoutLabel } = this.props.classes
    const { onChange, onSubmit, history } = this.props

    return (
      <center>
        <form className={center} onSubmit={onSubmit(history)}>
          <React.Fragment>
            <MenuAppBar title="Company Profile" />
            <TextField
              style={{
                marginTop: 80
              }}
              id="company_name"
              label="Company Name"
              value={name}
              onChange={e => onChange('name', e.target.value)}
              className={textField}
              autoComplete="off"
              required
            />
            <TextField
              style={{
                marginTop: 80
              }}
              id="description"
              label="Description"
              value={description}
              onChange={e => onChange('description', e.target.value)}
              className={textField}
              autoComplete="off"
              required
            />

            <TextField
              id="firstName"
              label="First Name"
              value={firstName}
              onChange={e => onChange('firstName', e.target.value)}
              className={textField}
              required
              autoComplete="off"
            />
            <TextField
              id="lastName"
              label="Last Name"
              value={lastName}
              onChange={e => onChange('lastName', e.target.value)}
              className={textField}
              required
              autoComplete="off"
            />
          </React.Fragment>
        </form>
      </center>
    )
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies
  }
}
const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch({
        type: EDIT_COMPANY_FORM_UPDATED,
        payload: { [field]: value }
      })
    },
    onSubmit: history => e => {
      e.preventDefault()
      dispatch(changeCompany)
    }
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)
export default connector(withStyles(styles)(CompanyView))
