import React, {useState} from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";


function ProductList ({ products }) {
    
    const [searchstring, setSearchstring] = useState("");
    function onChange(event) {
        const userinput = event.target.value.toLowerCase();
        console.log(userinput);
        setSearchstring(userinput);        
    }

    return (
        <>
            <input
                
                type="search"
                placeholder="Search"
                value={searchstring}
                onChange={onChange}
            /> <br/>

            <span>{products.length} items </span>
            <ProductCard products={products} searchstring={searchstring} />
            
        </>
    );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
