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
                        <h2>Fake Store  Website</h2>
                        <p>
                       Your life simplified by a smarter, better wardrobe.
Our collection is sustainably made and designed to last.
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
                        <h2> Fashion Finds</h2>
                        <p>
                          Discover bags that are not only a style statement but also an incredible value. From iconic classics to trendy pieces, our selection offers a range of designer bags to fit any taste and budget.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 text-secondary text-center">
                        <i className="bi bi-shop fs-3"></i>
                        <h2> Most Popular</h2>
                        <p>
                           Our most coveted list features timeless treasures, showcasing must-have bags from luxury icons like Louis Vuitton, Chanel, Gucci, and beyond.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 text-secondary text-center">
                        <i className="bi bi-house fs-3"></i>
                        <h2> Over 50% Off Retail</h2>
                        <p>
                            Uncover unbeatable savings with our selection of items that are discounted over 50% off their original retail price. These are not just deals; they are steals.
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
                         Our Fake Store  bring the person in “personal.” They are virtual style experts -- real people -- trained to assist you with any questions or concerns you may have. Among many things, they can help you select the best item at your price point, review hardware and textiles, compare items that you are considering, and even verify important date codes. 
                        </p>
                        <div className="my-3">Category: Men</div>
                        <button className="btn btn-outline-success">Learn More</button>
                    </div>
                </section>
    </>}
    </>
}
export default Home
