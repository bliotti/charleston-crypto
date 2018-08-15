import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import { connect } from "react-redux"
import { getExchangeData } from "../action-creators/exchangeData"
import { GET_EXCHANGE_DATA } from "../constants"
import kmd from "../../node_modules/cryptocurrency-icons/dist/svg/color/kmd.svg"

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
})

class ScrollableTabsButtonAuto extends React.Component {
  componentDidMount() {
    this.props.getExchangeData()
  }

  render() {
    const { classes, exchangeData } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
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
  return { getExchangeData: () => dispatch(getExchangeData) }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(withStyles(styles)(ScrollableTabsButtonAuto))
