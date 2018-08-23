import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { connect } from 'react-redux'
import { getExchangeData } from '../action-creators/exchangeData'
import { map } from 'ramda'
import SearchIcon from '@material-ui/icons/Search'
// import { Link } from 'react-router-dom'
// import Typography from '@material-ui/core/Typography'
// import IconButton from '@material-ui/core/IconButton'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

// TODO links

class ScrollableTabsButtonAuto extends React.Component {
  componentDidMount() {
    this.props.getExchangeData()
  }

  render() {
    const { classes, goToSearch, history, exchangeData } = this.props

    const li = coin => (
      <Tab
        label={
          coin.symbol +
          ' ' +
          coin.current_price.toLocaleString(undefined, {
            style: 'currency',
            currency: 'USD'
          })
        }
        onClick={e => history.push(`/market/${coin.symbol}usd`)}
        key={coin.symbol}
        style={{ textDecoration: 'none' }}
        exchangeData={exchangeData}
      />
    )

    return (
      <div className={classes.root}>
        <AppBar position="sticky" color="default">
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="off"
          >
            <Tab
              icon={<SearchIcon />}
              className={classes.firstButton}
              color="inherit"
              aria-label="Menu"
              onClick={goToSearch(history)}
            />
            {map(li, exchangeData)}
          </Tabs>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    exchangeData: state.exchangeData
  }
}

const mapActionsToProps = dispatch => {
  return {
    getExchangeData: () => dispatch(getExchangeData),
    goToSearch: history => e => history.push('/resources/search')
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(withStyles(styles)(ScrollableTabsButtonAuto))
