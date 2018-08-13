import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Avatar from "@material-ui/core/Avatar"
import { head } from "ramda"
import { Link } from "react-router-dom"

const ResourceListItem = resource => (
  <div key={resource._id}>
    <Link to={`/resources/${resource._id}`} className="router-link">
      <ListItem button>
        <ListItemIcon>
          <Avatar>{head(resource.title)}</Avatar>
        </ListItemIcon>
        <ListItemText>
          <Typography variant="headline">{resource.title}</Typography>
          <Typography variant="caption">{resource.title}</Typography>
        </ListItemText>
      </ListItem>
    </Link>
    <Divider />
  </div>
)

export default ResourceListItem
