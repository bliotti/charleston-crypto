import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/withDrawer'
import TitlebarGridList from '../../components/titlebarGridList'

const CompaniesList = props => {
  const { history } = props
  return (
    <div style={{ paddingTop: 56 }}>
      <MenuAppBar title="Companies" history={history} searchImage />
      {/* <CategoryListItems /> */}
      <TitlebarGridList />
    </div>
  )
}

export default withDrawer(CompaniesList)
