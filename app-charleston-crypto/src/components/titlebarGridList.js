import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { map } from 'ramda'
// import { Link } from "react-router-dom"
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 800,
    height: 180 * 5
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})

const li = tile => {
  return (
    <GridListTile key={tile._id}>
      {/* <img src={tile.img} alt={tile.name} /> */}
      {/* <Icon style={{ color: "grey" }}>{tile.icon}</Icon> */}
      <GridListTileBar title={tile.name} style={{ color: 'green' }} />
    </GridListTile>
  )
}

const TitlebarGridList = props => {
  //const { classes } = props

  return (
    <div className={props.classes.root}>
      <GridList cellHeight={40} className={props.classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }} />
        {map(li, props.categories)}
      </GridList>
    </div>
  )
}

const mapStateToProps = state => {
  return { categories: state.categories }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(connect(mapStateToProps)(TitlebarGridList))
