

 import Swal from "sweetalert2";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTourPackages, UpdateTourPackages } from "./services/TourPacakage";
import { Button } from "reactstrap";


const  UpdateTourPacakage = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [title, settitle] = useState("");
  const [topic, settopic] = useState();
  const [description, setdescription] = useState("");

  
  


  const handletitle = (e) => {
    settitle(e.target.value);
  };

  const handletopic = (e) => {
    settopic(e.target.value);
  };

  const handledescription = (e) => {
    setdescription(e.target.value);
  };






  const GetData = async () => {

    let data = await getTourPackages(id);
    console.log("Update package", data);

    settitle(data?.data?.title);
    settopic(data?.data?.topic);
    setdescription(data?.data?.description);
 
    

  };

  useEffect(() => {
    GetData();
  }, []);

  const UpdateData = async (e) => {
    e.preventDefault();
    let newdata = {

      title: title,
  
      topic: topic,
      description: description,
     

    };

    let data = await UpdateTourPackages(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.title) {
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
                <label for="name"> title  </label>
                <input type="text" class="form-control" value={title} onChange={handletitle} placeholder=" " />
              </div>
              <div class="col-md-6">
                <label for="type"> Room Type  </label>
                <input class="form-control" id="type" value={topic} onChange={handletopic} placeholder="" />
              </div>

            </div>

            <div className="row py-3">
              <div class="col-md-3">
                <label for="count"> Max Count </label>
                <input class="form-control" type="text" value={description} onChange={handledescription} placeholder="Enter Max Count" />
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

