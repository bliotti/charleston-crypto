import React from 'react'
import '../../App.css'
import withDrawer from '../../components/withDrawer'
import Dashboard from './Dashboard'
// import ResourceListItems from '../../components/resourceListItems'
// import MenuAppBar from '../../components/menuAppBar'
const DashBoardPage = ({ history }) => (
  <div style={{ paddingTop: 56 }}>
    {/* <MenuAppBar title="Resources" history={history} searchImage /> */}
    {/* <ResourceListItems /> */}
    <Dashboard />
  </div>
)

export default withDrawer(DashBoardPage)
