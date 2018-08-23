import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import { getExchangeData } from '../../action-creators/exchangeData'
const menuHeight = 56

class Market extends React.Component {
  componentDidMount() {
    this.props.getExchangeData()
  }

  render() {
    const { history, match, exchangeData, ...rest } = this.props

    return (
      <div>
        <MenuAppBar
          backArrow
          history={history}
          title={match.params.id.substring(0, 3).toUpperCase()}
        />
        <div
          style={{
            paddingTop: menuHeight
          }}
        >
          {console.log({ exchangeData })}
          <TradingViewWidget
            symbol={`${match.params.id}`}
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
  }
}

const mapStateToProps = state => {
  return {
    exchangeData: state.exchangeData
  }
}

const mapActionsToProps = dispatch => {
  return {
    getExchangeData: () => dispatch(getExchangeData),
    goToSearch: history => e => history.push('/resources/search')
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(Market)
