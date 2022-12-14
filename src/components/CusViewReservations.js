import React, { Component } from 'react';
import axios from 'axios';

export default class CusViewReservations extends Component{
constructor(props){
super(props);

this.state={
posts:[]
};
}

componentDidMount(){
  console.log("executed component")
  this.retrievePosts();
}

retrievePosts(){
axios.get("http://localhost:8080/travelgo/packages/getAllHotelReservations").then(res =>{
  console.log("data",res.data);
  this.setState({
  posts:res.data
  });
})
}

onDelete = (finalid) =>{
axios.delete(`http://localhost:8080/travelgo/packages/RemoveHotelReservation/${finalid}`).then((res) =>{
alert("Delete Successfully");
this.retrievePosts();
})
}

filterData(posts,searchKey){
console.log(posts)
const result = posts.filter((post) =>
post.Customer_NIC.toLowerCase().includes(searchKey)||
post.Customer_Name.toLowerCase().includes(searchKey)
)
this.setState({posts:result})
}

handleSearchArea = async (e) =>{

    const searchKey=e.currentTarget.value;

    await axios.get(`http://localhost:8080/travelgo/packages/getAllHotelReservations`).then(res =>{
    console.log("data",res.data);
    this.filterData(res.data,searchKey)

});

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
          <b><a className="nav-link active" href="/CusViewReservations"><h5>Delete Reservation Details</h5></a></b>
        </li>
        
      </ul>
      
      
    </div>

</nav>

<div className="container">
    <div className="row">
<div className="col-lg-9 mt-2 mb-2" style={{backgroundColor:'#0000A0',color:'white'}}>

<h3>All Hotel Reservations</h3>
</div>
<div className="col-lg-3 mt-2 mb-2">
    <input
    className="form-control"
    type="search"
    placeholder="Search (NIC / Name)"
    name="searchQuery"
    onChange={this.handleSearchArea}>
    </input>
    </div>
 </div>
<table className="table table-hover">
<thead>
<tr>
<th Scope="col">#</th>
<th Scope="col">Customer_Name</th>
<th Scope="col">Customer_NIC</th>
<th Scope="col">Contact_Number</th>
<th Scope="col">Check_In_Date</th>
<th Scope="col">Check_Out_Date</th>
<th Scope="col">Room_Type</th>
<th Scope="col">No_Of_Members</th>
</tr>
</thead>

<tbody>
{this.state.posts.map((post,index) =>(
<tr key={index}>
<th scope="row">{index+1}</th>
<td>

{post.Customer_Name}

</td>
<td>{post.Customer_NIC}</td>
<td>{post.Contact_Number}</td>
<td>{post.Check_In_Date}</td>
<td>{post.Check_Out_Date}</td>
<td>{post.Room_Type}</td>
<td>{post.No_Of_Members}</td>

<td style={{width:"400px"}}>
<a className="btn btn-warning" href={`/UpdateReservation/${post._id}`}>
<i className="fas fa-edit"></i>&nbsp;Edit
</a>
&nbsp;
<a className="btn btn-danger" onClick={() =>this.onDelete(post._id)}>
<i className="fas fa-trash-alt"></i>&nbsp;Delete
</a>
</td>
</tr>
))}
</tbody>
</table>


</div>
</div>
)
}
}
