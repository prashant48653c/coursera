import axios from "axios"

export const getCategory=async()=>{
    
      
    const response=await axios.get("https://coursera55.onrender.com/category")
    let categories=response.data
    return categories
}  

export const getCourse=async()=>{
    const response=await axios.get("https://coursera55.onrender.com/course")
    return response.data
} 