import React from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import MenuAppBar from "../../components/menuAppBar"
import { Link } from "react-router-dom"
import "../../App.css"
import withDrawer from "../../components/withDrawer"
import CategoryListItems from "../../components/categoryListItems"

const Categories = () => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar title="Categories" />
    <CategoryListItems />
  </div>
)

export default withDrawer(Categories)
