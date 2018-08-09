import React from "react"
import MenuAppBar from "../../components/menuAppBar"
import "../../App.css"
import withDrawer from "../../components/withDrawer"
import TitlebarGridList from "../../components/titlebarGridList"

const Categories = () => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar title="Categories" />
    {/* <CategoryListItems /> */}
    <TitlebarGridList />
  </div>
)

export default withDrawer(Categories)
