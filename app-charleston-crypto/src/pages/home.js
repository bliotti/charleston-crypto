import React from "react"
import Typography from "@material-ui/core/Typography"
import MenuAppBar from "../components/menuAppBar"
import "../../src/App.css"
import withDrawer from "../components/withDrawer"
import ScrollableTabsButtonAuto from "../components/scrollableTabsButtonAuto"

const Home = props => {
  const { history } = props
  return (
    <React.Fragment>
      <div
        className="body"
        style={{
          paddingTop: 56
        }}
      >
        <MenuAppBar title="" history={history} />
        <ScrollableTabsButtonAuto />
        <center>
          <img
            alt="home icon"
            className="App-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png"
          />
          <div style={{ paddingTop: 12, paddingBottom: 80 }}>
            <Typography variant="display1">Charleston Crypto</Typography>
          </div>
          <div style={{ paddingTop: 12 }} />
        </center>
      </div>
    </React.Fragment>
  )
}

export default withDrawer(Home)
