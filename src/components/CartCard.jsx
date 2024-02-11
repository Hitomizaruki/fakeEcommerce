import { useContext, useState } from "react"
import { Context } from "./Context"

export const CartCard=({e})=>{
    const [state,setState]=useState(1)
    const {ratingArray,carts,setAddCarts}=useContext(Context)
    
    // decrease count
    const handleDecrea=()=>{
        setState(param=>param-1)
        setAddCarts(carts.map(t=>{
            if(t.productId===e.id){
                return {...t,count:state-1}
            }
            return t
        }))
    }

    // increase count
    const handleIncrea=()=>{
        setState(param=>param+1)
        setAddCarts(carts.map(t=>{
            if(t.productId===e.id){
                return {...t,count:state+1}
            }
            return t
        }))
    }

    return <div class="row pt-3">
    <div class="col-4">
      <div className="w-50 h-50 mx-auto">
        <img src={e.image} alt="" className="object-fit-contain w-100 h-100" />
      </div>
    </div>

    <div class="col-8">
        <h5>{e.title}</h5>
        <p>{e.description}</p>
        <div className='d-flex justify-content-between'>
            <span>
            {ratingArray.map(rate=>{
                return rate<=e.rating.rate
                ?<i className="bi bi-star-fill"style={{marginRight:"10px",color:"gold"}}key={rate}></i>
                :<i className="bi bi-star"style={{marginRight:"10px",color:"gold"}}key={rate}></i>
            })}
            </span>
            <span>MMK {e.price*state}</span>
        </div>
        <div className='d-flex'>
            <button 
            disabled={state==1?true:false}
            className="btn btn-secondary p-0 px-1 me-2 mt-2"
            onClick={handleDecrea}>
                <i className="bi bi-dash"></i>
            </button>
            
            <span 
            className=' px-2 rounded me-2 mt-2  bg-secondary text-light'>{state}</span>

            <button 
            className="btn btn-secondary p-0 px-1 me-2 mt-2"
            onClick={handleIncrea}>
                <i className="bi bi-plus"></i>
            </button>
        </div>
    </div>
</div>
}
export default CartCard