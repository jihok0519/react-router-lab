import React from "react";
import { Link } from 'react-router-dom'

function Stocks(props) {
  let stockData = props.stockData.map((data, index) => {
    return <Link key={index} to={`/stocks/${data.symbol}`}>
        <li >{data.name}</li>
      </Link>
  });
  return <ul>{stockData}</ul>;
}

export default Stocks;