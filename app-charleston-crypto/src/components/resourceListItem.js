import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import Typography from "@material-ui/core/Typography"
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { head } from 'ramda'
import { Link } from 'react-router-dom'

//search page

const ResourceListItem = resource => (
  <a
    href={`${resource.href}`}
    className="router-link"
    target="_"
    key={resource.key}
  >
    <ListItem button>
      <ListItemIcon>
        <Avatar>{head(resource.category)}</Avatar>
      </ListItemIcon>
      <ListItemText
        primary={resource.titleWithComment}
        secondary={resource.category}
      />
    </ListItem>
    <Divider />
  </a>
)

export default ResourceListItem
