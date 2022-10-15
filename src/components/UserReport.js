import React, { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import {
  FormControl,
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
} from '@mui/material';

const UserReport = () => {
    const [UserSchema, SetUserShcema] = useState([]);

  useEffect(() => {
    getData();
    console.log(UserSchema,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  }, []);

  const getData = async () => {
    console.log("get data executed");
    await axios
      .get("http://localhost:8080/user/getAllUsers")
      .then((data) => {
        console.log("Data ", data);
        SetUserShcema(data?.data);
      })
      console.log(data,'data')
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Typography
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 14,
          marginTop: 14,
          fontSize: 33,
          color: '#001a66',
        }}
      >
        User Details Report
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: 10,
        }}
      >
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button btn btn-dark"
          table="table-to-xls"
          filename="All User Details"
          sheet="tablexls"
          buttonText={<i class="fa-solid fa-print"> Download Report</i>}
        />
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          id="table-to-xls"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>User Name</b>
              </TableCell>
              <TableCell align="center">
                <b>Email</b>
              </TableCell>
              <TableCell align="center">
                <b>Phone Number&nbsp;</b>
              </TableCell>
              <TableCell align="center">
                <b>User Role&nbsp;</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UserSchema.map((UserSchema, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
               
                <TableCell align="center">{UserSchema?.Fullname}</TableCell>
                <TableCell align="center">{UserSchema?.email}</TableCell>
                <TableCell align="center">{UserSchema?.pNumber}</TableCell>
                <TableCell align="center">{UserSchema?.userRole}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserReport;
