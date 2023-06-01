import "./HomePage.css";
import NavbarCustomer from '../NavbarCustomer'
import GetAllCategory from '../getCategory/GetAllCategory';
import GetAllBrands from '../getBrands/GetAllBrands';
import GetAllProducts from '../getProducts/GetAllProducts';
import { useEffect,useState } from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from 'axios';
import Scrollbars from "react-custom-scrollbars";

const Home = (props) => {

  const [category, setCategory] = useState([]);
  const [brands, setBrands] = useState([]);
  const [product, setProduct] = useState([]);



    
const getProducts =()=>{
    axios.get("http://localhost:1234/product/getallproducts").then(res => {
        setProduct(res.data.reverse());})
}

useEffect(() => {
  getProducts()
  },[])

  useEffect(() => {
    axios.get("http://localhost:1234/category/getallcategory").then((res) => {
      setCategory(res.data.reverse());
    });
  }, []);

  

 

  useEffect(() => {
    axios.get("http://localhost:1234/brand/getallbrand/").then((res) => {
      setBrands(res.data.reverse());
    });
  }, []);




    return(<><> <NavbarCustomer value={props.value} customerstatus = {props.customerstatus} name ={props.name} customerlogin ={props.customerlogin}/>
    
    <Scrollbars style={{ width:"100%", height: 525 }}>
        <Container fluid>
        <Container className="text-center ">
          <Row className=" ">
            <Col className="first-card-heading  ">
              <h3 className="text-center fst-italic fs-2 ">Top Category</h3>
            </Col>
          </Row>
        </Container>

        <Container fluid className="first-card-items align-items-center my-4 ">
          <Row className="mb-3 justify-content-center justify align-items-center">
            {category.slice(0, 4).map((post) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2  ">
                  <Link to = {"/userlistproductsbycategory/"+post._id} className="text-decoration-none">
                    <Card className="card-items  border border-white text-center">
                      <Card.Img
                        variant="top"
                        src={post.url}
                        className="card-image  px-4 pt-4"
                      />
                      <Card.Body>
                        <Card.Title className=" fs-6 mb-2">
                          {post.name}
                        </Card.Title>

                        <p className="text-success fw-bold fst-italic">
                        </p>
                        <Link  to = {"/userlistproductsbycategory/"+post._id} className="card-detail-link text-decoration-none">
                          Details
                        </Link>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container className="text-center ">
          <Row className=" ">
            <Col className="first-card-heading  ">
              <h3 className="text-center fst-italic fs-2 ">Top Brands</h3>
            </Col>
          </Row>
        </Container>

        <Container fluid className="first-card-items align-items-center my-4 ">
          <Row className="mb-3 justify-content-center justify align-items-center">
            {brands.slice(0, 4).map((post) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2  ">
                  <Link to= {"/userlistproductsbybrand/"+ post._id} className="text-decoration-none">
                    <Card className="card-items  border border-white text-center">
                      <Card.Img
                        variant="top"
                        src={post.url}
                        className="card-image  px-4 pt-4"
                      />
                      <Card.Body>
                        <Card.Title className=" fs-6 mb-2">
                          {post.name}
                        </Card.Title>

                        <p className="text-success fw-bold fst-italic">
                        </p>
                        <Link to= {"/userlistproductsbybrand/"+ post._id} className="card-detail-link text-decoration-none">
                          Details
                        </Link>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>


      <Container fluid>
        <Container className="text-center ">
          <Row className=" ">
            <Col className="first-card-heading  ">
              <h3 className="text-center fst-italic fs-2 ">Top Products </h3>
            </Col>
          </Row>
        </Container>

        <Container fluid className="first-card-items align-items-center my-4 ">
          <Row className="mb-3 justify-content-center justify align-items-center">
            {product.slice(0, 4).map((post) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2  ">
                  <Link  to={"/viewproduct/" +post._id} className="text-decoration-none">
                    <Card className="card-items  border border-white text-center">
                      <Card.Img
                        variant="top"
                        src={post.url}
                        className="card-image  px-4 pt-4"
                      />
                      <Card.Body>
                        <Card.Title className=" fs-6 mb-2">
                          {post.name}
                        </Card.Title>

                        <p className="text-success fw-bold fst-italic">
                          &#x20B9; {post.price}
                        </p>
                        <Link to={"/viewproduct/" +post._id} className="card-detail-link text-decoration-none">
                          Details
                        </Link>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
      </ Scrollbars>
        </>
    
     </>)
    
}



export default Home;