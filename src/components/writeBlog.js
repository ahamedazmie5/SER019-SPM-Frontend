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

import background from '../assets/blogBackground.jpg';

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

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [subDescription, setsubDescription] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const onInsertCancell = () => {
    setsubDescription('');
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    console.log(title, subDescription, description);
  }, [title, subDescription, description]);

  const onInsertOk = async () => {
    try {
      const body = { title, subDescription, description };
      console.log(body);

      const insert = await fetch('http://localhost:8080/blogs/createBlogs', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // const data = await insert.json();
      console.log(insert, 'data');
    } catch (error) {
      console.error(error.message);
    }

    setsubDescription('');
    setTitle('');
    setDescription('');
  };

  const imgUpload = (e) => {
    if (e.target.file[0]) {
      setImage(e.target.file[0]);
    }
  };
  console.log('image', image);

  return (
    <>
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
        Write your blog here.
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
                <div style={{ marginTop: 30 }}>
                  <TextField style={{}} type="file" onChange={imgUpload}>
                    Image
                  </TextField>
                </div>
                <div style={{ marginTop: 5 }}>
                  <Typography style={{ marginBottom: 3 }}>Title</Typography>
                  <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                  value={subDescription}
                  onChange={(e) => setsubDescription(e.target.value)}
                />
              </div>
              <div style={{ marginTop: 5 }}>
                <Typography style={{ marginBottom: 3 }}>Description</Typography>
                <TextField
                  multiline={true}
                  rows={5}
                  fullWidth
                  label="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                <ColorButton variant="contained" onClick={onInsertOk}>
                  Add
                </ColorButton>
              </div>
            </Box>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default WriteBlog;
