import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as productActions from "../../redux/actions/productActions";
import PropTypes from "prop-types";
import ProductList from "./ProductList";


function ProductsPage (props)  {
   console.log("products page start");
    useEffect( () => {
        console.log("use effect before action call");
        //load products
        props.loadProducts().catch(error => {
            alert("Loading products failed" + error);
         })
    
    }, []);
   console.log("products html");
   console.log(props.products.length);
    return (       
           <ProductList  products={props.products}  />
        
    );
}

ProductsPage.propTypes = {
    products: PropTypes.array.isRequired,
};



const mapDispatchToProps = {
     loadProducts: productActions.loadProducts
}



function mapStateToProps (state){
    
    return {
      products: state.products
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);