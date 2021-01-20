import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/products/";

export function getProducts() {
  console.log("baseURL");
  console.log(baseUrl);
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

