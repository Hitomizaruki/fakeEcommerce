import { useEffect,useState,useContext} from 'react'
import axios from 'axios'
import { Context } from "../components/Context"
import { useFetch } from '../components/useFetch'
import CartCard from '../components/CartCard'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Dropdown, DropdownItem } from 'react-bootstrap'
function AddCard() {
   const [shopCarts,setShopCarts]=useState([])
   const [total,setTotal]=useState(0)
   const [email,setEmail]=useState('')
   const [phoneNumber,setPhoneNumber]=useState(0)
   const {carts}=useContext(Context)
   const {data,isLoading,isError}=useFetch()
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => {
    const productPrice=carts.map(e=>{
        return e.price*e.count
    })
    const totalPrice=productPrice.reduce((total,num)=>{
        return total+num
    })
    setTotal(totalPrice)
    setShow(true)
   };
   useEffect(()=>{
    if(carts!==null){
        setShopCarts(data.filter(item=>{
            return carts.map(t=>t.productId).includes(item.id)
        }))
    }
    
   },[data])

    // post chartProducts  
   const handleSubmit=()=>{
    let postData={
        email:email,
        phoneNumber:phoneNumber,
        products:carts
    }
    // send to your sever api

    //  axios.post(url,postData,{
    // headers:{
    //  token:"your token"
    // }
    // })
    
    setShow(false)
    localStorage.removeItem('carts')
    setShopCarts([])
   }
   return<div>
    {isLoading&&<div className="vh-100 d-flex justify-content-center align-items-center"><div class="loader"></div></div>}
    {isError&&<div className="vh-100 d-flex justify-content-center align-items-center">Something went wrong.Please try again</div>}
    {shopCarts.length>0
    ?<>
    <h2 className='my-2'>Carts</h2>
    <hr/>
    
    <div className='d-flex justify-content-end'>
       <Button variant="primary my-3" onClick={handleShow}>
        AddCheck
      </Button> 
    </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment system</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>Amount</h3>
           <h4 className='text-end'>MMK {total}</h4>
           <div className="d-flex"style={{flexWrap:"wrap"}}>
           {shopCarts.map(e=>{
            return <div className=""style={{width:"50px",height:"50px"}}>
                <img src={e.image} alt="" className="object-fit-contain w-100 h-100" />
            </div>
            })}
           </div>
           
           <input type="email" className="form-control my-3"value={email}onChange={(e)=>{setEmail(e.target.value)}}placeholder='Enter email' />
           <input type="number" className="form-control my-3"value={phoneNumber}onChange={(e)=>{setPhoneNumber(e.target.value)}}placeholder='Enter Phone number' />
        </Modal.Body>
        <Modal.Footer>
          
          <Button disabled={email&&phoneNumber.length>=8?false:true} variant="primary" onClick={handleSubmit}>
            Pay now
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="m-2">
        {shopCarts.map(e=>{
            return <CartCard e={e}/>
        })}
      </div>
   
    
    </>
    :<>
    <div className='vh-100 d-flex justify-content-center align-items-center'>
       <i className="bi bi-list fs-1"></i>
    </div>
    </>}
   </div>

}
export default AddCard