import Home from './Home';
import Products from './Products';
import LoginPage from './LoginPage';
import SingleProduct from './SingleProduct';
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignupPage from './SignUpPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product" component={SingleProduct} />
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/signup" component={SignupPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
