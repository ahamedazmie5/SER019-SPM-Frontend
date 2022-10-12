
 import Swal from "sweetalert2";
 import React from "react";
 import { useState, useEffect } from "react";
 import { Link, useNavigate, useParams } from "react-router-dom";
 import { getUser, UpdateUser } from "./services/TourPacakage";
 import { Button } from "reactstrap";
 
 
 const  UpdateUser = () => {
 
   const navigate = useNavigate();
   const { id } = useParams();
 
   const [email, setemail] = useState("");
   const [userName, setuserName] = useState();
   const [contactNumber, setcontactNumber] = useState("");
 
   
   
 
 
   const handleemail = (e) => {
     setemail(e.target.value);
   };
 
   const handleuserName = (e) => {
     setuserName(e.target.value);
   };
 
   const handlecontactNumber = (e) => {
     setcontactNumber(e.target.value);
   };
 
 
 
 
 
 
   const GetData = async () => {
 
     let data = await getUser(id);
     console.log("Update User", data);
 
     setemail(data?.data?.email);
     setuserName(data?.data?.userName);
     setcontactNumber(data?.data?.contactNumber);
  
     
 
   };
 
   useEffect(() => {
     GetData();
   }, []);
 
   const UpdateData = async (e) => {
     e.preventDefault();
     let newdata = {
 
       email: email,
   
       userName: userName,
       contactNumber: contactNumber,
      
 
     };
 
     let data = await UpdateUser(id, newdata);
     console.log("Update success ", data);
     if (!data?.data?.email) {
       {
         Swal.fire('Congrats', 'Update   successfully ', 'success')
         navigate("");
       }
 
     } else {
       {
         Swal.fire('Congrats', 'Update room successfully ', 'success')
         navigate("");
       }
     }
   };
 
   return (
     <div>
       <div className="container shadow border border-5 my-5 mx-auto w-50">
         <div className="col p-3">
           <h3 className=" fw-bolder mb-4"><center>Update package Details</center></h3>
           <form>
 
             <div className="row py-3">
               <div className="col-md-6">
                 <label for="name"> email  </label>
                 <input type="text" class="form-control" value={email} onChange={handleemail} placeholder=" " />
               </div>
               <div class="col-md-6">
                 <label for="type"> Room Type  </label>
                 <input class="form-control" id="type" value={userName} onChange={handleuserName} placeholder="" />
               </div>
 
             </div>
 
             <div className="row py-3">
               <div class="col-md-3">
                 <label for="count"> Max Count </label>
                 <input class="form-control" type="text" value={contactNumber} onChange={handlecontactNumber} placeholder="Enter Max Count" />
               </div>
               
               
           
             </div>
 
            
             <div className="d-grid gap-2 d-md-flex justify-content-md-end">
               <Button rounded color="danger" type="submit" onClick={(e) => UpdateData(e)} className="btn btn-warning"> Update  </Button>
            
             </div>
           </form>
         </div>
       </div>
     </div>
   );
 };
 
 export default  UpdateTourPacakage;