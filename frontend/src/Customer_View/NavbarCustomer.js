import { useState } from "react";
import { Link,Outlet } from "react-router-dom";
import './NavbarCustomer.css'

function NavbarCustomer(props) {

const [search,setSearch] = useState()

  return (
    <>
  <div class="main-navbar shadow-sm sticky-top">
        <div class="top-navbar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                        <h5 class="brand-name">PENTA-CART</h5>
                    </div>
                    <div class="col-md-5 my-auto">
                        <form role="search">
                            <div class="input-group">
                                <input type="search" placeholder="Search your product" onChange={e=>(setSearch(e.target.value))} class="form-control" />
                                <Link class="btn bg-white" to={"/searchbar/"+search}>
                                    <i class="fa fa-search"></i>
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-5 my-auto">
                        <ul class="nav justify-content-end">
                            
                            <li class="nav-item">
                                <Link  to ="/viewcart" class="nav-link" >
                                    {props.value ?(
                                        <>
                                    <i class="fa fa-shopping-cart"></i> Cart ({props.value.length})
                                    </>
                                    ):(
                                        <>
                                        <i class="fa fa-shopping-cart"></i> Cart (0)   
                                        </>
                                    )}
                                </Link>
                            </li>
                            {props.customerstatus ?(
                            <li class="nav-item dropdown">
                                <></>
                                {props.name?(
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    
                                    <i class="fa fa-user"></i> Hello,{props.name.name}
                                </a>
                                ):(

                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    
                                    <i class="fa fa-user"></i> Hello,User
                                </a>
                                )}
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/userprofile/" class="dropdown-item" href="#"><i class="fa fa-user"></i> Profile</Link></li>
                                <li><Link to={"/order"} class="dropdown-item" href="#"><i class="fa fa-list"></i> My Orders</Link></li>
                                <li><Link to="/viewcart" class="dropdown-item" href="#"><i class="fa fa-shopping-cart"></i> My Cart</Link></li>
                                <li><a onClick={e=>props.customerlogin(false)} class="dropdown-item" href="#"><i class="fa fa-sign-out"></i> Logout</a></li>
                                </ul>
                            </li>
                            ):(
                                <li class="nav-item dropdown">
                                <Link to= "/customerlogin" class="nav-link dropdown-toggle" >
                                    <i class="fa fa-user"></i> Login 
                                </Link>
                            </li>

                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                    PenTagon
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to={"/"} class="nav-link" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/userlistcategory" class="nav-link" >All Categories</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/userlistproducts" class="nav-link" >New Arrivals</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/userlistbrand" class="nav-link" >New Brands</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

</>
  );
}

export default NavbarCustomer;