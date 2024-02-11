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
        <h4 className="w-10 py-2">Create and extend utilities Create and extend </h4>
        <div className="row py-2">
                <div className="col-sm-6 col-md-3">
                    <h5>Card Name</h5>
                    <p>
                        Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project.
                        Import Bootstrap first, then use Sass map functions to modify, add, or remove utilities.
                    </p>
                </div>

                <div className="col-sm-6 col-md-3">
                    <h5>Card Name</h5>
                    <p>
                        Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project.
                        Import Bootstrap first, then use Sass map functions to modify, add, or remove utilities.
                    </p>
                </div>

                <div className="col-sm-6 col-md-3">
                    <h5>Card Name</h5>
                    <p>
                        Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project.
                        Import Bootstrap first, then use Sass map functions to modify, add, or remove utilities.
                    </p>
                </div>
                
                <div className="col-sm-6 col-md-3">
                    <h5>Card Name</h5>
                    <p>
                        Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project.
                        Import Bootstrap first, then use Sass map functions to modify, add, or remove utilities.
                    </p>
                </div>
        </div>
        <h5 className="w-10 py-2 d-flex justify-content-end">Developered by hitomizaruki@gmail.com</h5>
    </footer>
  
 </div>
}
export default Main