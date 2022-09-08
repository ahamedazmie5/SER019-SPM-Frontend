import React, { Component } from 'react';
import axios from 'axios';


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
        
        onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        
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
        
        axios.put(`http://localhost:8080/travelgo/getAllHotelPackages/${id}`,data).then((res) =>{
        if(res.data.success){
alert("Updated Successfully")

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
        


    componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8080//travelgo/getAllHotelPackages/${id}`).then((res) =>{
    if(res.data.success){
    this.setState({
        Hotel_ID:res.data.Hotel_ID,
        Hotel_Name:res.data.Hotel_Name,
        Single_Room_Price:res.data.Single_Room_Price,
        Double_Room_Price:res.data.Double_Room_Price,
        Luxury_Room_Price:res.data.Luxury_Room_Price,
        Hotel_Contact:res.data.Hotel_Contact,
        Location:res.data.Location
    });
    console.log(this.state.post);
  
    }
        });
    
    
    }
    
render() {
return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" aria-current="page" href="/"><h5>View Menu</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" aria-current="page" href="/add1"><h5>Add Items to the menu</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link active" href="/edit1/:id"><h5>Update Details</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link active" href="/edit1/:id"><h5>Delete Items</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/a"><h5>Item Daily Summary</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/b"><h5>View Daily Summary</h5></a></b>
        </li>
      </ul>
      
      
    </div>
  
  </nav>

<div className="col-md-8 mt-4 mx-auto">
    <h1 className="h3 mb-3 font-weight-normal" style={{color:'#FF0000'}}>...Update Hotel Details...</h1>
    <form className="needs-validation" noValidate>

    <table style={{width:"40%"}}>
  <tr>
    <th>
    
    <center>
<div className="form-group" style={{marginBottom:'15px',marginTop:'10px'}}>
<label style={{marginBottom:'5px',marginRight:'5px'}}>Hotel_ID</label>
<input type="text"
className="form-contorl"
name="Hotel_ID"
placeholder="Hotel_ID"
value={this.state.Hotel_ID}
onChange={this.handleInputChange}/>
</div> 

<div className="form-group" style={{marginBottom:'15px'}}>   
<label style={{marginBottom:'5px',marginRight:'5px'}}>Hotel_Name</label>
<input type="text"
className="form-contorl"
name="Hotel_Name"
placeholder="Hotel_Name"
value={this.state.Hotel_Name}
onChange={this.handleInputChange}/>
</div>
    
<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>Single_Room_Price</label>
<input type="text"
className="form-contorl"
name="Single_Room_Price"
placeholder="Single_Room_Price"
value={this.state.Single_Room_Price}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'10px'}}>Double_Room_Price</label>
<input type="text"
className="form-contorl"
name="Double_Room_Price"
placeholder="Double_Room_Price"
value={this.state.Double_Room_Price}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'50px'}}>Luxury_Room_Price</label>
<input type="text"
className="form-contorl"
name="Luxury_Room_Price"
placeholder="Luxury_Room_Price"
value={this.state.Luxury_Room_Price}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'50px'}}>Hotel_Contact</label>
<input type="text"
className="form-contorl"
name="Hotel_Contact"
placeholder="Hotel_Contact"
value={this.state.Hotel_Contact}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'50px'}}>Location</label>
<input type="text"
className="form-contorl"
name="Location"
placeholder="Location"
value={this.state.Location}
onChange={this.handleInputChange}/>
</div>

<button className="btn btn-success" type="submit" style={{marginTop:'15px',marginBottom:'15px'}} onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
&nbsp; Update Details
</button></center>
</th></tr></table>
    </form> 
    </div>
   
    <h3 style={{color:'#FF0000'}}>...Delete Hotel Details From List...</h3>

    <table style={{width:"27%"}}>
  <tr>
    <th>
    
    <center>
<div className="form-group" style={{marginBottom:'15px',marginTop:'10px'}}>
<label style={{marginBottom:'5px'}}>Hotel_ID</label>
<input type="text"
className="form-contorl"
name="Hotel_ID"
placeholder="Enter Hotel ID"
value={this.state.Hotel_ID}
onChange={this.handleInputChange}/></div>
</center></th></tr></table>
</div>

)
}
}
