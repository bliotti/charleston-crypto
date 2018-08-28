import React from 'react'
import { connect } from 'react-redux'
import { TextField, withStyles, Button } from '@material-ui/core'
// import SaveIcon from "@material-ui/icons/Save"
import MenuAppBar from '../../components/menuAppBar'
import { setCompany, createNewCompany } from '../../action-creators/companies'
import {
  // EDIT_COMPANY_FORM_UPDATED,
  NEW_COMPANY_FORM_UPDATED,
  NEW_COMPANY_FORM_CLEARED
} from '../../constants'
// import { find, propEq } from "ramda"

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
    width: '70%',
    margin: 5
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

class CompanyNew extends React.Component {
  componentDidMount() {
    const {
      // companies,
      //  match,
      //   load,
      formClear
    } = this.props
    formClear()
    // load(match.params.id)
  }
  render() {
    const { firstName, lastName, description, name, img } = this.props.company
    const { textField, center } = this.props.classes
    const { onChange, saveEvent, history, formClear } = this.props

    return (
      <div
        style={{
          paddingTop: 0,
          backgroundRepeat: 'noRepeat',
          height: '100%',
          width: '100%'
        }}
      >
        <center>
          <MenuAppBar title="Company Profile" backArrow history={history} />
          <form
            className={center}
            autoComplete="off"
            onSubmit={saveEvent(history)}
          >
            <TextField
              style={{
                marginTop: 120
              }}
              id="company_name"
              label="Company Name"
              value={name}
              onChange={e => onChange('name', e.target.value)}
              className={textField}
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
              required
            />

            <TextField
              id="firstName"
              label="First Name"
              value={firstName}
              onChange={e => onChange('firstName', e.target.value)}
              className={textField}
              autoComplete="off"
              required
            />
            <TextField
              id="lastName"
              label="Last Name"
              value={lastName}
              onChange={e => onChange('lastName', e.target.value)}
              className={textField}
              autoComplete="off"
              required
            />
            <TextField
              id="img"
              label="img URL"
              value={img}
              onChange={e => onChange('img', e.target.value)}
              className={textField}
              autoComplete="off"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline'
              }}
            >
              <Button
                color="primary"
                type="submit"
                variant="raised"
                aria-label="submit"
                // className="fab-button"
                style={{ margin: 25 }}
              >
                SUBMIT
              </Button>

              <Button
                color="secondary"
                type="textSecondary"
                onClick={e => {
                  history.goBack()
                  formClear()
                }}
                style={{ margin: 25 }}
              >
                CANCEL
              </Button>
            </div>
          </form>
        </center>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies,
    company: state.newCompany
  }
}
const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch({
        type: NEW_COMPANY_FORM_UPDATED,
        payload: { [field]: value }
      })
    },
    saveEvent: history => e => {
      e.preventDefault()
      dispatch(createNewCompany(history))
    },
    load: id => dispatch(setCompany(id)),
    formClear: () => dispatch({ type: NEW_COMPANY_FORM_CLEARED })
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)
export default connector(withStyles(styles)(CompanyNew))
