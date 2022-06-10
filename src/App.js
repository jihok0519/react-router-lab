import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import './App.css';
import { Route } from 'react-router-dom';

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
    </div>
  );
}

export default App;
