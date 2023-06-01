import React from 'react'
import { useEffect,useState} from 'react'
import axios from 'axios'
// import './OrderSum.css'
import NavbarCustomer from '../NavbarCustomer'
import { Link } from 'react-router-dom'
import Scrollbars from 'react-custom-scrollbars'
import { enterAllFieldsToastMessage } from '../../toastify/AllToastMessages'


const OrderSum = (props) => {

    const [OrderList,setOrderList] = useState([])

    let newReverse = [];
    
    const reverseOrderList = OrderList;
    console.log('Data type of OrderList : ', typeof (OrderList))

    for(let i = reverseOrderList.length -1 ; i >=0; i--){
      newReverse.push(reverseOrderList[i])
    }

    console.log(newReverse)

    const GetOrders =()=>{

      axios.get("http://localhost:1234/order/getorderbycustomer/" +props.name._id).then((res) => {
        setOrderList(res.data)
        
    });
    }

    useEffect(() => {
        if(props.name){
       GetOrders()
    }
 
      }, [props.name]);

      // console.log(OrderList)
      

    const UpdateStatustoCancel =(order_id,id1,id2)=>{
      let myobj = {}
      OrderList.map((value) =>{value.products.map(value2 =>{
        if (value2._id == id1 && value2.product_id._id ==id2)
        {value2.order_status = "Order Cancel Processed"}
        myobj = value
      })})
console.log(myobj)
      axios.put("http://localhost:1234/order/updateordertbyid/" +order_id,myobj).then((res) => {
        enterAllFieldsToastMessage("Order Canceled ")
            GetOrders()
        });


    }

    
      


  return (
    <>
    <NavbarCustomer  value={props.value} customerstatus = {props.customerstatus}  customerlogin ={props.customerlogin} name ={props.name} />

    
    {props.customerstatus?(
    
    <>
    {OrderList[0]?(
    
    <div class="container">
  <div class="row">
    <div class="col-12" style={{backgroundColor: "#dddddd"}}>
    <Scrollbars style={{ width:"100%", height: 500 }}>  
		<table class="table table-image">
    
		  <thead>
		    <tr>
		      <th scope="col"></th>
		      <th scope="col">Product Name</th>
		      <th scope="col">Price</th>
		      <th scope="col">Order Date</th>
		      <th scope="col">Status</th>
              <th scope="col">quantity</th>
		    </tr>
		  </thead>
     
		  <tbody>

          {newReverse.map((val)=>(
            <>
            {val.products.map((innerval =>(
                <tr>
		      <Link to={"/viewproduct/"+innerval.product_id._id}><td class="w-25">
			      <img src={innerval.product_id.url} class="img-fluid img-thumbnail" alt="" />
		      </td></Link>
		      <td>{innerval.product_id.name}</td>
		      <td>{innerval.product_id.price}</td>
		      <td>{val.createdAt.slice(0,10)}</td>
		      <td>{innerval.order_status}</td>
              <td>{innerval.quntity}</td>
              {innerval.order_status ==="On the way"?(
              <td><button onClick={e=>UpdateStatustoCancel(val._id,innerval._id,innerval.product_id._id)} type="button" class="btn btn-danger">X</button></td>
              ):("")}
            
            </tr>


            )))}
            </>
		 
         ))}
           </tbody>
           
		</table>   
    </Scrollbars>
    </div>
  </div>
</div>
    ):("No Data To show")}
    
    
    </>
    
    ):("User Not Login")}
    </>
  )
}

export default OrderSum
