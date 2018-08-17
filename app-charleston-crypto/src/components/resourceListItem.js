import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
// import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Avatar from "@material-ui/core/Avatar"
import { head } from "ramda"
import { Link } from "react-router-dom"

//search page

const ResourceListItem = resource => (
  <Link
    to={`/resources/${resource._id}`}
    className="router-link"
    key={resource._id}
  >
    <ListItem button>
      <ListItemIcon>
        <Avatar>{head(resource.title)}</Avatar>
      </ListItemIcon>
      <ListItemText primary={resource.titleWithComment} />
    </ListItem>
    <Divider />
  </Link>
)

export default ResourceListItem
