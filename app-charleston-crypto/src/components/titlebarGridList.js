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
    backgroundColor: 'transparent'
  },
  gridList: {
    width: '96%',
    height: 'auto',
    spacing: '-2%'
  },
  icon: {
    // color: 'rgba(255, 255, 255, 0.54)'
    color: 'rgba(255, 255, 255, 0.01)'
  }
})

const li = tile => {
  return (
    <GridListTile key={tile._id}>
      {/* <img src={tile.img} alt={tile.name} /> */}
      {/* <Icon style={{ color: "grey" }}>{tile.icon}</Icon> */}
      <GridListTileBar
        title={tile.name}
        style={{
          backgroundColor: 'black',

          borderColor: '#9e9e9e',
          borderRadius: 10
        }}
      />
    </GridListTile>
  )
}

const TitlebarGridList = props => {
  //const { classes } = props

  return (
    <div className={props.classes.root}>
      <GridList cols={3} cellHeight={80} className={props.classes.gridList}>
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
