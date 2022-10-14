import React, { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  FormControl,
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
} from '@mui/material';

const BlogReport = () => {
  const [blogsArray, setBlogsArray] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  //get all blogs
  const getAllBlogs = async () => {
    console.log('view blogs');
    try {
      const fetchData = await fetch('http://localhost:8080/blogs/getAllBlogs'); //fetch data
      console.log(fetchData);

      const jsonData = await fetchData.json();
      console.log(jsonData);
      if (jsonData) {
        let blogsArray = [];
        for (let i = 0; i < jsonData.length; i++) {
          let temp = {
            id: jsonData[i]._id,
            image: jsonData[i].img,
            title: jsonData[i].title,
            subDescription: jsonData[i].subDescription,
          };
          blogsArray.push(temp);
        }
        setBlogsArray(blogsArray);
      }
    } catch (error) {
      console.error(error.message);
    }
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
        Blog Details Report
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
          filename="Full Blog Details"
          sheet="tablexls"
          buttonText={<i class="fa-solid fa-print">Download Report</i>}
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
                <b>Number</b>
              </TableCell>
              <TableCell align="center">
                <b>Title</b>
              </TableCell>
              <TableCell align="center">
                <b>Sub Description&nbsp;</b>
              </TableCell>
              <TableCell align="center">
                <b>Image URL&nbsp;</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogsArray.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="center">{row?.title}</TableCell>
                <TableCell align="center">{row?.subDescription}</TableCell>
                <TableCell align="center">{row?.image}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BlogReport;
