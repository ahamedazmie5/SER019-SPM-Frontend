

 import {useState ,useEffect }from 'react'
 import { Link , useNavigate } from "react-router-dom";
 import axios from "axios";
 import e from "cors";
 import Swal from "sweetalert2";
 
 
 
 const  Display  = () => {
   const [UserSchema, SetUserShcema] = useState([]);
 
   const navigate = useNavigate();
 
   const getData = async () => {
     console.log("get data executed");
     await axios
       .get("http://localhost:8080/travelgo/user/getAllUsers")
       .then((data) => {
         console.log("Data ", data);
         SetUserShcema(data?.data);
       })
       .catch((error) => {
         console.log(error);
       });
   };
 
   useEffect(() => {
     getData();
   }, []);
 
   return (
     <div style={{ textAlign: "center" }}>
            
       <div style={{marginTop:"30px"}}>
           <center><h1>All System Users</h1></center> 
         </div>
         <br/>
         
 
 
 
      
       <table className="table">
         <thead>
           <tr className="text-info bg-light">
             <th scopse="col">#</th>
             <th scopse="col">User Name</th>
             <th scopse="col">Email</th>
             <th scopse="col">Contact Number </th>
             <th scopse="col">ID Number</th>
             <th scopse="col">User Role</th>
       
           </tr>
         </thead>
         <tbody>
           {UserSchema.map((UserSchema, index) => (
             <tr key={index}>
               <th scope="row">{index + 1}</th>
               <td>{UserSchema.userName}</td>
               <td>{UserSchema.email}</td>
               <td>{UserSchema.contactNumber}</td>
               <td>{UserSchema.IDnumber}</td>
               <td>{UserSchema.userRole}</td>
     
               
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 };
 
 export default  Display ;