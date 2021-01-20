import React from "react";
import Modal from "./../common/Modal.js";
import "./ProductCard.css";
const { useState, useEffect } = React;


function ProductCard (props) {
    const {products, searchstring} = props;
    const [isModalOpen, setModalIsOpen] = useState(false);
        
    console.log(useState("test")[1])
    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };
    return (
        <table className="table">
             <tbody>
         
                {
                    //1. consider only the first instance of every instance
                    //2. filter by the user's input string (regex)
                    //3. find the min & max price for each product
                products.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i).filter(product => product.product_name.match(new RegExp(searchstring, 'i'))).map(product => {    
                let min = Math.min(...product.variants.map(item => item.price)); 
                let max = Math.max(...product.variants.map(item => item.price)); 
        
                    return (
        
                        <tr key={product.id}>
                            <td> <img src={product.image_url}/></td>
                            <td>
                                <p><b> {product.product_name} </b>  </p> 
                                <p> {product.variants.length} variants </p>
                                <p> Rs {min} - Rs {max} </p> 
                                
                                <main>
                                    {isModalOpen && <Modal onRequestClose={toggleModal} name = {product.product_name} title = "Edit Product"/>}
                                    <button onClick={toggleModal} type="button">
                                        Edit
                                    </button>
                                    
                                </main>
                                <div className="placeholder" />
                            </td>
                        </tr>
                    );
               })}
        </tbody>
    </table>
    );
}

export default ProductCard;