import React from "react"
import { connect } from "react-redux"
import { map } from "ramda"
import { Link } from "react-router-dom"
import { ListItem, Icon, ListItemText, List } from "@material-ui/core"

import { withStyles } from "@material-ui/core/styles"

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

const li = category => {
  return (
    <Link to={`/categories/${category._id}`} className="router-link">
      <ListItem button>
        <Icon style={{ color: "grey" }}>{category.icon}</Icon>
        <ListItemText primary={category.name} secondary={category.shortDesc} />
      </ListItem>
    </Link>
  )
}

const CategoryListItems = props => (
  <div>
    <List>{map(li, props.categories)}</List>
  </div>
)

const mapStateToProps = state => {
  return { categories: state.categories }
}

export default withStyles(styles)(connect(mapStateToProps)(CategoryListItems))
