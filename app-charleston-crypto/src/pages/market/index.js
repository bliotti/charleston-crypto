import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'

const Market = () => (
  <div>
    <TradingViewWidget symbol="COINBASE:BTCUSD" theme={Themes.DARK} />
  </div>
)

export default Market
