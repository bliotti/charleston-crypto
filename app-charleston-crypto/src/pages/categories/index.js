import React from "react"
import MenuAppBar from "../../components/menuAppBar"
import "../../App.css"
import withDrawer from "../../components/withDrawer"
import TitlebarGridList from "../../components/titlebarGridList"

const Categories = props => {
  const { history } = props
  return (
    <div style={{ paddingTop: 56 }}>
      <MenuAppBar title="Categories" history={history} />
      {/* <CategoryListItems /> */}
      <TitlebarGridList />
    </div>
  )
}

export default withDrawer(Categories)
