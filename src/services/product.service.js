import axios from "axios";

export const getProductDatas = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => callback(response.data))
    .catch((error) => console.error("Error fetching products:", error));
};

export const getProductDetails = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => callback(response.data))
    .catch((error) => console.error("Error fetching products:", error));
};
