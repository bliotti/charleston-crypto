import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import Typography from "@material-ui/core/Typography"
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { head } from 'ramda'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'

//search page

const ResourceListItem = resource => (
  <a
    href={`${resource.href}`}
    className="router-link"
    target="_"
    key={resource.key}
  >
    <ListItem button>
      {/* <ListItemIcon>
        <Avatar
          style={{
            color: 'black'
          }}
        >
          {head(resource.category)}
        </Avatar>
      </ListItemIcon> */}

      <ListItemText
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        primary={
          <Typography variant="button">{`${
            resource.titleWithComment
          }`}</Typography>
        }
        secondary={
          <Typography variant="body1">{`${resource.category}`}</Typography>
        }
      />
    </ListItem>
    <Divider />
  </a>
)

export default ResourceListItem
