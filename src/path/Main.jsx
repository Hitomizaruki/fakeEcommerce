import { useContext, useState} from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { Context } from '../components/Context'

function Main() {
   const {isAlert}=useContext(Context)
   
   return <div className="container-fluid p-0">
    <Navbar/>
    <main className="container">
        <Alert variant='primary position-fixed z-1 bottom-0 start-50 translate-middle-x' show={isAlert.condition}>{isAlert.mess}</Alert>
       <Outlet/>
    </main>
    <footer className="p-3 bg-dark align-items-center text-secondary">
        <h4 className="w-10 py-2">Fake store Approach </h4>
        <div className="row py-2">
                <div className="col-sm-6 col-md-3">
                    <h5>Wear-All-Day Comfort</h5>
                    <p>
                      Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.
                    </p>
                </div>

                

                <div className="col-sm-6 col-md-3">
                    <h5>Sustainability In Every Step</h5>
                    <p>
                        From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.
                    </p>
                </div>
                
                <div className="col-sm-6 col-md-3">
                    <h5>Materials From The Earth</h5>
                    <p>
                       We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.
                    </p>
                </div>
        </div>
    </footer>
  
 </div>
}
export default Main
