import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Context } from "../components/Context"

function Product() {
   const {productId}=useParams()
   const [product, setProduct] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   const [isError, setIsError] = useState(false)
   const {ratingArray,handleAddShop}=useContext(Context)

   const fetchData=async()=>{
    try {
        const res=await axios.get(`https://fakestoreapi.com/products/${productId}`)
        setProduct(res.data)
        setIsLoading(false)
    } catch (error) {
        setIsLoading(false)
        setIsError(true)
    }
    

   }

    useEffect(()=>{
        setIsLoading(true)
        fetchData()
    },[productId])
 return<>
    {isLoading&&<div className="vh-100 d-flex justify-content-center align-items-center"><div class="loader"></div></div>}
    {isError&&<div className="vh-100 d-flex justify-content-center align-items-center">Something went wrong.Please try again</div>}
    {product!==null
    &&<>
       <section className="row py-5 align-items-center ">
            <div className="col-sm-12 col-md-6 text-secondary ">
                <div className="w-50 h-50 mx-auto">
                <img src={product.image} className="object-fit-contain w-100 h-100" alt="..."/>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 text-secondary ">
                <h2>{product.title}</h2>
                <p>
                   {product.description}
                </p>
                <div className="my-3">Category: {product.category}</div>
                <div className=" my-3">
                    <span style={{marginRight:"10px"}}>Rating :</span>
                    <span>
                    {ratingArray.map(rate=>{
                        return rate<=product.rating.rate
                        ?<i className="bi bi-star-fill"style={{marginRight:"10px",color:"gold"}}key={rate}></i>
                        :<i className="bi bi-star"style={{marginRight:"10px",color:"gold"}}key={rate}></i>
                    })}
                    </span>
                </div>
                <button className="btn btn-outline-success"onClick={()=>{handleAddShop(product)}}>MMK {product.price}</button>
            </div>
        </section>
    </>
    }
  
 </>
}
export default Product