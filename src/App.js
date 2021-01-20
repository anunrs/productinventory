import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsPage from './components/products/ProductsPage';

function App() {
  return (
  <div>
  
    <Switch>

    <Route path ="/products" component = {ProductsPage} />
    <Route path ="/" component = {ProductsPage} />
   </Switch>
   
  </div>
     );
}

export default App;



