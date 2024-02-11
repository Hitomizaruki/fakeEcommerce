import { NavLink } from "react-router-dom"

function Navbar() {
    return<nav className="navbar  navbar-expand-lg bg-dark ">
            <div className="container">
                <div className="navbar-brand d-flex text-light">
                    <span className="d-block mx-auto"style={{width:"50px",height:"50px"}}>
                        <img src="https://nativeteams.com/brochure/images/pages/cards/iPhone.png" className="object-fit-contain w-100 h-100" alt="..."/>
                    </span>
                   <b className="my-auto mx-2"> Store</b>
                </div>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link text-light" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/Products">Products</NavLink>
                    </li> 
                    <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/Carts">Carts</NavLink>
                    </li> 
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
}
export default Navbar