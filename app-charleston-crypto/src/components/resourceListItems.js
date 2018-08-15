import React from "react"
import { connect } from "react-redux"
import { map } from "ramda"
import { Link } from "react-router-dom"
import { ListItem, ListItemText, List } from "@material-ui/core"
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

const li = resource => {
  return (
    <Link
      to={`/categories/${resource._id}`}
      className="router-link"
      key={resource._id}
    >
      <ListItem button>
        <ListItemText primary={resource.title} />
      </ListItem>
    </Link>
  )
}

const ResourceListItems = props => (
  <div>
    <List>{map(li, props.resources)}</List>
  </div>
)

const mapStateToProps = state => {
  return { resources: state.resources }
}

export default withStyles(styles)(connect(mapStateToProps)(ResourceListItems))
