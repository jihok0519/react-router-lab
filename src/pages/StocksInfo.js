import React from 'react'

const StockInfo = (props) => {
  const stock = props.stockData.filter( data => data.symbol === props.match.params.symbol)[0]
  return (
    <div className="stockInfo">
      <h3>Name: {stock.name}</h3>
      <h3>Price: {stock.lastPrice}</h3>
    </div>
  )
}


export default StockInfo;