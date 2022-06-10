import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import './App.css';
import { Route } from 'react-router-dom';
import stockData from './components/stock-data';
import StocksInfo from './pages/StocksInfo';


const App = (props) => {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
       <Home />
     </Route>
     <Route path="/about">
       <About />
       </Route>
       <Route
            path="/stocks"
            render={props => <Stocks {...props} stockData={stockData} />}
          />
       <Route
            path="/stocks/:symbol"
            render={props => <StocksInfo stockData={stockData} {...props} />}
          />
    </div>
  );
}

export default App;
