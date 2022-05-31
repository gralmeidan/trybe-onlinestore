import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCart, addToCart, removeFromCart } from './services/cartStorage';
import Main from './pages/Main';

class App extends React.Component {
  state = {
    cartItems: {}
  };

  componentDidMount = () => {
    this.setState(() => ({
      cartItems: getCart()
    }));
  };

  addToCart = (product) => {
    addToCart(product);
    this.setState(() => ({
      cartItems: getCart()
    }));
  };

  removeFromCart = (product, entirely) => {
    removeFromCart(product, entirely);
    this.setState(() => ({
      cartItems: getCart()
    }));
  };
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route 
            path="/" 
            render={(props) => (
              <Main 
                {...props}
                cartItems={this.state.cartItems}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
              />
            )}  
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
