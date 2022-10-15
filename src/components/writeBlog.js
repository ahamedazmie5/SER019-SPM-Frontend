import React, { useEffect, useState } from 'react';
import {
  FormControl,
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import male from '../assets/male.webp';
import Paper from '@mui/material/Paper';

import axios from 'axios';
//import { storage } from './firebase';
import FileInput from '../utils/FileInput';

import blog from '../assets/blog.jpg';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[500],
  },
  outlineColor: purple[500],
  color: 'white',
}));

const myStyle = {
  backgroundImage: `url(${blog})`,
  height: '100%',
  marginTop: '-70px',
  // fontSize: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const ColorButton2 = styled(Button)(({ theme }) => ({
  color: 'black',
}));

const WriteBlog = () => {
  const onInsertCancell = () => {
    setData({
      img: '',
      title: '',
      subDescription: '',
      description: '',
    });
  };

  const [data, setData] = useState({
    img: '',
    title: '',
    subDescription: '',
    description: '',
  });

  // word limit validation
  const handleChange = ({ currentTarget: input }) => {
    if (input.name == 'title' && input.value.length > 30) {
      alert('Word limit exceeded.');
    } else setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  //null validation of the form
  const onAdd = () => {
    if (
      data.title == '' &&
      data.description == '' &&
      data.subDescription == ''
    ) {
      alert('Please fill all the fields.');
    } else if (data.title == '') {
      alert('Please fill all the fields.');
    } else if (data.description == '') {
      alert('Please fill all the fields.');
    } else if (data.subDescription == '') {
      alert('Please fill all the fields.');
    } else if (data.img == '') {
      alert('Please upload an image.');
    } else if (data.title == '' && data.subDescription == '') {
      alert('Please fill all the fields.');
    } else if (data.title == '' && data.subDescription == '') {
      alert('Please fill all the fields.');
    } else {
      onInsertOk();
    }
  };

  const onInsertOk = async () => {
    try {
      const insert = await fetch('http://localhost:8080/blogs/createBlogs', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const newData = await insert.json();
      console.log(insert, 'data');
    } catch (error) {
      console.error(error.message);
    }
    setData({
      img: '',
      title: '',
      subDescription: '',
      description: '',
    });
  };

  const myStyle = {
    backgroundImage: `url(${male})`,
    height: '100%',
    marginTop: '-70px',
    // fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <div style={myStyle}>
        <div style={{ backgroundImage: `url(${blog[0]})` }}>
          <a href="/viewblogs" style={{ marginTop: 10 }}>
            Read Blogs
          </a>
          <Typography
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: 14,
              marginTop: 53,
              fontSize: 53,
              color: '#001a66',
            }}
          >
            Write your blog here.
          </Typography>
          {/* <img
            src={blog}
            alt="front image"
            style={{ width: '100%', height: 500, borderRadius: 5 }}
          />

          <hr color="#001a66" /> */}
          <div
            style={{
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <div style={{ backgroundImage: '../assets/blogBackground.jpg' }}>
              <FormControl
                sx={{
                  width: '100%',
                  border: '2px solid #772AD8',
                  borderRadius: 2,
                }}
              >
                <Paper elevation={3}>
                  <Box style={{ padding: 19 }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      {' '}
                      <div style={{ marginTop: 3 }}>
                        <Typography style={{ marginBottom: 3 }}>
                          Image
                        </Typography>
                        <FileInput
                          name="img"
                          label="Choose image"
                          handleInputState={handleInputState}
                          type="image"
                          value={data.img}
                        />
                      </div>
                      <div style={{ marginTop: 5, marginLeft: 10 }}>
                        <Typography style={{ marginBottom: 3 }}>
                          Title
                        </Typography>
                        <TextField
                          label="Title"
                          value={data.title}
                          name="title"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: 5 }}>
                      <Typography style={{ marginBottom: 3 }}>
                        Sub description
                      </Typography>
                      <TextField
                        fullWidth
                        label="sub description"
                        value={data.subDescription}
                        name="subDescription"
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ marginTop: 5 }}>
                      <Typography style={{ marginBottom: 3 }}>
                        Description
                      </Typography>
                      <TextField
                        multiline={true}
                        rows={5}
                        fullWidth
                        value={data.description}
                        name="description"
                        onChange={handleChange}
                      />
                    </div>
                    <div
                      style={{
                        marginTop: 32,
                        display: 'flex',
                        flexDirection: 'row',
                        marginRight: 2,
                        marginBottom: 16,
                        marginLeft: 26,
                      }}
                    >
                      <ColorButton2
                        variant="outlined"
                        style={{
                          color: 'black',
                          border: '1px solid purple',
                          marginLeft: 'auto',
                          marginRight: 11,
                        }}
                        onClick={onInsertCancell}
                      >
                        Cancel
                      </ColorButton2>
                      <ColorButton variant="contained" onClick={onAdd}>
                        Add
                      </ColorButton>
                    </div>
                  </Box>
                </Paper>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteBlog;
