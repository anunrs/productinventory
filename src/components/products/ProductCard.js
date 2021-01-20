import React from "react";

function ProductCard (props) {
const {products, searchstring} = props;

    return (
        <table className="table">
             <tbody>
         
                {products.filter(product => product.product_name.includes(searchstring)).map(product => {
                let min = Math.min(...product.variants.map(item => item.price)); 
                let max = Math.max(...product.variants.map(item => item.price)); 
        
                    return (
        
                        <tr key={product.id}>
                            <td> <img src={product.image_url}/></td>
                            <td>
                                <p> {product.product_name} </p> 
                                <p> {product.variants.length} variants </p>
                                <p> Rs {min} - Rs {max} </p> 
                            </td>
                        </tr>
                    );
               })}
        </tbody>
    </table>
    );
}

export default ProductCard;