import React, { Component } from 'react';
import axios from 'axios';


export default class AddReservation extends Component {

constructor(props){
super(props);
this.state={
    Customer_Name:"",
    Customer_NIC:"",
    Contact_Number:"",
    Check_In_Date:"",
    Check_Out_Date:"",
    Room_Type:"",
    No_Of_Members:""
}
}



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

axios.post("http://localhost:8080/travelgo/createHotelReservation",data).then((res) =>{
if(res.data.success){
  alert("Reservation is added successfully!")
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
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" aria-current="page" href="/ViewHotelDetails"><h5>View All Hotels Packages</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" aria-current="page" href="/AddReservation"><h5>Add New Reservation</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link active" href="/edit1/:id"><h5>Update Hotel Details</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link active" href="/edit1/:id"><h5>Delete Hotel Details</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/a"><h5>Reservation Daily Summary</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/b"><h5>View Daily Summary</h5></a></b>
        </li>
      </ul>
    </div>
  
  </nav>
    

<div className="col-md-8 mt-4 mx-auto">
    <h1 className="h3 mb-3 font-weight-normal" style={{color:'#FF0000'}}>Add Hotel Reservation</h1>
    <form className="needs-validation" noValidate>
    <table style={{width:"60%",backgroundColor:'#d7dbdd'}}>
  <tr>
    <th><center>
    <div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginTop:'20px',marginRight:'10px'}}>Customer Name :</label>
<input type="text"
className="form-contorl"
name="Customer_Name"
placeholder="Customer_Name"
value={this.state.Customer_Name}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginTop:'20px',marginRight:'10px'}}>Customer NIC :</label>
<input type="text"
className="form-contorl"
name="Customer_NIC"
placeholder="Customer_NIC"
value={this.state.Customer_NIC}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginRight:'5px'}}>Contact Number :</label>
<input type="text"
className="form-contorl"
name="Contact_Number"
placeholder="Contact_Number"
value={this.state.Contact_Number}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginRight:'20px'}}>Check_In_Date :</label>
<input type="text"
className="form-contorl"
name="Check_In_Date"
placeholder="Check_In_Date"
value={this.state.Check_In_Date}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginRight:'15px'}}>Check_Out_Date :</label>
<input type="text"
className="form-contorl"
name="Check_Out_Date"
placeholder="Check_Out_Date"
value={this.state.Check_Out_Date}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginRight:'55px'}}>Room Type :</label>
<input type="text"
className="form-contorl"
name="Room_Type"
placeholder="Room_Type"
value={this.state.Room_Type}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginRight:'55px'}}>No_Of_Members :</label>
<input type="text"
className="form-contorl"
name="No_Of_Members"
placeholder="No_Of_Members"
value={this.state.No_Of_Members}
onChange={this.handleInputChange}/>
</div>

</center>
</th></tr></table>
<button className="btn btn-success" type="submit" style={{marginTop:'15px', marginRight:'40px',marginBottom:'20px'}} onClick={this.onSubmit}>
    <i className="far fa-click-square"></i>
&nbsp; Back
</button>

<button className="btn btn-success" type="submit" style={{marginTop:'15px',marginLeft:'40px',marginBottom:'20px'}} onClick={this.onSubmit}>
    <i className="far fa-click-square"></i>
&nbsp; Create Reservation
</button>

    </form>
    

</div>
</center>
</div>

)
}
}