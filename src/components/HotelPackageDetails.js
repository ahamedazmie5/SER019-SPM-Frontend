import React, { Component } from 'react';
import axios from 'axios';

export default class HotelPackageDetails extends Component {
    constructor(props){
        super(props);
        
        this.state={
        post:{}
        };
        }

        getdata = async ()=>{
            const id = window.location.href.toString();
            console.log(id.substr(42, id.length - 1));
            const finalid = id.substr(42, id.length - 1);

            let res = await axios.get(`http://localhost:8080/travelgo/packages/getHotelPackages/${finalid}`);
            console.log("res",res);
            if(res.data.Hotel_ID != null){
                this.setState({
                post:res.data
                });
                console.log(this.state.post);

                }

        }

        componentDidMount(){
            this.getdata();

        }
        

render() {


return (
    <div >

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

<h1 className="h3 mb-3 font-weight-normal" style={{backgroundColor:'#0000A0',color:'white'}}>{this.state.post.Hotel_Name}'s Package Details</h1>
     

    <div style={{marginTop:'20px'}}>
    <h2>{this.state.post.Hotel_Name}</h2>
    <hr/><h3>
<dl cassName="row">
    <dt className="col-sm-3">Hotel ID   - {this.state.post.Hotel_ID}</dt>
    

    <dt className="col-sm-3">Single Room Price  - {this.state.post.Single_Room_Price}</dt>
    

    <dt className="col-sm-3">Double Room Price  - {this.state.post.Double_Room_Price}</dt>
    

    <dt className="col-sm-3">Luxury Room Price        - {this.state.post.Luxury_Room_Price}</dt>

    <dt className="col-sm-3">Hotel Contact        - {this.state.post.Hotel_Contact}</dt>

    <dt className="col-sm-3">Location         - {this.state.post.Location}</dt>
    
</dl>
</h3>
</div>


<button className="btn btn-success"><a href="/ViewHotelDetails" style={{textDecoration:'none',color:'white',width:"200px", height:"40px", marginLeft:"px", marginTop:"100px"}}>Back</a></button>
</div>
)
}
}
