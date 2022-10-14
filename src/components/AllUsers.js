import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { FormControl, TextField, Typography, Button } from '@mui/material';

import { async } from '@firebase/util';

const Display = () => {
  const [UserSchema, SetUserShcema] = useState([]);

  const navigate = useNavigate();

  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[500],
    },
    outlineColor: purple[500],
    color: 'white',
  }));
  
  const ColorButton2 = styled(Button)(({ theme }) => ({
    color: 'black',
  }));

  const getData = async () => {
    console.log("get data executed");
    await axios
      .get("http://localhost:8080/user/getAllUsers")
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

  const removeuser = (id)=>{
    axios 
    .delete(`http://localhost:8080/user/deleteUser/${id}`)
    .then((res)=>{
      Swal.fire("Congrats","Remove Successfully","sucess");
    });

    setUser(Users.filter((elem)=>elem._id !== id));
 };
 

 //naviagte to edit blog page
 const generateReport = async () => {
   try {
     navigate('/Userreport');
     //}
   } catch (error) {
     console.error(error.message);
   }
 };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginTop: "30px" }}>
        <div style={{display:'flex', justifyContent:'flex-end' ,flexDirection:'row'}}>
          <div style={{justifyContent:'center'}}>          <h1>All System Users</h1></div> 

     <ColorButton2
            variant="outlined"
            style={{
              color: 'black',
              border: '1px solid purple',
              marginLeft: 'auto',
              marginRight: 11,
              marginTop:20
            }}
            onClick={(e) => {
              generateReport(e);
            }}
          >
            Generate Report
          </ColorButton2></div>
     
        {/* <center>
          <h1>All System Users</h1>
        </center> */}
      </div>
      <br />

      <table className="table">
        <thead>
          <tr className="text-info bg-light">
            <th scopse="col">#</th>
            <th scopse="col">User Name</th>
            <th scopse="col">Email</th>
            <th scopse="col">Contact Number</th>
            <th scopse="col">User Role</th>
            <th scopse="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {UserSchema.map((UserSchema, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{UserSchema.Fullname}</td>
              <td>{UserSchema.email}</td>
              <td>{UserSchema.pNumber}</td>
              <td>{UserSchema.userRole}</td>
              <Link to ={{pathname:`/updateUser/${UserSchema._id}`
        
      }}>
       <button type="button" class="btn btn-success" style={{marginTop:'10px'}} > <i class="fas fa-user-check"></i>Update</button>&nbsp;&nbsp;&nbsp;
    </Link>
    <button  
    type="button" 
    class="btn btn-danger" 
    style={{marginTop:'10px'}} 
    value="Delete"
    onClick={()=>removeuser(UserSchema._id)}> <i class="fas fa-user-slash"></i>&nbsp;Delete </button>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button  
    type="button" 
    class="btn btn-primary" 
    style={{marginTop:'10px'}} 
    onClick={generateReport()}
   >Generate Report </button> */}
   
    </div>
  );
};

export default Display;
