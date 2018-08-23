import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'
import MenuAppBar from '../../components/menuAppBar'

const menuHeight = 56

const Market = props => (
  <div>
    <MenuAppBar
      backArrow
      history={props.history}
      // title={props.match.params.id.substring(0, 3)}
    />
    <div
      style={{
        paddingTop: menuHeight
      }}
    >
      {console.log({ props })}

      <TradingViewWidget
        symbol={`${props.match.params.id}`}
        theme={Themes.DARK}
        timezone="America/New York"
        locale="en"
        height={`${667 - menuHeight}`}
        width="100%" //"100%"
        interval="D"
      />
    </div>
  </div>
)

export default Market
