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
import axios from 'axios';
//import { storage } from './firebase';
import FileInput from '../utils/FileInput';

import background from '../assets/blogBackground.jpg';
import { useParams } from 'react-router-dom';

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

const EditBlog = () => {
  const id = useParams();
  const [title, setTitle] = useState('');
  const [subDescription, setsubDescription] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState();

  useEffect(() => {
    dataget();
  }, []);

  const dataget = async () => {
    const fetchData = await fetch(
      `http://localhost:8080/blogs/getBlogById/${id.id}`
    ); //fetch data

    const jsonData = await fetchData.json();
    console.log(jsonData);
    if (jsonData) {
      setData({
        img: jsonData.img,
        title: jsonData.title,
        subDescription: jsonData.subDescription,
        description: jsonData.description,
      });
      // setsubDescription(jsonData.subDescription);
      // setDescription(jsonData.description);
      // setImage(jsonData.img);
      // console.log(jsonData.title);
    }
  };
  console.log(title, subDescription, description);

  const handleTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleSubDescription = (e) => {
    setsubDescription(e.target.value);
    console.log(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
    console.log(e.target.value);
  };

  const onInsertCancell = () => {
    //   setData({
    //     img: '',
    //     title: '',
    //     subDescription: '',
    //     description: '',
    //   });
    setTitle('');
    setsubDescription('');
    setDescription('');
  };

  const [data, setData] = useState({
    img: '',
    title: '',
    subDescription: '',
    description: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(title, subDescription, description);
  // }, [title, subDescription, description]);

  const onInsertOk = async (e) => {
    try {
      const insert = await fetch(
        `http://localhost:8080/blogs/updateBlogById/${id.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const newData = await insert.json();
      console.log(insert, 'data');
      if (newData.title !== null) {
        alert('Inserted sucessfully.');
      } else {
        alert('Some thing went wrong.');
      }
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

  return (
    <>
      <a href="/viewblogs" style={{ marginTop: 10 }}>
        Read Blogs
      </a>
      <Typography
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 14,
          marginTop: 14,
          fontSize: 53,
          color: '#001a66',
        }}
      >
        Edit your blog here.
      </Typography>
      <img
        src={background}
        alt="front image"
        style={{ width: '100%', height: 500, borderRadius: 5 }}
      />
      <hr color="#001a66" />
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <div>
          <FormControl
            sx={{
              width: '100%',
              border: '2px solid #772AD8',
              borderRadius: 2,
            }}
          >
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
                  <Typography style={{ marginBottom: 3 }}>Image</Typography>
                  <FileInput
                    name="img"
                    value={data.img}
                    label="Choose image"
                    handleInputState={handleInputState}
                    type="image"
                  ></FileInput>
                </div>
                <div style={{ marginTop: 5, marginLeft: 10 }}>
                  <Typography style={{ marginBottom: 3 }}>Title</Typography>
                  <TextField
                    label="Title"
                    value={data.title}
                    name="title"
                    onChange={handleChange}
                  >
                    {title}
                  </TextField>
                </div>
              </div>
              <div style={{ marginTop: 5 }}>
                <Typography style={{ marginBottom: 3 }}>
                  Sub description
                </Typography>
                <TextField
                  fullWidth
                  // label="sub description"
                  value={data.subDescription}
                  name="subDescription"
                  onChange={handleChange}
                >
                  {subDescription}
                </TextField>
              </div>
              <div style={{ marginTop: 5 }}>
                <Typography style={{ marginBottom: 3 }}>Description</Typography>
                <TextField
                  multiline={true}
                  rows={5}
                  fullWidth
                  value={data.description}
                  name="description"
                  onChange={handleChange}
                >
                  {description}
                </TextField>
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
                <ColorButton
                  variant="contained"
                  onClick={(e) => {
                    onInsertOk(e);
                  }}
                >
                  Edit
                </ColorButton>
              </div>
            </Box>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
