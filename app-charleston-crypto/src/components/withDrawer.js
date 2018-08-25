import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DRAWER_TOGGLED } from '../constants'
import SearchIcon from '@material-ui/icons/Search'

const withDrawer = function(PageComponent) {
  const WrappedDrawerPageComponent = props => {
    const MenuListItems = (
      <div>
        {/* <Link to="/" className="router-link">
          <ListItem button onClick={props.toggleDrawer(props.open)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link> */}
        <Link to="/resources/search" className="router-link">
          <ListItem button onClick={props.toggleDrawer(props.open)}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Resources" />
          </ListItem>
        </Link>
      </div>
    )

    return (
      <div>
        <PageComponent {...props} />
        <Drawer open={props.open} onClose={props.toggleDrawer(props.open)}>
          <div tabIndex={0} role="button">
            {MenuListItems}
          </div>
        </Drawer>
      </div>
    )
  }

  const mapStateToProps = state => {
    return { open: state.drawer.open }
  }
  const mapActionsToProps = dispatch => {
    return {
      toggleDrawer: open => () => {
        if (open) {
          dispatch({ type: DRAWER_TOGGLED })
        }
      }
    }
  }

  const connector = connect(
    mapStateToProps,
    mapActionsToProps
  )

  return connector(WrappedDrawerPageComponent)
}

export default withDrawer
