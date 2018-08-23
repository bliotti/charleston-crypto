import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/withDrawer'
import TitlebarGridList from '../../components/titlebarGridList'
import MediaCard from '../../components/cardList'

const CompaniesList = props => {
  const { history } = props
  return (
    <div style={{ paddingTop: 56 }}>
      <MenuAppBar title="Companies" history={history} searchImage />
      <MediaCard {...props} />
      {/* <CategoryListItems /> */}
      {/* <TitlebarGridList /> */}
    </div>
  )
}

export default withDrawer(CompaniesList)
