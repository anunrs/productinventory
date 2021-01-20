import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsPage from './components/products/ProductsPage';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  return (
  <div>
    <Header text="Browse products"/>
    <Switch>
    
    <Route path ="/products" component = {ProductsPage} />
    <Route path ="/" component = {ProductsPage} />
   </Switch>
   <Footer />
   
  </div>
     );
}

export default App;



