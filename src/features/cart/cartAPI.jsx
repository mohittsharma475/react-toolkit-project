import axios from "axios"


export const getItems=async()=>{
    return axios.get("http://localhost:3000/cart");
}


export const addItems = async(item)=>{
    return axios.post("http://localhost:3000/cart",item)
}

export const updateItems  = async(product_id,item)=>{
    return axios.patch(`http://localhost:3000/cart/${product_id}`,item)
}
export const deleteItems  = async(product_id)=>{
    return axios.delete(`http://localhost:3000/cart/${product_id}`)
}