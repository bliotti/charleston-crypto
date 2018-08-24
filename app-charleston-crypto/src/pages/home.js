import React from 'react'
import Typography from '@material-ui/core/Typography'
import ScrollableTabsButtonAuto from '../components/scrollableTabsButtonAuto'
import TitlebarGridList from '../components/titlebarGridList'
import MediaCard from '../components/mediaCard'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import withDrawer from '../components/withDrawer'
// import MenuAppBar from '../components/menuAppBar'
// import withDrawer from '../components/withDrawer'
// import SearchIcon from '@material-ui/icons/Search'

const styles = () => ({
  root: {
    width: '100%',
    backgroundColor: 'darkSlateGrey'
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

const Home = props => {
  const { history } = props

  return (
    <React.Fragment>
      <div
        className="body"
        style={{
          paddingTop: 0
        }}
      >
        <ScrollableTabsButtonAuto history={history} />

        <center>
          <img
            alt="home icon"
            className="App-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png"
          />

          <div style={{ paddingTop: 0, paddingBottom: 80 }}>
            <Typography variant="display2">Charleston Crypto</Typography>
            <br />
            <Typography variant="title">
              Your Guide to Charleston's CryptoCurrency
            </Typography>
            <Typography variant="title">& Blockchain Community</Typography>
          </div>

          <div
            style={{
              borderTop: '1px solid',
              paddingTop: '12px',
              borderColor: '#9e9e9e'
            }}
          />
          <div style={{ padding: 20 }} />

          <Link to="/companies" style={{ textDecoration: 'none' }}>
            <Typography variant="title"> Companies </Typography>
          </Link>

          <div style={{ padding: 20 }} />

          <MediaCard />

          <div style={{ padding: 20 }} />
          <Link
            to="/companies/new"
            style={{ textDecoration: 'text-decoration-line' }}
          >
            <Typography variant="body1"> Add A New Company </Typography>
          </Link>

          <div style={{ padding: 20 }} />

          <div
            style={{
              borderTop: '1px solid',
              paddingTop: '12px',
              borderColor: '#9e9e9e'
            }}
          />

          <div style={{ padding: 20 }} />

          <Link to="/resources" style={{ textDecoration: 'none' }}>
            <Typography variant="title"> Bitcoin Resources </Typography>
          </Link>

          <div style={{ padding: 20 }} />

          <TitlebarGridList />
        </center>
        <div style={{ padding: 20 }} />
      </div>

      {/* <SimpleBottomNavigation history={history} /> */}
    </React.Fragment>
  )
}
const mapStateToProps = () => ({})

const connector = connect(mapStateToProps)

export default withDrawer(connector(withStyles(styles)(Home)))

{
  /* <Link to="/dashboardpage"> Dashboard </Link>
<br />
<Link to="/market"> Market </Link>
<br />
<br /> */
}
