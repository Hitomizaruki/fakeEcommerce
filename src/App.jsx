import { useEffect, useState} from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './path/Home'
import Main from './path/Main'
import Products from './path/Products'
import Product from './path/Product'
import { Context } from './components/Context'
import AddCarts from './path/Carts'
function App() {
  let ratingArray=[1,2,3,4,5]
  const [carts,setAddCarts]=useState(JSON.parse(localStorage.getItem('carts')))
  const [isAlert,setIsAlert]=useState({
    condition:false,
    mess:""
  })

  const handleAddShop=(item)=>{
    let cartsStore=JSON.parse(localStorage.getItem('carts'))
    console.log(cartsStore)
    let product={
      productId:item.id,
      count:1,
      price:item.price
    }
    if(cartsStore!==null){
      if(cartsStore.map(e=>e.productId).includes(item.id)){
        setIsAlert({condition:true,mess:"you already buying this"})
        setTimeout(()=>{setIsAlert({condition:false,mess:""})},2000)

      }else{
        setIsAlert({condition:true,mess:"get this"})
        setAddCarts([...cartsStore,product])
        localStorage.setItem('carts',JSON.stringify([...cartsStore,product]))
        setTimeout(()=>{setIsAlert({condition:false,mess:""})},2000)

      }
    
    }else{
      setIsAlert({condition:true,mess:"get this"})
      setAddCarts([product])
      localStorage.setItem('carts',JSON.stringify([product]))
      setTimeout(()=>{setIsAlert({condition:false,mess:""})},2000)

    }
  }

  return <Context.Provider value={{ratingArray,handleAddShop,carts,setAddCarts,isAlert}}>
    <BrowserRouter>
      <Routes>
          <Route path='/'element={<Main/>}>
              <Route index element={<Home/>}/>
              <Route path='Products' element={<Products/>}/>
              <Route path='Products/:productId' element={<Product/>}/>
              <Route path='Carts' element={<AddCarts/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </Context.Provider>
  
  
}

export default App
