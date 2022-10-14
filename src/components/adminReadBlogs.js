import React, { useEffect, useState } from 'react';
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
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { async } from '@firebase/util';

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

const AdminReadBlogs = () => {
  const [blogsArray, setBlogsArray] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const navigate = useNavigate();

  //naviagte to edit blog page
  const editBlog = async (e, id) => {
    try {
      navigate(`/EditBlog/${id}`);
      //}
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteBlog = async (e, id) => {
    try {
      console.log('delete blog', id);
      const deleteBlog = await fetch(
        `http://localhost:8080/blogs/removeBlogById/${id}`,
        {
          method: 'DELETE',
        }
      );
      const deleteDetails = await deleteBlog.json();
      if (deleteDetails) {
        alert('Blog deleted sucessfully.');
        location.reload();
      } else {
        alert('Something went wrong');
      }

      console.log(deleteBlog);
    } catch (error) {
      console.error(error.message);
    }
  };

  //navigate to add blog page
  const addBlog = async (e, id) => {
    try {
      navigate('/insertBlog');
      //}
    } catch (error) {
      console.error(error.message);
    }
  };

  //navigate to add blog page
  const generateReport = async (e) => {
    try {
      navigate('/blogReport');
      //}
    } catch (error) {
      console.error(error.message);
    }
  };

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
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            marginRight: 2,
            marginBottom: 16,
            marginLeft: 'auto',
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
            onClick={(e) => {
              generateReport(e);
            }}
          >
            Generate Report
          </ColorButton2>
          <ColorButton2
            style={{ color: 'black', border: '1px solid purple' }}
            variant="outlined"
            onClick={(e) => {
              addBlog(e);
            }}
          >
            Add Blog
          </ColorButton2>
        </div>
      </div>

      <div>
        <div>
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
            Travel around the world{' '}
          </Typography>
        </div>
        <div>
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
            with knowledge
          </Typography>
        </div>
        <div>
          <Typography style={{ color: '#FF9500', fontWeight: 'bold' }}>
            READ BLOGS ABOUT THE PLACES YOU TRAVEL...
          </Typography>
        </div>
      </div>
      <br />
      <br />

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 10 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* {filterSearch.map((cards, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="Nine arch"
                    height="140"
                    //image={image}
                    image={cards.image}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {cards.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cards.subDescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={(e) => {
                        readMore(e, cards.id);
                      }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))} */}
          {blogsArray.map((cards, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <div style={{ width: 300, maxHeight: 100 }}>
                <img
                  src={cards.image}
                  alt="Nine arch"
                  style={{ height: '375px', width: '300px' }}
                />
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {cards.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cards.subDescription}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ display: 'flex' }}>
                    <IconButton
                      style={{ marginLeft: 'auto' }}
                      onClick={(e) => {
                        editBlog(e, cards.id);
                      }}
                    >
                      <EditIcon style={{ marginLeft: 'auto' }} />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        deleteBlog(e, cards.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default AdminReadBlogs;
