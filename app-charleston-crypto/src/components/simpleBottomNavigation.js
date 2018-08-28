import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import BarChartIcon from '@material-ui/icons/BarChart'
import WorkIcon from '@material-ui/icons/Work'

const styles = {
  root: {
    width: '100%'
  }
}

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  }

  handleChange = value => {
    this.setState({ value })
  }

  render() {
    const { classes, history } = this.props
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          onClick={e => history.push('/companies')}
          label="Companies"
          icon={<WorkIcon />}
          color="primary"
        />
        <BottomNavigationAction
          onClick={e => history.push('/market/btcusd')}
          label="TradeView"
          icon={<BarChartIcon />}
          color="primary"
        />
        {/* <BottomNavigationAction label="Get Involved" icon={<BarChartIcon />} /> */}
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(SimpleBottomNavigation)
