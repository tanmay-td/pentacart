import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductGet from "./Admin_View/product/ProductGet";
import ProductRegister from "./Admin_View/product/ProductRegister";
import ProductUpdate from "./Admin_View/product/ProductUpdate";
import Home from "./Customer_View/home/Home";
import CategoryGet from "./Admin_View/category/CategoryGet";
import CategoryUpdate from "./Admin_View/category/CategoryUpdate";
import CreateCategory from "./Admin_View/category/CategoryRegister";
import BrandGet from "./Admin_View/brand/BrandGet";
import BrandRegister from "./Admin_View/brand/BrandRegister";
import BrandUpdate from "./Admin_View/brand/BrandUpdate";
import CustomerGet from "./Admin_View/customer/CustomerGet";
import GetAllCategory from "./Customer_View/getCategory/GetAllCategory";
import GetAllProducts from "./Customer_View/getProducts/GetAllProducts";
import ViewProductWindows from "./Customer_View/ViewProductWindow/ViewProductWindow";
import ViewCart from "./Customer_View/ShowCart/ViewCart";
import ViewProductByCategory from "./Customer_View/ViewProductByCategory/ViewProductByCategory";
import GetAllBrands from "./Customer_View/getBrands/GetAllBrands";
import ViewProductByBrand from "./Customer_View/ViewProductByBrand/ViewProductByBrand";
import AdminLogin from "./Admin_View/AdminLogin/AdminLogin";
import Customersignup from "./Customer_View/CustomerLogin/Register/Customersignup";
import Customerlogin from "./Customer_View/CustomerLogin/Login/Customerlogin";
import Address from "./Customer_View/Address/Address";
import SelectAddress from "./Customer_View/Address/SelectAddress";
import OrderSum from "./Customer_View/Order/OrderSum";
import Searchbar from "./Customer_View/Search/Searchbar";
import UserProfile from "./Customer_View/UserProfile/UserProfile";
import React from "react";
import GetCart from "./Admin_View/Cart/GetCart";
import GetOrders from "./Admin_View/Order/GetOrders";
import PageNotFound from "./Components/PageNotFound";
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [AdminStatus, setAdminStatus] = useState(false);
  const [CustomerStatus, setCustomerStatus] = useState(false);
  const [CustomerDetails, setCustomerDetails] = useState(false);

  const productsAPI = "http://localhost:1234/product/getallproducts";
  const CategoryAPI = "http://localhost:1234/category/getallcategory";

  const [ProductList, setProduct] = useState([]);

  const setAdminStatusfunction = (data) => {
    setAdminStatus(data);
  };

  const setCustomerStatusfunction = (data) => {
    console.log("into Logout");

    if (data === false) {
      setProduct([]);
      console.log("List Empty");
      console.log(ProductList);
    }
    setCustomerStatus(data);
  };

  const setCustomerDetailsfunction = (data) => {
    setCustomerDetails(data);
  };

  const AddnewProduct = (data) => {
    const ProductExits = ProductList.find((iteam) => iteam._id === data._id);
    console.log(ProductList);
    if (ProductExits) {
      console.log("data");

      setProduct(
        ProductList.map((iteams) =>
          iteams._id === data._id
            ? { ...ProductExits, quantity: ProductExits.quantity + 1 }
            : iteams
        )
      );
    } else {
      setProduct([...ProductList, { ...data, quantity: 1 }]);
    }
  };

  const RemoveProduct = (data) => {
    const ProductExits = ProductList.find((iteam) => iteam._id === data._id);
    if (ProductExits.quantity === 1) {
      setProduct(ProductList.filter((items) => items._id !== data._id));
    } else {
      setProduct(
        ProductList.map((iteams) =>
          iteams._id == data._id
            ? { ...ProductExits, quantity: ProductExits.quantity - 1 }
            : iteams
        )
      );
    }
  };

  const RemoveQuantityAndProduct = (data) => {
    setProduct(ProductList.filter((items) => items._id !== data._id));
  };

  useEffect(() => {
    localStorage.setItem("cartlist", JSON.stringify(ProductList));
  }, [ProductList]);

  useEffect(() => {
    localStorage.setItem("adminstatus", JSON.stringify(AdminStatus));
  }, [AdminStatus]);

  useEffect(() => {
    localStorage.setItem("userinformation", JSON.stringify(CustomerDetails));
  }, [CustomerDetails]);

  useEffect(() => {
    localStorage.setItem("userstatus", JSON.stringify(CustomerStatus));
  }, [CustomerStatus]);

  const cartdata = JSON.parse(localStorage.getItem("cartlist"));

  useEffect(() => {
    if (cartdata) {
      if (ProductList.length == 0) {
        setProduct(cartdata);
        console.log("done");
      }
    }
  }, []);

  const customerdata = JSON.parse(localStorage.getItem("userinformation"));

  useEffect(() => {
    setCustomerDetails(customerdata);
  }, []);

  const customerstatus = JSON.parse(localStorage.getItem("userstatus"));

  useEffect(() => {
    setCustomerStatus(customerstatus);
  }, []);

  const adminstatus = JSON.parse(localStorage.getItem("adminstatus"));
  useEffect(() => {
    setAdminStatus(adminstatus);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ADMIN ROUTES  */}

          <Route
            exact
            path="/product/get"
            element={
              <ProductGet
                adminstatus={AdminStatus}
                adminfun={setAdminStatusfunction}
              />
            }
          />
          <Route
            exact
            path="/product/create"
            element={
              <ProductRegister
                adminstatus={AdminStatus}
                adminfun={setAdminStatusfunction}
              />
            }
          />
          <Route
            exact
            path="/product/update/:id"
            element={
              <ProductUpdate
                adminstatus={AdminStatus}
                adminfun={setAdminStatusfunction}
              />
            }
          />
          <Route
            exact
            path="/category/get/"
            element={
              <CategoryGet
                adminstatus={AdminStatus}
                adminfun={setAdminStatusfunction}
              />
            }
          />
          <Route
            exact
            path="/category/update/:id"
            element={<CategoryUpdate adminstatus={AdminStatus} />}
            adminfun={setAdminStatusfunction}
          />
          <Route
            exact
            path="/category/create"
            element={
              <CreateCategory
                adminstatus={AdminStatus}
                adminfun={setAdminStatusfunction}
              />
            }
          />
          <Route
            exact
            path="/brand/get"
            element={
              <BrandGet
                adminstatus={AdminStatus}
                adminfun={setAdminStatusfunction}
              />
            }
          />
          <Route
            exact
            path="/brand/create"
            element={
              <BrandRegister
                adminstatus={AdminStatus}
                adminfun={setAdminStatusfunction}
              />
            }
          />
          <Route
            exact
            path="/brand/update/:id"
            element={
              <BrandUpdate
                adminstatus={AdminStatus}
                adminfun={setAdminStatusfunction}
              />
            }
          />
          <Route
            exact
            path="/customer"
            element={
              <CustomerGet
                adminstatus={AdminStatus}
                adminfun={setAdminStatusfunction}
              />
            }
          />

          <Route
            exact
            path="/adminlogin"
            element={
              <AdminLogin
                adminstatus={AdminStatus}
                fun={setAdminStatusfunction}
              />
            }
          />

          <Route
            exact
            path="/admincartview"
            element={
              <GetCart adminstatus={AdminStatus} fun={setAdminStatusfunction} />
            }
          />

          <Route
            exact
            path="/adminorderview"
            element={
              <GetOrders
                adminstatus={AdminStatus}
                fun={setAdminStatusfunction}
              />
            }
          />

          {/* Customer View Routes */}

          <Route
            exact
            path="/"
            element={
              <Home
                value={ProductList}
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />

          <Route
            exact
            path="/userlistcategory"
            element={
              <GetAllCategory
                value={ProductList}
                url={CategoryAPI}
                title={"Category"}
                url_route="/userlistproductsbycategory/"
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />

          <Route
            exact
            path="/userlistbrand"
            element={
              <GetAllBrands
                value={ProductList}
                title={"Brand"}
                url_route="/userlistproductsbybrand/"
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />

          <Route
            exact
            path="/userlistproducts"
            element={
              <GetAllProducts
                value={ProductList}
                fun={AddnewProduct}
                fun2={RemoveProduct}
                url={productsAPI}
                title="Products"
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />

          <Route
            exact
            path="/viewproduct/:id"
            element={
              <ViewProductWindows
                value={ProductList}
                fun={AddnewProduct}
                fun2={RemoveProduct}
                fun3={RemoveQuantityAndProduct}
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />

          <Route
            exact
            path="/viewcart"
            element={
              <ViewCart
                value={ProductList}
                fun={AddnewProduct}
                fun2={RemoveProduct}
                fun3={RemoveQuantityAndProduct}
                name={CustomerDetails}
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
              />
            }
          />

          <Route
            exact
            path="/userlistproductsbycategory/:id"
            element={
              <ViewProductByCategory
                value={ProductList}
                fun={AddnewProduct}
                title={"Category"}
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />

          <Route
            exact
            path="/userlistproductsbybrand/:id"
            element={
              <ViewProductByBrand
                value={ProductList}
                fun={AddnewProduct}
                title={"Brand"}
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />

          <Route exact path="/customerregister" element={<Customersignup />} />

          <Route
            exact
            path="/customerlogin"
            element={
              <Customerlogin
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                customerdetailsfun={setCustomerDetailsfunction}
              />
            }
          />

          <Route
            exact
            path="/address"
            element={
              <Address
                value={ProductList}
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />

          <Route
            exact
            path="/address/select"
            element={
              <SelectAddress
                value={ProductList}
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
                setCart={setProduct}
              />
            }
          />

          <Route
            exact
            path="/order"
            element={
              <OrderSum
                value={ProductList}
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />

          <Route
            exact
            path="/searchbar/:id"
            element={
              <Searchbar
                value={ProductList}
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />

          <Route
            exact
            path="/userprofile/"
            element={
              <UserProfile
                value={ProductList}
                customerstatus={CustomerStatus}
                customerlogin={setCustomerStatusfunction}
                name={CustomerDetails}
              />
            }
          />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>

        <ToastContainer transition={Slide} />
      </BrowserRouter>
    </>
  );
};

export default App;
