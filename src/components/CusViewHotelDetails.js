import React, { Component } from 'react';
import axios from 'axios';

export default class CusViewHotelDetails extends Component{
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
axios.get("http://localhost:8080/travelgo/packages/getAllHotelPackages").then(res =>{
  console.log("data",res.data);
  this.setState({
  posts:res.data
  });
})
}

onDelete = (id) =>{
axios.delete(`http://localhost:8080/menutables/delete/${id}`).then((res) =>{
alert("Delete Successfully");
this.retrievePosts();
})
}

filterData(posts,searchKey){
console.log(posts)
const result = posts.filter((post) =>
post.Hotel_Name.toLowerCase().includes(searchKey)||
post.Location.toLowerCase().includes(searchKey)
)
this.setState({posts:result})
}

handleSearchArea = async (e) =>{
    const searchKey=e.currentTarget.value;
    await axios.get("http://localhost:8080/travelgo/packages/getAllHotelPackages").then(res =>{
  console.log("data",res.data);
  this.filterData(res.data,searchKey)
})
   
}
//customer view hotel details
render() {
return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link active" aria-current="page" href="/CusViewHotelDetails"><h5>View All Hotels Packages</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" aria-current="page" href="/AddReservation"><h5>Add New Reservation</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/CusViewReservations"><h5>Update Reservation Details</h5></a></b>
        </li>
        <li className="nav-item" style={{backgroundColor:'#C0C0C0',color:'black',marginRight:'5px'}}>
          <b><a className="nav-link" href="/CusViewReservations"><h5>Delete Reservation Details</h5></a></b>
        </li>
        
      </ul>
      
      
    </div>

</nav>

<div className="container">
    <div className="row">
<div className="col-lg-9 mt-2 mb-2" style={{backgroundColor:'#0000A0',color:'white'}}>

<h4>All Hotel Details</h4>
</div>
<div className="col-lg-3 mt-2 mb-2">
    <input
    className="form-control"
    type="search"
    placeholder="Search (Hotel_Name / Location)"
    name="searchQuery"
    onChange={this.handleSearchArea}>
    </input>
    </div>
 </div>
<table className="table table-hover">
<thead>
<tr>
<th Scope="col">#</th>
<th Scope="col">Hotel ID</th>
<th Scope="col">Hotel Name</th>
<th Scope="col">Single Room Price</th>
<th Scope="col">Double Room Price</th>
<th Scope="col">Luxury Room Price</th>
<th Scope="col">Hotel Contact</th>
<th Scope="col">Location</th>
</tr>
</thead>

<tbody>
{this.state.posts.map((post,index) =>(
<tr key={index}>
<th scope="row">{index+1}</th>
<td>
<a href={`/post/${post._id}`} style={{textDecoration:'none'}}>
{post.Hotel_ID}
</a>
</td>
<td>{post.Hotel_Name}</td>
<td>{post.Single_Room_Price}</td>
<td>{post.Double_Room_Price}</td>
<td>{post.Luxury_Room_Price}</td>
<td>{post.Hotel_Contact}</td>
<td>{post.Location}</td>

</tr>
))}
</tbody>
</table>

<button className="btn btn-success"><a href="/AddReservation" style={{textDecoration:'none',color:'white'}}>Add reservation</a></button>
</div>
</div>
)
}
}
