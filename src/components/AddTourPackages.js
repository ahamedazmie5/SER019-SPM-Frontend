


 import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const  AddTourPackages  = () => {


  

  const [topic, setGruopLeaderEmail] = useState("");
  const [description, setGruopLeaderItNumber] = useState();
  const [title, setGruopMembersItNumbers] = useState("");


  

  const changeOnClick = (f) => {
    

    const addgroup = {

        topic,
        description,
        title,
     
    };

    axios.post("http://localhost:8080/travelgo/createTourPackages", addgroup);

    Swal.fire("Congrats", " your Group Register  successfully", "success")

  

    
    
  };
  return (

 
      <div style={{marginTop:"30px"}}>
       
		<br/>
   
<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                   <div className="card card0 border-0">
                     <br></br>
               
                       <div className="row d-flex">
                           <div className="col-lg-6">
                               <div className="card1 pb-5">
                          
                                   <div className="row px-3 justify-content-center mt-4 mb-5 border-line">  </div>
                               </div>

                       
                           </div>

                           
                           <div className="col-lg-6">
                       
                               <div className="card2 card border-0 px-4 py-5">
                               <form onSubmit={changeOnClick} encType="">
                               <h1 style={{color:"red"}} >Register Your Research Group  </h1>
                               <br></br>
                            
                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Gruop Leader Email </label>
                                       <input type="email" class="form-control" id="floatingInput"      onChange={(f) => setGruopLeaderEmail(f.target.value)}  required placeholder="Gruop Leader Email" />
                                   
                                   </div>
                                   <div class="form-floating mb-3">
                                   <label for="floatingPassword">Gruop Leader ItNumber</label>
                                       <input  class="form-control" id="floatingPassword"  onChange={(f) => setGruopLeaderItNumber(f.target.value)}  required  type="text"   placeholder="Gruop Leader ItNumber" />
                                     
                                   </div>

                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Gruop Members ItNumbers </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3"  onChange={(f) => setGruopMembersItNumbers(f.target.value)}  required  placeholder="enter   Gruop Members ItNumbers"    rows="6">
                                       </textarea>

                                   </div>

                                  
                                 


                                 






                              
                                   <div className="row mb-5 px-4">
                                       <a ><button  type="submit"  className="btn btn-blue ">Register </button></a>
                                      
                                   </div>
                                   </form>
                                   <div>
                                     
                               
                                       
                                   </div>
                                   
                               </div>
                           </div>
                       </div>
                     
               
                   </div>
               </div>
               


    </div>
  );
};

export default  AddTourPackages ;