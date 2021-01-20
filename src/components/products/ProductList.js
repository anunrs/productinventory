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
        <div>
            <input
                
                type="search"
                placeholder="Search"
                value={searchstring}
                onChange={onChange}
            /> <br/>

            <span>{products.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i).length} items </span>
            <ProductCard products={products} searchstring={searchstring} />
            
        </div>
    );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
