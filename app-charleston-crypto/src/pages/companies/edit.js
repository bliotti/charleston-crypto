import React from 'react'
import { connect } from 'react-redux'
import { TextField, withStyles, Button } from '@material-ui/core'
import CircularIndeterminate from '../../components/CircularIndeterminate'
import MenuAppBar from '../../components/menuAppBar'
import { changeCompany, setCompany } from '../../action-creators/companies'
import {
  EDIT_COMPANY_FORM_UPDATED,
  EDIT_COMPANY_FORM_LOADED
} from '../../constants'
import { find, propEq } from 'ramda'
import Typography from '@material-ui/core/Typography'

// import { Link } from 'react-router-dom'

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
  componentDidMount() {
    const { companies, match, load } = this.props
    const currentCompany = find(propEq('_id', match.params.id), companies)
    console.log({ currentCompany })
    load(currentCompany)
  }
  render() {
    const { firstName, lastName, description, name, _id } = this.props.company
    const { textField, center } = this.props.classes
    const { onChange, onSubmit, history, match } = this.props

    if (!(match.params.id === _id)) {
      return (
        <React.Fragment>
          {/* <MenuAppBar title="Company Profile" backArrow history={history} /> */}
          <CircularIndeterminate
            style={{
              marginTop: 80
            }}
          />
        </React.Fragment>
      )
    }
    return (
      <center>
        <form className={center} onSubmit={onSubmit(history)}>
          <React.Fragment>
            <MenuAppBar title="Company Profile" backArrow history={history} />

            {/* <Typography variant="headline" component="h2">
              {`${name} Profile`}
            </Typography> */}

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
                marginTop: '80'
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
          <div className={center}>
            <Button variant="raised" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </center>
    )
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies,
    company: state.editCompany
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
    onSubmit: () => e => {
      e.preventDefault()
      dispatch(changeCompany)
    },
    load: company => dispatch(setCompany)
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)
export default connector(withStyles(styles)(CompanyView))
