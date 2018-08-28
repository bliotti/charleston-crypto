import React from 'react'
import ListItem from '@material-ui/core/ListItem'

import ListItemText from '@material-ui/core/ListItemText'

import Divider from '@material-ui/core/Divider'

import { Typography } from '@material-ui/core'

const ResourceListItem = resource => (
  <a
    href={`${resource.href}`}
    className="router-link"
    target="_"
    key={resource.key}
  >
    <ListItem button>
      <ListItemText
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignContent: 'center'
        }}
        primary={
          <Typography variant="button">{resource.titleWithComment}</Typography>
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
