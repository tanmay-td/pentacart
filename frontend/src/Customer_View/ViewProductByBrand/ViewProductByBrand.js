
import GetAllProducts from '../getProducts/GetAllProducts';
import { Link, useParams } from "react-router-dom";

const ViewProductByBrand = (props) => {
    const { id } = useParams();

const url ="http://localhost:1234/product/getproductbybrand/"+ String(id)
    return(<> 

                <GetAllProducts value={props.value} fun ={props.fun} url={url} title={props.title} url_route = {props.url_route} customerstatus = {props.customerstatus}  customerlogin ={props.customerlogin}   name ={props.name}  />
    
    
    
     </>)
    
}



export default ViewProductByBrand;