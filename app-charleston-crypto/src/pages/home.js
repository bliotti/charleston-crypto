import React from "react"
import Typography from "@material-ui/core/Typography"
import MenuAppBar from "../components/menuAppBar"
import "../../src/App.css"
import withDrawer from "../components/withDrawer"

const Home = () => (
  <div
    className="body"
    style={{
      padding: 75
    }}
  >
    <MenuAppBar title="Charleston Crypto" />

    <center>
      <img
        alt="home icon"
        className="App-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png"
      />
      <div style={{ paddingTop: 12, paddingBottom: 150 }}>
        <Typography variant="display1">Charleston Crypto</Typography>
      </div>
      <div style={{ paddingTop: 12 }} />
    </center>
  </div>
)

export default withDrawer(Home)
