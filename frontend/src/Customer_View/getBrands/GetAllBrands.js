
import GetAllCategory from "../getCategory/GetAllCategory";

const GetAllBrands = (props) => {

const url ="http://localhost:1234/brand/getallbrand/"
    return(<> 

                
            <GetAllCategory url ={url} value={props.value} title ={props.title} url_route= {props.url_route}  customerstatus = {props.customerstatus} customerlogin ={props.customerlogin} name ={props.name}   />
    
    
     </>)
    
}



export default GetAllBrands;