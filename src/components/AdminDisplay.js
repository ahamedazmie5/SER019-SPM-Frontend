

 import {useState ,useEffect }from 'react'
 import { Link , useNavigate } from "react-router-dom";
 import axios from "axios";
 import e from "cors";
 import Swal from "sweetalert2";
 import computing from "../assets/computing.jpg"
 import {
   Badge,
   Card,
   CardHeader,
   CardTitle,
   CardBody,
   Label,
   Button,
   Row,
   Col,
   CardImg,
   Container,
   CardText,
 } from "reactstrap";
 
 
 const  AdminDisplay  = () => {
   const [MarkingSchema, SetMarkingSchema] = useState([]);
 
   const navigate = useNavigate();
 
   const getData = async () => {
     console.log("get data executed");
     await axios
       .get("http://localhost:8080/travelgo/getAllTourPackages")
       .then((data) => {
         console.log("Data ", data);
         SetMarkingSchema(data?.data);
       })
       .catch((error) => {
         console.log(error);
       });
   };
 
   useEffect(() => {
     getData();
   }, []);
   

   
  const removetourpackage = id =>{
    axios.delete(`http://localhost:8080/travelgo/RemoveTourPackages/${id}`)
    .then(res => 
      
      {Swal.fire('Congrats' , ' remove successfully ' , 'success')
  
  }    )
  SetMarkingSchema(MarkingSchema.filter(elem=>elem._id !== id))
  }



   return (
     <div style={{ textAlign: "center" }}>
            
       <div style={{marginTop:"30px"}}>
           <center><h1>Welcome to  TravelGO Admin</h1></center> 
         </div>
         <br/>
         
 
          
 
       <center>
         <h1>Tour Packages</h1>
       </center>
       <Container>
         <Row xs={4}>
           {MarkingSchema?.map((tourpackage) => {
             return (
               <Col style={{ padding: "10px"  , height:"auto"}}>
                 <Card>
                   <CardHeader>
                     <CardTitle style={{ color: "black", fontSize: "25px" }}>
                       <center>
                         <b>{tourpackage.topic}</b>
                       </center>
                     </CardTitle>
                     <center>
                       <CardImg
                         //width="50%"
                         src={tourpackage?.img}
                         alt="computing Img"
                         style={{ width: "100%" , height:"100%" }}
                       />
                     </center>
                   </CardHeader>
                   <CardBody>
                     {/* <CardText> description -: {tourpackage.title}</CardText> */}
                     <CardText>{tourpackage.title}</CardText>
                
                    
                     <div>
                     <Link to={`/UpdateTourPackages/${tourpackage._id}`}>
                          <button className='btn btn-success'>Update </button>
                        </Link>
                         <button name="submit" class="btn btn-danger" type="submit" value="Delete"   onClick={()=>removetourpackage(tourpackage._id)}>Delete</button>
                        
                     </div>
                 
                     
                   </CardBody>
                 </Card>
               </Col>
             );
           })}
         </Row>
       </Container>    
     </div>
   );
 };
 
 export default  AdminDisplay ;