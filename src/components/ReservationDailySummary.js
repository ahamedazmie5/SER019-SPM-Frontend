import React, { Component } from 'react';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default class ReservationDailySummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log("executed component")
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8080/travelgo/packages/getAllHotelReservations").then(res => {
      console.log("data", res.data);
      this.setState({
        posts: res.data
      });
    })
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/summarytables/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }

  filterData(posts, searchKey) {
    console.log(posts)
    const result = posts.filter((post) =>
      post.Customer_NIC.toLowerCase().includes(searchKey) ||
      post.Customer_Name.toLowerCase().includes(searchKey)
    )
    this.setState({ posts: result })
  }

  handleSearchArea = async (e) => {

    const searchKey = e.currentTarget.value;

    await axios.get(`http://localhost:8080/travelgo/packages/getAllHotelReservations`).then(res => {

      console.log("data", res.data);
      this.filterData(res.data, searchKey)
    })
  }

  render() {
    return (

      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                <b><a className="nav-link" aria-current="page" href="/ViewHotelDetails"><h5>View All Hotels</h5></a></b>
              </li>
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                <b><a className="nav-link" aria-current="page" href="/ViewReservationDetails"><h5>View All Reservations</h5></a></b>
              </li>
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                <b><a className="nav-link" aria-current="page" href="/AddHotelPackages"><h5>Add New Hotel Packages</h5></a></b>
              </li>
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                <b><a className="nav-link" href="/ViewHotelDetails"><h5>Update Hotel Details</h5></a></b>
              </li>
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                <b><a className="nav-link" href="/ViewHotelDetails"><h5>Delete Hotel Details</h5></a></b>
              </li>
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                <b><a className="nav-link active" href="/ReservationDailySummary"><h5>Reservation Daily Summary</h5></a></b>
              </li>

            </ul>


          </div>

        </nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <center>
                <div className="col-lg-9 mt-2 mb-2" style={{ backgroundColor: '#0000A0', color: 'white' }}>

                  <h4>Reservation Daily Summary</h4>
                </div>
              </center>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search (Name/NIC)"
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
              {this.state.posts.map((post, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>

                    {post.Customer_Name}

                  </td>

                  <td>{post.Customer_NIC}</td>
                  <td>{post.Contact_Number}</td>
                  <td>{post.Check_In_Date}</td>
                  <td>{post.Check_Out_Date}</td>
                  <td>{post.Room_Type}</td>
                  <td>{post.No_Of_Members}</td>

                </tr>
              ))}
            </tbody>
          </table><center>
          <table><th>
          <div>
          <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success"
                    table="table-to-xls"
                    filename="Reservation Details"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
          </div> 
          </th>
          <th></th>
          <th style={{marginleft:"10px"}}>
          <button id="test-table-xls-button" className="btn btn-success"><a href="/DailySummaryReport" style={{ textDecoration: 'none', color: 'white' }}>Genarate Daily Summary</a></button>
          </th></table></center>
        </div>
       
        <div style={{display:"none"}}>
          <table  id="table-to-xls">
            <center><tr><h2>Reservation Daily Summary Report</h2></tr></center>
              <tr><h3>
                <th Scope="col">#</th>
                <th Scope="col">Customer_Name</th>
                <th Scope="col">Customer_NIC</th>
                <th Scope="col">Contact_Number</th>
                <th Scope="col">Check_In_Date</th>
                <th Scope="col">Check_Out_Date</th>
                <th Scope="col">Room_Type</th>
                <th Scope="col">No_Of_Members</th>
                </h3></tr>
              {this.state.posts.map((post, index) => (
                <tr key={index}><h3>
                  <th >{index + 1}</th>
                  <td>

                    {post.Customer_Name}

                  </td>

                  <td>{post.Customer_NIC}</td>
                  <td>{post.Contact_Number}</td>
                  <td>{post.Check_In_Date}</td>
                  <td>{post.Check_Out_Date}</td>
                  <td>{post.Room_Type}</td>
                  <td>{post.No_Of_Members}</td>
                  </h3>
                </tr>
              ))}
          </table>
        </div>




      </div>
    )
  }
}

