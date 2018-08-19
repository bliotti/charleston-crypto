import React from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/withDrawer'
import ResourceListItem from '../../components/resourceListItem'
import TextField from '@material-ui/core/TextField'
import { RESOURCES_SEARCH_TEXT_UPDATED } from '../../constants'

import {
  curry,
  filter,
  compose,
  contains,
  map,
  test,
  split,
  toLower
} from 'ramda'

const searchResources = curry(
  (searchTxt, r) =>
    searchTxt === ''
      ? true
      : compose(
          contains(toLower(searchTxt)),
          map(
            word =>
              test(/,$/, word) ? word.substring(0, word.length - 1) : word
          ),
          split(' '),
          toLower
        )(r.titleWithComment + ' ' + r.category)
)

const ResourcesSearch = props => {
  const { history, searchTxt, onTextFieldChange } = props

  return (
    <div style={{ paddingTop: 56 }}>
      <MenuAppBar title="Resources" backArrow history={history} />
      <TextField
        id="search"
        label="Search"
        type="search"
        value={searchTxt}
        onChange={e => onTextFieldChange(e.target.value)}
        margin="normal"
        style={{
          width: '50%',
          marginLeft: 16,
          MarginTop: 16,
          marginBottom: 8
        }}
      />
      <List>
        {map(resource => ResourceListItem(resource), props.resources)}
      </List>
    </div>
  )
}

const mapStateToProps = state => ({
  resources: filter(
    searchResources(state.resourcesSearchText),
    state.resources
  ),
  searchTxt: state.resourcesSearchText
})

const mapActionsToProps = dispatch => {
  return {
    onTextFieldChange: value => {
      dispatch({
        type: RESOURCES_SEARCH_TEXT_UPDATED,
        payload: value
      })
    }
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default withDrawer(connector(ResourcesSearch))
