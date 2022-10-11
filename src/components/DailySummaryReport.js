import React, { Component } from 'react';
import axios from 'axios';


export default class DailySummaryReport extends Component{
constructor(props){
super(props);

this.state={
posts:[]
};
}

componentDidMount(){
this.retrievePosts();
}

retrievePosts(){
axios.get("http://localhost:8080/travelgo/packages/getAllHotelReservations").then(res =>{
    console.log("data",res.data);
    this.setState({
    posts:res.data
});

} )
}


filterData(posts,searchKey){

    const result = posts.filter((post) =>
    post.Contact_Number.toLowerCase().includes(searchKey)||
    //post.NIC.includes(searchKey)||
    post.Customer_Name.toLowerCase().includes(searchKey)||
    post.Customer_NIC.toLowerCase().includes(searchKey)
    )
    this.setState({posts:result})
    }
    
handleSearchArea = async (e) =>{
    const searchKey=e.currentTarget.value;
    await axios.get(`http://localhost:8080/travelgo/packages/getAllHotelReservations`).then(res =>{
        console.log("data",res.data);
        this.filterData(res.data,searchKey)
    })
    }
    

render() {
return (


<div className="container" style={{marginLeft:"80px", marginTop:"300px",maxWidth:"100%"}}>

<table className="table2" style={{width:"100%"}}>

<tr></tr>

<div style={{marginLeft:"920px", marginTop:"-280px"}}>Amalya Reach Hotel,</div>
<div style={{marginLeft:"920px"}}>Moragahahena,</div>
<div style={{marginLeft:"920px"}}>Homagama</div>
<br></br>
<div style={{marginLeft:"80px"}}>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
<div style={{marginLeft:"600px"}}>07th Of October 2021</div>


<br></br>

<table className="table1" style={{width:"60%", marginLeft:"220px",  bordercollapse:"collapse"}}>
<tr>
    <th className="col1" colspan="9" style={{textAlign:"center"}}>Daily Summary Report For Reservations</th>
  </tr>
<tr className="row1" style={{backgroundColor:"#F3F781"}}>
<th className="col1" style={{textAlign:"center"}}>Customer Name</th>
<th className="col1" style={{textAlign:"center"}}>Customer NIC</th>
<th className="col1" style={{textAlign:"center"}}>Contact Number</th>
<th className="col1" style={{textAlign:"center"}}>Check_In_Date</th>
<th className="col1" style={{textAlign:"center"}}>Check_Out_Date</th>
<th className="col1" style={{textAlign:"center"}}>Room Type</th>
<th className="col1" style={{textAlign:"center"}}>No_Of_Members</th>

</tr>

{this.state.posts.map((posts,index) =>(
<tr className="row1" key={index} style={{backgroundColor:"#F3F781"}}>
<td className="col1" style={{textAlign:"center"}}>{posts.Customer_Name}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Customer_NIC}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Contact_Number}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Check_In_Date}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Check_Out_Date}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Room_Type}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.No_Of_Members}</td>

</tr>
))}

</table>
<br></br>
<br></br>
<div style={{marginLeft:"290px"}}>.........................</div>
<div style={{marginLeft:"320px", marginBottom:"100px"}}>Date</div>
<div style={{marginLeft:"840px", marginTop:"-143px"}}>...........................................................................</div>
<div style={{marginLeft:"860px", marginBottom:"100px"}}>(Signature by Restaurant manager)</div>
</table>
<br/>
</div>
)
}
}
