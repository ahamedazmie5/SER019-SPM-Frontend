import React, { Component } from 'react';
import axios from 'axios';


export default class UpdateReservation extends Component {

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
        const id = this.props.match.params.id;
        
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
        
        axios.put(`http://localhost:8080//travelgo/updateHotelReservation/${id}`,data).then((res) =>{
        if(res.data.success){
alert("Updated Successfully")

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
    componentDidMount(){
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8080//travelgo/getAllHotelPackages/${id}`).then((res) =>{
    if(res.data.success){
    this.setState({
        Customer_Name:res.data.Customer_Name,
        Customer_NIC:res.data.Customer_NIC,
        Contact_Number:res.data.Contact_Number,
        Check_In_Date:res.data.Check_In_Date,
        Check_Out_Date:res.data.Check_Out_Date,
        Room_Type:res.data.Room_Type,
        No_Of_Members:res.data.No_Of_Members
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
    <h1 className="h3 mb-3 font-weight-normal" style={{color:'#FF0000'}}>...Update Reservation Details...</h1>
    <form className="needs-validation" noValidate>

    <table style={{width:"40%"}}>
  <tr>
    <th>
    
    <center>
<div className="form-group" style={{marginBottom:'15px',marginTop:'10px'}}>
<label style={{marginBottom:'5px',marginRight:'5px'}}>Customer_Name</label>
<input type="text"
className="form-contorl"
name="Customer_Name"
placeholder="Customer_Name"
value={this.state.Customer_Name}
onChange={this.handleInputChange}/>
</div> 

<div className="form-group" style={{marginBottom:'15px'}}>   
<label style={{marginBottom:'5px',marginRight:'5px'}}>Customer_NIC</label>
<input type="text"
className="form-contorl"
name="Customer_NIC"
placeholder="Customer_NIC"
value={this.state.Customer_NIC}
onChange={this.handleInputChange}/>
</div>
    
<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>Contact_Number</label>
<input type="text"
className="form-contorl"
name="Contact_Number"
placeholder="Contact_Number"
value={this.state.Contact_Number}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'10px'}}>Check_In_Date</label>
<input type="text"
className="form-contorl"
name="Check_In_Date"
placeholder="Check_In_Date"
value={this.state.Check_In_Date}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'50px'}}>Check_Out_Date</label>
<input type="text"
className="form-contorl"
name="Check_Out_Date"
placeholder="Check_Out_Date"
value={this.state.Check_Out_Date}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'50px'}}>Room_Type</label>
<input type="text"
className="form-contorl"
name="Room_Type"
placeholder="Room_Type"
value={this.state.Room_Type}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'50px'}}>No_Of_Members</label>
<input type="text"
className="form-contorl"
name="No_Of_Members"
placeholder="No_Of_Members"
value={this.state.No_Of_Members}
onChange={this.handleInputChange}/>
</div>

<button className="btn btn-success" type="submit" style={{marginTop:'15px',marginBottom:'15px'}} onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
&nbsp; Update Details
</button></center>
</th></tr></table>
    </form> 
    </div>
   
    <h3 style={{color:'#FF0000'}}>...Delete Reservation From List...</h3>

    <table style={{width:"27%"}}>
  <tr>
    <th>
    
    <center>
<div className="form-group" style={{marginBottom:'15px',marginTop:'10px'}}>
<label style={{marginBottom:'5px'}}>Customer_NIC</label>
<input type="text"
className="form-contorl"
name="Customer_NIC"
placeholder="Customer_NIC"
value={this.state.Customer_NIC}
onChange={this.handleInputChange}/></div>
</center></th></tr></table>
</div>

)
}
}
