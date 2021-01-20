import * as productApi from "../../api/productApi"


export function loadProductsSuccess (products) {
    return { type: "LOAD_PRODUCTS_SUCCESS", products: products};
}

export function loadProducts () {
    console.log("load products");
    return function (dispatch) {
        return productApi.getProducts().then(products => {
            dispatch(loadProductsSuccess(products));
        }).catch(error => {
            
            throw error;
        })
    }
}
