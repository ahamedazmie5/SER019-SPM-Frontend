

import {useState ,useEffect }from 'react'
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import e from "cors";
import Swal from "sweetalert2";



const  Display  = () => {
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

  return (
    <div style={{ textAlign: "center" }}>
           
      <div style={{marginTop:"30px"}}>
          <center><h1>Welcome to  Research Project Management Tool system</h1></center> 
        </div>
        <br/>
        



      <center>
        <h1>All Marking Schemes</h1>
      </center>
      <table className="table">
        <thead>
          <tr className="text-info bg-dark">
            <th scopse="col">#</th>
            <th scopse="col">Assiginment Name</th>
            <th scopse="col">Allocated Full Marks</th>
            <th scopse="col">Discription </th>
      
          </tr>
        </thead>
        <tbody>
          {MarkingSchema.map((MarkSchema, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{MarkSchema.topic}</td>
              <td>{MarkSchema.description}</td>
              <td>{MarkSchema.title}</td>
    
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default  Display ;