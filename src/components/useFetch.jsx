import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch=(limit)=>{
    const [state,setState]=useState({
        isLoading:true,
        isError:false,
        data:[]
    })
    const fetchData=async(param)=>{
        const api=await param!==undefined
        ?`https://fakestoreapi.com/products?limit=${limit}`
        :`https://fakestoreapi.com/products`
    
        try {
            const res=await axios.get(api)
            setState({...state,isLoading:false,data:res.data})
        } catch (error) {
            setState({...state,isLoading:false,isError:true})
        }
    }
   useEffect(()=>{
    fetchData(limit)
   },[])

    return state
}