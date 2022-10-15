import React, { Component } from 'react';
import axios from 'axios';
import img9 from'./Images/9.jpg';
import img13 from'./Images/13.jpg';
import img19 from'./Images/19.jpg';
import img8 from'./Images/8.jpg';
import img10 from'./Images/10.jpg';
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
        
        onSubmit = async (e) =>{
        e.preventDefault();
        const id = window.location.href.toString();
        console.log(id.substr(40, id.length - 1));
        const finalid = id.substr(40, id.length - 1);
        
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
        console.log("update data",data)
        
        let res = await axios.patch(`http://localhost:8080/travelgo/packages/updateHotelReservation/${finalid}`,data);
        console.log("res",res);
        if(res.data.Customer_Name != null){
alert("Reservation Updated Successfully")

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
        }
        
        getdata = async ()=>{
        const id = window.location.href.toString();
        console.log(id.substr(40, id.length - 1));
        const finalid = id.substr(40, id.length - 1);
    
       let res = await axios.get(`http://localhost:8080/travelgo/packages/getHotelReservation/${finalid}`);
       console.log("res", res);
       if(res.data.Customer_Name != null){
    this.setState({
        Customer_Name:res.data.Customer_Name,
        Customer_NIC:res.data.Customer_NIC,
        Contact_Number:res.data.Contact_Number,
        Check_In_Date:res.data.Check_In_Date,
        Check_Out_Date:res.data.Check_Out_Date,
        Room_Type:res.data.Room_Type,
        No_Of_Members:res.data.No_Of_Members
    });
    console.log(this.state);
  
    }
        };
    
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
          <b><a className="nav-link" aria-current="page" href="/CusViewHotelDetails"><h5>View All Hotels Packages</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" aria-current="page" href="/AddReservation"><h5>Add New Reservation</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link  active" href="/CusViewReservations"><h5>Update Reservation Details</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/CusViewReservations"><h5>Delete Reservation Details</h5></a></b>
        </li>
        
      </ul>
      
      
    </div>
  
  </nav>

<div className="col-md-8 mt-4 mx-auto">
<center><div className="col-lg-9 mt-2 mb-2" style={{backgroundColor:'#0000A0',color:'white'}}>

<center><h3>Update Your Reservation Details</h3></center>
</div></center>
    <form className="needs-validation" noValidate>

    <table style={{width:"100%",backgroundColor:'#d7dbdd'}}>
  <tr>
    <th>
    <img src={img19}style={{width:'200px',height:'150px'}}></img><br/>
    <img src={img9}style={{width:'200px',height:'150px'}}></img><br/>
    <img src={img13}style={{width:'200px',height:'150px'}}></img><br/>
<img src={img8}style={{width:'200px',height:'150px'}}></img>
</th> <th>
    <center>
<div className="form-group" style={{marginBottom:'15px',marginTop:'10px'}}>
<label style={{marginBottom:'5px',marginRight:'40px'}}>Customer_Name</label>
<input type="text" style={{width:"500px"}}
className="form-contorl"
name="Customer_Name"
placeholder="Customer_Name"
value={this.state.Customer_Name}
onChange={this.handleInputChange}/>
</div> 

<div className="form-group" style={{marginBottom:'15px'}}>   
<label style={{marginBottom:'5px',marginRight:'55px'}}>Customer_NIC</label>
<input type="text" style={{width:"500px"}}
className="form-contorl"
name="Customer_NIC"
placeholder="Customer_NIC"
value={this.state.Customer_NIC}
onChange={this.handleInputChange}/>
</div>
    
<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'35px'}}>Contact_Number</label>
<input type="text" style={{width:"500px"}}
className="form-contorl"
name="Contact_Number"
placeholder="Contact_Number"
value={this.state.Contact_Number}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'55px'}}>Check_In_Date</label>
<input type="text" style={{width:"500px"}}
className="form-contorl"
name="Check_In_Date"
placeholder="Check_In_Date"
value={this.state.Check_In_Date}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'40px'}}>Check_Out_Date</label>
<input type="text" style={{width:"500px"}}
className="form-contorl"
name="Check_Out_Date"
placeholder="Check_Out_Date"
value={this.state.Check_Out_Date}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'75px'}}>Room_Type</label>
<input type="text" style={{width:"500px"}}
className="form-contorl"
name="Room_Type"
placeholder="Room_Type"
value={this.state.Room_Type}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px',marginRight:'40px'}}>No_Of_Members</label>
<input type="text" style={{width:"500px"}}
className="form-contorl"
name="No_Of_Members"
placeholder="No_Of_Members"
value={this.state.No_Of_Members}
onChange={this.handleInputChange}/>
</div>

<button className="btn btn-success"><a href="/CusViewReservations" style={{textDecoration:'none',color:'white'}}>Back</a></button>
<button className="btn btn-success" type="submit" style={{marginTop:'15px',marginBottom:'15px',marginLeft:'100px'}} onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
&nbsp; Update Details
</button></center>
</th></tr></table>
    </form> 
    </div></div>

)
}
}
