import React, { Component } from 'react';
import axios from 'axios';
import img32 from'./Images/32.jpg';
import img34 from'./Images/34.jpg';
import img33 from'./Images/33.jpg';

export default class UpdateHotelDetails extends Component {

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
        
        onSubmit = async (e) =>{
        e.preventDefault();
        const id = window.location.href.toString();
        console.log(id.substr(41, id.length - 1));
        const finalid = id.substr(41, id.length - 1);
        
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
        console.log("update data",data)
        
       let res = await  axios.patch(`http://localhost:8080/travelgo/packages/updateHotelPackages/${finalid}`,data);
       console.log("res",res);
        if(res.data.Hotel_ID != null){
        alert("Hotel Details Updated Successfully")

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

        }
        

        getdata = async ()=>{
          const id = window.location.href.toString();
          console.log(id.substr(41, id.length - 1));
          const finalid = id.substr(41, id.length - 1);
        //const id = this.props.match.params.id;
       
         let res =  await  axios.get(`http://localhost:8080/travelgo/packages/getHotelPackages/${finalid}`);
         console.log("res", res);
       if(res.data.Hotel_ID != null){
       this.setState({
           Hotel_ID:res.data.Hotel_ID,
           Hotel_Name:res.data.Hotel_Name,
           Single_Room_Price:res.data.Single_Room_Price,
           Double_Room_Price:res.data.Double_Room_Price,
           Luxury_Room_Price:res.data.Luxury_Room_Price,
           Hotel_Contact:res.data.Hotel_Contact,
           Location:res.data.Location
       });
       console.log(this.state);
     
       }

        }

    componentDidMount(){
      this.getdata();
    }
   
render() {
return (
    <div>

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
          <b><a className="nav-link" aria-current="page" href="/AddHotelPackages"><h5>Add New Hotel Packages</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link active" href="/ViewHotelDetails"><h5>Update Hotel Details</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link active" href="/ViewHotelDetails"><h5>Delete Hotel Details</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/ReservationDailySummary"><h5>Reservation Daily Summary</h5></a></b>
        </li>
        
      </ul>
      
      
    </div>
  
  </nav>

<div className="col-md-8 mt-4 mx-auto">
<div className="col-lg-9 mt-2 mb-2" style={{backgroundColor:'#0000A0',color:'white'}}>

<h4>Update Hotel Package Details</h4>
</div>

    <form className="needs-validation" noValidate>

    <table style={{width:"80%",backgroundColor:'#d7dbdd'}}>
 
 <tr>
    <th><td>
    
</td>
    <center>
<div className="form-group" style={{marginBottom:'15px',marginTop:'10px'}}>
<label style={{marginBottom:'5px',marginRight:'175px'}}>Hotel_ID</label>
<input type="text"
className="form-contorl"
name="Hotel_ID"
placeholder="Hotel_ID"
value={this.state.Hotel_ID}
onChange={this.handleInputChange}/>
</div> 

<div className="form-group" style={{marginBottom:'15px'}}>   
<label style={{marginBottom:'5px',marginRight:'150px'}}>Hotel_Name</label>
<input type="text"
className="form-contorl"
name="Hotel_Name"
placeholder="Hotel_Name"
value={this.state.Hotel_Name}
onChange={this.handleInputChange}/>
</div>



<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'100px'}}>Single_Room_Price</label>
<input type="text"
className="form-contorl"
name="Single_Room_Price"
placeholder="Single_Room_Price"
value={this.state.Single_Room_Price}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'90px'}}>Double_Room_Price</label>
<input type="text"
className="form-contorl"
name="Double_Room_Price"
placeholder="Double_Room_Price"
value={this.state.Double_Room_Price}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'95px'}}>Luxury_Room_Price</label>
<input type="text"
className="form-contorl"
name="Luxury_Room_Price"
placeholder="Luxury_Room_Price"
value={this.state.Luxury_Room_Price}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'135px'}}>Hotel_Contact</label>
<input type="text"
className="form-contorl"
name="Hotel_Contact"
placeholder="Hotel_Contact"
value={this.state.Hotel_Contact}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'175px'}}>Location</label>
<input type="text"
className="form-contorl"
name="Location"
placeholder="Location"
value={this.state.Location}
onChange={this.handleInputChange}/>
</div>
<button className="btn btn-success"><a href="/ViewHotelDetails" style={{textDecoration:'none',color:'white'}}>Back</a></button>
<button className="btn btn-success" type="submit" style={{marginTop:'15px',marginBottom:'15px',marginLeft:'70px'}} onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
&nbsp; Update Details
</button><br/>
<img src={img32}style={{width:'200px',height:'150px'}}></img>
<img src={img34}style={{width:'200px',height:'150px'}}></img>
<img src={img33}style={{width:'200px',height:'150px'}}></img>
</center>
</th></tr></table>
    </form> 
    </div>
   
    
</div>

)
}
}
