import React, { Component } from 'react';
import axios from 'axios';
import img32 from'./Images/32.jpg';
import img34 from'./Images/34.jpg';
import img33 from'./Images/33.jpg';

export default class AddHotelPackages extends Component {

constructor(props){
super(props);
this.state={
    Hotel_ID:"",
    Hotel_Name:"",
    Single_Room_Price:"",
    Double_Room_Price:"",
    Luxury_Room_Price:"",
    Hotel_Contact:"",
    Location:""
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

const {Hotel_ID,Hotel_Name,Single_Room_Price,Double_Room_Price,Luxury_Room_Price,Hotel_Contact,Location} = this.state;

const data ={
    Hotel_ID:Hotel_ID,
    Hotel_Name:Hotel_Name,
    Single_Room_Price:Single_Room_Price,
    Double_Room_Price:Double_Room_Price,
    Luxury_Room_Price:Luxury_Room_Price,
    Hotel_Contact:Hotel_Contact,
    Location:Location
}
console.log(data)

axios.post("http://localhost:8080/travelgo/packages/createHotelPackages",data).then((res) =>{
  console.log("response",res)
if(res.status == 201){
  alert("New Room Package is added!")
this.setState(
{
    Hotel_ID:"",
    Hotel_Name:"",
    Single_Room_Price:"",
    Double_Room_Price:"",
    Luxury_Room_Price:"",
    Hotel_Contact:"",
    Location:""
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
          <b><a className="nav-link" aria-current="page" href="/ViewHotelDetails"><h5>View All Hotels</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" aria-current="page" href="/ViewReservationDetails"><h5>View All Reservations</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link active" aria-current="page" href="/AddHotelPackages"><h5>Add New Hotel Packages</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/ViewHotelDetails"><h5>Update Hotel Details</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/ViewHotelDetails"><h5>Delete Hotel Details</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/ReservationDailySummary"><h5>Reservation Daily Summary</h5></a></b>
        </li>
        
      </ul>
    </div>
  
  </nav>
    

<div className="col-md-8 mt-4 mx-auto">
<div className="col-lg-9 mt-2 mb-2" style={{backgroundColor:'#0000A0',color:'white'}}>

<h4>Add New Hotel Packages</h4>
</div>
    <img src={img32}style={{width:'200px',height:'150px'}}></img>
<img src={img34}style={{width:'200px',height:'150px'}}></img>
<img src={img33}style={{width:'200px',height:'150px'}}></img>
    <form className="needs-validation" noValidate>
    <table style={{width:"60%",backgroundColor:'#d7dbdd'}}>
  <tr>
    <th><center>
    <div className="form-group" style={{marginBottom:'3px'}}>
<label style={{marginleft:'100px',marginBottom:'10px',marginTop:'20px',marginRight:'110px'}}>Hotel ID :</label>
<input type="text"
className="form-contorl"
name="Hotel_ID"
placeholder="Hotel_ID"
value={this.state.Hotel_ID}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginTop:'20px',marginRight:'80px'}}>Hotel Name :</label>
<input type="text"
className="form-contorl"
name="Hotel_Name"
placeholder="Hotel_Name"
value={this.state.Hotel_Name}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginRight:'35px'}}>Single Room Price :</label>
<input type="text"
className="form-contorl"
name="Single_Room_Price"
placeholder="Single_Room_Price"
value={this.state.Single_Room_Price}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginRight:'25px'}}>Double_Room_Price :</label>
<input type="text"
className="form-contorl"
name="Double_Room_Price"
placeholder="Double_Room_Price"
value={this.state.Double_Room_Price}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginRight:'30px'}}>Luxury Room Price :</label>
<input type="text"
className="form-contorl"
name="Luxury_Room_Price"
placeholder="Luxury_Room_Price"
value={this.state.Luxury_Room_Price}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginRight:'70px'}}>Hotel Contact :</label>
<input type="text"
className="form-contorl"
name="Hotel_Contact"
placeholder="Hotel_Contact"
value={this.state.Hotel_Contact}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'10px',marginRight:'110px'}}>Location :</label>
<input type="text"
className="form-contorl"
name="Location"
placeholder="Location"
value={this.state.Location}
onChange={this.handleInputChange}/>
</div>

</center>
</th></tr></table>
<button className="btn btn-success"><a href="/ViewHotelDetails" style={{textDecoration:'none',color:'white',marginTop:'5px'}}>Back</a></button>

<button className="btn btn-success" type="submit" style={{marginTop:'15px',marginLeft:'40px',marginBottom:'20px'}} onClick={this.onSubmit}>
    <i className="far fa-click-square"></i>
&nbsp; Add new hotel details
</button>

    </form>
    

</div>
</center>
</div>

)
}
}
