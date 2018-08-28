import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { map } from 'ramda'
import { Icon } from '@material-ui/core'
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

const TitlebarGridList = props => {
  const { classes, history } = props

  const li = tile => {
    return (
      <GridListTile
        key={tile._id}
        onClick={e => history.push('/resources/search')}
      >
        {/* <img src={tile.img} alt={tile.name} /> */}
        {/* <Icon style={{ color: 'black' }}>{tile.icon}</Icon> */}

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

  return (
    <div className={props.classes.root}>
      <GridList cols={2} cellHeight={48} className={props.classes.gridList}>
        {map(li, props.categories)}
      </GridList>
    </div>
  )
}

const mapStateToProps = state => {
  return { categories: state.categories }
}

export default withStyles(styles)(connect(mapStateToProps)(TitlebarGridList))
