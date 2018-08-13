import React from "react"
import MenuAppBar from "../../components/menuAppBar"
import "../../App.css"
import withDrawer from "../../components/withDrawer"
import TitlebarGridList from "../../components/titlebarGridList"
import ResourceListItems from "../../components/resourceListItems"

const Resources = props => {
  const { history } = props

  return (
    <div style={{ paddingTop: 56 }}>
      <MenuAppBar title="Resources" history={history} />
      <ResourceListItems />
      {/* <TitlebarGridList /> */}
    </div>
  )
}

export default withDrawer(Resources)
