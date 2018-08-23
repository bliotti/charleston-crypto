import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import blue from '@material-ui/core/colors/blue'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
})

function CircularIndeterminate(props) {
  const { classes } = props
  return (
    <div>
      <CircularProgress
        className={classes.progress}
        style={{ color: blue[500] }}
        thickness={7}
      />
    </div>
  )
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CircularIndeterminate)
