import React, { Component } from 'react';
import axios from 'axios';
import img8 from'./Images/8.jpg';
import img13 from'./Images/13.jpg';
import img1 from'./Images/1.jpg';
import img10 from'./Images/10.jpg';
import img17 from'./Images/17.jpeg';
import img9 from'./Images/9.jpg';
import img20 from'./Images/20.jpg';
import img30 from'./Images/30.jpg';
import img31 from'./Images/31.jpg';
import img32 from'./Images/32.jpg';
import img33 from'./Images/33.jpg';
import img34 from'./Images/34.jpg';
export default class AddReservation extends Component {




handleInputChange = (e) =>{
  const {name,value} = e.target;
  
  this.setState({
  ...this.state,
  [name]:value
})
}

onSubmit = (e) =>{
e.preventDefault();

const {Customer_Name,Customer_NIC,Contact_Number,Check_In_Date,Check_Out_Date,Room_Type,No_Of_Members} = this.state;

const data ={
    Customer_Name:Customer_Name,
    Customer_NIC:Customer_NIC,
    Contact_Number:Contact_Number,
    Check_In_Date:Check_In_Date,
    Check_Out_Date:Check_Out_Date,
    Room_Type:Room_Type,
    No_Of_Members:No_Of_Members
}
console.log(data)

axios.post("http://localhost:8080/travelgo/packages/createHotelReservation",data).then((res) =>{
  console.log("response",res)
  if(res.status == 201){
    alert("Your reservation successfully added!")
  this.setState(
{
    Customer_Name:"",
    Customer_NIC:"",
    Contact_Number:"",
    Check_In_Date:"",
    Check_Out_Date:"",
    Room_Type:"",
    No_Of_Members:""
}
)
}
})
}

render() {
return (
    <div>
<center>
<center><h1 style={{color:'#FF0000'}}>...Welcome To Hotel Reservation...</h1></center>
<h3>Enjoy Your Dream Vacation with TravelGo</h3>
<h5>You can book your stay</h5>
<img src={img20}style={{width:'200px',height:'150px'}}></img>
<img src={img13}style={{width:'200px',height:'150px'}}></img>
<img src={img1}style={{width:'200px',height:'150px'}}></img>
<img src={img10}style={{width:'200px',height:'150px'}}></img>
<img src={img17}style={{width:'200px',height:'150px'}}></img>
<img src={img9}style={{width:'200px',height:'150px'}}></img>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
<center>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px',marginLeft:'480px',marginTop:'60px',width:'200px',marginBottom:'60px'}}>
          <b><a className="nav-link active" aria-current="page" href="/ViewHotelDetails"><h5>View Hotel Packages</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px',marginLeft:'150px',marginTop:'60px',width:'200px',marginBottom:'60px'}}>
          <b><a className="nav-link active" aria-current="page" href="/AddReservation"><h5>Add New Reservation</h5></a></b>
        </li>
        
        
      </ul>
    </div>
    </center>
  </nav>
  <img src={img8}style={{width:'200px',height:'150px'}}></img>
<img src={img30}style={{width:'200px',height:'150px'}}></img>
<img src={img31}style={{width:'200px',height:'150px'}}></img>
<img src={img32}style={{width:'200px',height:'150px'}}></img>
<img src={img33}style={{width:'200px',height:'150px'}}></img>
<img src={img34}style={{width:'200px',height:'150px'}}></img>

    
   
    
</center>
</div>


)
}
}
