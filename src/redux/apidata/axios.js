import axios from "axios";


// export const axiosInsatance = axios.create({
//     baseURL:'https://dummyjson.com/products',

// })

export default function Api(filter){
  return  axios.get(`https://dummyjson.com/products/search?q=${filter}`)
}