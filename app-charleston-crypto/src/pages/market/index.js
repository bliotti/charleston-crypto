import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'
import MenuAppBar from '../../components/menuAppBar'

const menuHeight = 56

const Market = props => (
  <div>
    <MenuAppBar backArrow />
    <div style={{ paddingTop: menuHeight }}>
      <TradingViewWidget
        symbol={`${props.match.params.id}`}
        theme={Themes.DARK}
        timezone="America/New York"
        style="1"
        locale="en"
        height={`${667 - menuHeight}`}
        width="375"
        interval="D"
      />
    </div>
  </div>
)

export default Market
