import { Link,Outlet } from "react-router-dom";


function Navbar(props) {
  return (
    <>
  
   <ul className="nav nav-tabs " >
  <li className="nav-item">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to= "/product/get" class="dropdown-item" >List Product</Link>
          <Link to= "/product/create"  class="dropdown-item">Create Product</Link>
        </div>
      </li>

      
  </li>
  <li className="nav-item">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to= "/category/get" class="dropdown-item" >List Category</Link>
          <Link to= "/category/create"  class="dropdown-item">Create Category</Link>
        </div>
      </li>
</li>



<li className="nav-item">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Brand
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to= "/brand/get" class="dropdown-item" >List Brands</Link>
          <Link to= "/brand/create"  class="dropdown-item">Create Brand</Link>
        </div>
      </li>
</li>



<li className="nav-item">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Customer
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to= "/customer" class="dropdown-item" >List Customer</Link>
        </div>
      </li>
</li>

<li className="nav-item">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cart
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to= "/admincartview" class="dropdown-item" >List Carts</Link>
        </div>
      </li>
</li>


<li className="nav-item">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Orders
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to= "/adminorderview" class="dropdown-item" >List Orders</Link>
        </div>
      </li>
</li>

{props.adminstatus?(
<li className="nav-item">
    <li class="nav-item dropdown">
        <Link  onClick={e=>props.fun(false)} class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Logout
        </Link>
      </li>
</li>
):(<li className="nav-item">
<li class="nav-item dropdown">
    <Link  to={"/adminlogin"} class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Login
    </Link>
  </li>
</li>)}


</ul>

</>
  );
}

export default Navbar;