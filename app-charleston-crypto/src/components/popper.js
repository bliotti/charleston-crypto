import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Popper from "@material-ui/core/Popper"
import { IconButton, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Fade from "@material-ui/core/Fade"
import Paper from "@material-ui/core/Paper"
import { Search } from "@material-ui/icons"

const styles = theme => ({
  root: {
    width: 500
  },
  typography: {
    padding: theme.spacing.unit * 2,
    color: white
  }
})

class PositionedPopper extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    placement: null
  }

  handleClick = placement => event => {
    const { currentTarget } = event
    this.setState(state => ({
      anchorEl: currentTarget,
      open: true,
      placement
    }))
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <IconButton
          className={classes.firstButton}
          color="inherit"
          aria-label="Menu"
          buttonRef={node => {
            this.anchorEl = node
          }}
          onClick={this.handleClick("left")}
        >
          <Search />
        </IconButton>

        <Popper
          open={this.state.open}
          anchorEl={this.anchorEl}
          placement="right"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Typography className={classes.typography}>
                The content of the Popper.
              </Typography>
            </Fade>
          )}
        </Popper>
      </div>
    )
  }
}

PositionedPopper.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PositionedPopper)
