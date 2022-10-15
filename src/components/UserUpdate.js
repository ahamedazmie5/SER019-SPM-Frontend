
 import Swal from "sweetalert2";
 import React from "react";
 import { useState, useEffect } from "react";
 import { Link, useNavigate, useParams } from "react-router-dom";
 import { getUser, updateUserById } from "./ServicesDisa/User";
 import { Button } from "reactstrap";
 
  
 
 
 const  UserUpdate = () => {
 
   const navigate = useNavigate();
   const { id } = useParams();
 
   const [email, setemail] = useState("");
   const [Fullname, setFullname] = useState();
   const [pNumber, setpNumber] = useState("");
 
   
   
 
 
   const handleemail = (e) => {
     setemail(e.target.value);
   };
 
   const handleFullname = (e) => {
     setFullname(e.target.value);
   };
 
   const handlepNumber = (e) => {
     setpNumber(e.target.value);
   };
 
 
 
 
 
 
   const GetData = async () => {
 
     let data = await getUser(id);
     console.log("Update User", data);
 
    setemail(data?.data?.email);
    setFullname(data?.data?.Fullname);
    setpNumber(data?.data?.pNumber);
   };
 
   useEffect(() => {
     GetData();
   }, []);
 
   const UpdateData = async (e) => {
     e.preventDefault();
     let newdata = {
 
       email: email, 
       Fullname: Fullname,
       pNumber: pNumber,
      
 
     };
 
     let data = await updateUserById(id, newdata);
     console.log("Update success ", data);
     if (!data?.data?.email) {
       {
         Swal.fire('Congrats', 'Update   successfully ', 'success')
         navigate("");
       }
 
     } else {
       {
         Swal.fire('Congrats', 'Update User Unsuccessful', 'success')
         navigate("");
       }
     }
   };
 
   return (
     <div>
       <div className="container shadow border border-5 my-5 mx-auto w-50">
         <div className="col p-3">
           <h3 className=" fw-bolder mb-4"><center>Update User Details</center></h3>
           <form>
 
             <div className="row py-3">
               <div className="col-md-6">
                 <label for="name"> Email  </label>
                 <input type="text" class="form-control" value={email} onChange={handleemail} placeholder=" " />
               </div>
               <div class="col-md-6">
                 <label for="type"> Full Name  </label>
                 <input class="form-control" id="type" value={Fullname} onChange={handleFullname} placeholder="" />
               </div>
 
             </div>
 
             <div className="row py-3">
               <div class="col-md-3">
                 <label for="count"> Mobile Number </label>
                 <input class="form-control" type="text" value={pNumber} onChange={handlepNumber} placeholder="Enter Max Count" />
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
 
 export default  UserUpdate;