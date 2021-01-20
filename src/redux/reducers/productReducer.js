import initialState from "./initialState";

export default function productReducer(state=initialState.products, action) {
    console.log("action");
    console.log(action);
    console.log(state);
    switch (action.type) {
        
        case "LOAD_PRODUCTS_SUCCESS":
            return action.products;  
         
        default:
            return state;
            
    }
}