import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import { ChevronLeft } from '@material-ui/icons'
import { connect } from 'react-redux'
import { DRAWER_TOGGLED } from '../constants'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: '#363c4e'
  },
  flex: {
    flex: 1
  },
  firstButton: {
    marginLeft: -12,
    marginRight: 12
  },
  lastButton: {
    marginLeft: 12,
    marginRight: -12
  }
})

const MenuAppBar = props => {
  const { classes, history } = props

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <React.Fragment>
            {props.backArrow ? (
              <IconButton onClick={e => props.history.goBack()}>
                <ChevronLeft
                  className={classes.firstButton}
                  style={{ fontSize: '30', color: 'white' }}
                />
              </IconButton>
            ) : !props.menu ? (
              <IconButton
                className={classes.firstButton}
                color="inherit"
                aria-label="Menu"
                onClick={props.toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
          </React.Fragment>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {props.title}
          </Typography>
          {props.searchImage ? (
            <IconButton
              className={classes.firstButton}
              color="inherit"
              aria-label="Menu"
              onClick={props.goToSearch(history)}
            >
              <SearchIcon />
            </IconButton>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapActionsToProps = dispatch => {
  return {
    toggleDrawer: () => dispatch({ type: DRAWER_TOGGLED }),
    goToSearch: history => e => history.push('/resources/search')
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(withStyles(styles)(MenuAppBar))
