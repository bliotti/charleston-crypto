import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TextField, Grid, Button, withStyles } from '@material-ui/core'
import MenuAppBar from '../../components/menuAppBar'

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
    alignItems: 'center'
  }
})

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MenuAppBar title="Company" />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({})
const mapActionsToProps = dispatch => ({})

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)
export default connector(withStyles(styles)(Company))
