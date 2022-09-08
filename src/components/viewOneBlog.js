import { IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import arch1 from '../assets/arch.jpeg';
import background1 from '../assets/blogBackground.jpg';

const ViewOneBlog = () => {
  const id = useParams();
  const [title, setTitle] = useState('');
  const [subDescription, setsubDescription] = useState('');
  const [description, setDescription] = useState('');

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
      setTitle(jsonData.title);
      setsubDescription(jsonData.subDescription);
      setDescription(jsonData.description);
    }
  };
  console.log(title, subDescription, description);

  return (
    <>
      <div>
        <a href="/">Back to previous page</a>
        <Typography
          style={{
            textAlign: 'center',
            fontFamily: 'Georgia, Serif',
            fontWeight: 'bold',
            marginBottom: 14,
            marginTop: 14,
            fontSize: 53,
            color: '#001a66',
          }}
        >
          Best Places to Vist.......
        </Typography>
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <div>
            <div>
              <Typography
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: 14,
                  marginTop: 14,
                  fontSize: 47,
                  color: '#645CAA',
                }}
              >
                {title}
              </Typography>
            </div>
            <div
              style={{
                textAlign: 'left',
                fontWeight: 'italic',
                marginBottom: 14,
                marginTop: 14,
                marginLeft: 10,
                fontSize: 37,
                color: 'black',
              }}
            >
              <i>{subDescription}</i>
            </div>
            <div
              style={{
                textAlign: 'left',
                fontWeight: 'italic',
                marginBottom: 14,
                marginTop: 14,
                marginLeft: 10,
                fontSize: 20,
                color: 'black',
              }}
            >
              <p>{description}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <img
              style={{ width: '100%', height: 600 }}
              src={arch1}
              alt="blog image"
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ViewOneBlog;
