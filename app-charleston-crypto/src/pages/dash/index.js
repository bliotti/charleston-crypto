import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import '../../App.css'
import withDrawer from '../../components/withDrawer'
import ResourceListItems from '../../components/resourceListItems'
import Dashboard from './Dashboard'
const DashBoardPage = ({ history }) => (
  <div style={{ paddingTop: 56 }}>
    {/* <MenuAppBar title="Resources" history={history} searchImage /> */}
    {/* <ResourceListItems /> */}
    <Dashboard />
  </div>
)

export default withDrawer(DashBoardPage)
