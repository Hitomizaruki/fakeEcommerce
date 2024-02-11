import { useEffect,useState,useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Context } from "../components/Context"

function Products() {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState([])
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const {ratingArray,handleAddShop}=useContext(Context)

    const handleCate=async(category)=>{
        category!==null
        ?setProducts(data.filter(e=>e.category===category))
        :setProducts(data)
    }
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const res=await axios.get(`https://fakestoreapi.com/products`)
                const resCategory=await axios.get(`https://fakestoreapi.com/products/categories`)
                setData(res.data)
                setProducts(res.data)
                setCategory(resCategory.data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                setIsError(true)
            }
        

        }
        fetchData()
     },[])
    
   
 return<>
    {isLoading&&<div className="vh-100 d-flex justify-content-center align-items-center"><div class="loader"></div></div>}
    {isError&&<div className="vh-100 d-flex justify-content-center align-items-center">Something went wrong.Please try again</div>}
    {data.length>0
    &&<>
    <div className="row  align-items-center ">
            <ul className="nav nav-tabs px-3 my-2">
                <li className="nav-item">
                    <span className="nav-link active" onClick={()=>{handleCate(null)}}>All</span>
                </li>
            {category.length>0
            
            &&category.map(cate=>{
                return <li className="nav-item">
                    <span className="nav-link"style={{color:"black"}} onClick={()=>{handleCate(cate)}}>{cate}</span>
                </li>
            })}
                
            </ul>
            {products.length>0
            ?products.map(item=>{
                return <div  className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="text-dark border rounded text-center p-3 m-2 d-block">
                    <Link to={`/Products/${item.id}`} className="d-block fakeStore-card-Img w-50 mx-auto"style={{height:"140px"}}>
                        <img src={item.image} className="object-fit-contain w-100 h-100" alt="..."/>
                    </Link>
                    <h5 className='products-header'>{item.title}</h5>
                    <p className=''>
                    {item.category}
                    </p>
                    <div className="text-center m-2">
                        {ratingArray.map(rate=>{
                            return rate<=item.rating.rate
                            ?<i className="bi bi-star-fill"style={{marginRight:"10px",color:"gold"}}key={rate}></i>
                            :<i className="bi bi-star"style={{marginRight:"10px",color:"gold"}}key={rate}></i>
                        })}
                    </div>
                    <buttton className="btn d-block border p-2 rounded"onClick={()=>{handleAddShop(item)}}>MMK {item.price}</buttton>
                </div>
            </div>
            })
            :<>
            <div className="h-50 p-2 m-2 text-center">Products are not Found</div>
            </>
            }
            
          
            
    </div>
  
    </>}
 </>
}
export default Products