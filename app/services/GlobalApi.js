// import axios from 'axios';
                      
// const baseUrl = "https://dummyjson.com/"
// const api_key = '1293b879f03edfa88656fbea2abc4c39'
// const url = 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'

// const getTrending = axios.get(baseUrl+"/trending/all/day?api_key="+api_key)

// const getMovieGenre=(id)=>axios.get(movieGenre+"&with_genres="+id)

// export default  {

//     getTrending , getMovieGenre
// }

export function fetchProducts() {
  return fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
      return null;
    });
}
// export async function fetchProducts(limit, skip) {
//   const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}&select=title,price`);
//   const data = await response.json();
//   return data;
// }
// utils/api.js
// const BASE_URL = "https://dummyjson.com"; // Replace with your API base URL

// export async function fetchProducts(limit, skip) {
//   try {
//     const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}&select=title,price`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }
