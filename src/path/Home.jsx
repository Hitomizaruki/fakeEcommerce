import { useEffect, useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Context } from "../components/Context"

function Home() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const {ratingArray,handleAddShop}=useContext(Context)
    
    useEffect(()=>{
        setIsLoading(true)
      
        const fetchData=async()=>{
        try {
            const res=await axios.get(`https://fakestoreapi.com/products?limit=3`)
            setProducts(res.data)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setIsError(true)

        }
        }
        fetchData()
     },[])
    
    useEffect(()=>{
        const hiddenElements=document.querySelectorAll(".hidden")
        const obsever=new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                }else{
                    entry.target.classList.remove('show')
        
                }
            })
        })
        hiddenElements.forEach(el=>obsever.observe(el))
    },[products])
    return<>
    {isLoading&&<div className="vh-100 d-flex justify-content-center align-items-center"><div class="loader"></div></div>}
    {isError&&<div className="vh-100 d-flex justify-content-center align-items-center">Something went wrong.Please try again</div>}
    {products.length>0
    &&<>
    <section className="row vh-100 align-items-center hidden pt-5">
                    <div className="col-sm-12 col-md-6 col-lg-6 text-secondary ">
                        <h2>Fake Store Shopping Website</h2>
                        <p>
                            Webbootstrap. The most popular front-end framework for developing responsive,
                            mobile first projects on the web. 165k. GitHub. package. MIT licensed. 
                        </p>
                        <div className="btn btn-outline-success">Get Start</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 text-secondary ">
                        <img src="https://nativeteams.com/brochure/images/pages/cards/iPhone.png" className="fakeStore-card-Img img-fluid rounded mx-auto" alt="..."/>
                    </div>
                </section>
                <section className="row py-5 align-items-center hidden">

                    <div className="col-sm-12 col-md-6 col-lg-4 text-secondary text-center">
                        <i className="bi bi-heart-fill fs-3 "></i>
                        <h2> Extend utilities</h2>
                        <p>
                            Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project.
                            Import Bootstrap first, then use Sass map functions to modify, add, or remove utilities.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 text-secondary text-center">
                        <i className="bi bi-shop fs-3"></i>
                        <h2> Discount price</h2>
                        <p>
                            Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project.
                            Import
                             Bootstrap first, then use Sass map functions to modify, add, or remove utilities.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 text-secondary text-center">
                        <i className="bi bi-house fs-3"></i>
                        <h2> Event Deliver House</h2>
                        <p>
                            Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project.
                            Import Bootstrap first, then use Sass map functions to modify, add, or remove utilities.
                        </p>
                    </div>
                </section>
                <section className="row py-5 align-items-center hidden">
                    <h1 className="text-center text-secondary ">Products</h1>
                  
                    {products.length>0
                    &&products.map(item=>{
                        return <div  className="col-sm-12 col-md-6 col-lg-4 ">
                        <div  className="text-dark border rounded text-center p-3 m-2">
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
                    }
              
                    <div className=" d-flex justify-content-center my-3 ">
                    <Link to={'/Products'} className="btn btn-outline-secondary">See More</Link>
                    </div>
                    
                </section>
                <section className="row py-5 align-items-center hidden">
                    <div className="col-sm-12 col-md-6 text-secondary ">
                        <img src="https://d3qy1pxzcopg5z.cloudfront.net/wp-content/uploads/2020/11/19204846/Content-Monetization-Header-Graphic-1.png" className="fakeStore-card-Img img-fluid rounded mx-auto" alt="..."/>
                    </div>
                    <div className="col-sm-12 col-md-6 text-secondary ">
                        <h2>Tearm and group</h2>
                        <p>
                            Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project.
                            Import Bootstrap first, then use Sass map functions to modify, add, or remove utilities.
                        </p>
                        <div className="my-3">Category: Men</div>
                        <button className="btn btn-outline-success">Learn More</button>
                    </div>
                </section>
    </>}
    </>
}
export default Home