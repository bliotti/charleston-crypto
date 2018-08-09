import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { ChevronLeft } from "@material-ui/icons"
import { connect } from "react-redux"
import { DRAWER_TOGGLED } from "../constants"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: "black"
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
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <React.Fragment>
            {props.backArrow ? (
              <IconButton onClick={e => props.history.goBack()}>
                <ChevronLeft
                  className={classes.firstButton}
                  style={{ fontSize: "30", color: "white" }}
                />
              </IconButton>
            ) : (
              <IconButton
                className={classes.firstButton}
                color="inherit"
                aria-label="Menu"
                onClick={props.toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            )}
          </React.Fragment>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapActionsToProps = dispatch => {
  return {
    toggleDrawer: () => dispatch({ type: DRAWER_TOGGLED })
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(withStyles(styles)(MenuAppBar))
