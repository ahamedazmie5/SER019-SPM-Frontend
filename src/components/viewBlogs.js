import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
//import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Row,
  Col,
  CardImg,
  Container,
  CardText,
} from 'reactstrap';

import abc from '../assets/abc.webp';
import background from '../assets/blogBackground.jpg';
import back from '../assets/back.jpg';
import ViewOneBlog from './viewOneBlog';
//import data from './data';

const ViewBlogs = () => {
  const [title, setTitle] = useState();
  const [subDescription, setsubDescription] = useState('');
  const [description, setDescription] = useState('');
  const [blogsArray, setBlogsArray] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [id, setId] = useState();
  const [image, setImage] = useState();

  const styles = (theme) => ({
    Card: {
      width: 300,
      margin: 'auto',
    },
    Media: {
      height: 550,
      width: '100%',
    },
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const navigate = useNavigate();

  //get one blog
  const readMore = async (e, id) => {
    try {
      navigate(`/OneBlog/${id}`);
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

  // const serchCgange = (e) => {
  //   setFilter(e.target.value);
  // };
  // console.log(filter);

  //fiilter
  // let filterSearch = data.cardData.filter((items) => {
  //   return Object.keys(items).some((key) =>
  //     items[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(filter.toString().toLowerCase())
  //   );
  // });

  const myStyle = {
    backgroundImage: `url(${abc})`,
    height: '100%',
    marginTop: '-70px',
    // fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <div style={myStyle}>
        <a href="/insertBlog" style={{ marginTop: 10 }}>
          Write Blogs
        </a>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: 20,
            }}
          >
            {' '}
            <div>
              <input
                placeholder="Search here"
                type={'text'}
                //value={filter}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
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
            <div style={{ marginLeft: 40 }}>
              <Typography style={{ color: '#FF9500', fontWeight: 'bold' }}>
                READ BLOGS ABOUT THE PLACES YOU TRAVEL...
              </Typography>
            </div>
          </div>
          <br />
          <br />

          {/* <div>
          <img
            src={arch1}
            alt="background"
            style={{ width: '100%', height: 300, borderRadius: 5 }}
          />
        </div> */}
          <br />

          {/* <Box sx={{ flexGrow: 0 }}>
          <Grid
            container
            columnSpacing={{ xs: 0 }}
            rowSpacing={1}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {blogsArray
              .filter((cards) => {
                if (searchTerm === '') {
                  return cards;
                } else if (
                  cards.title
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return cards;
                }
              })
              .map((cards, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <div style={{ width: 300, maxHeight: 100 }}>
                    <img
                      src={cards.image}
                      alt="Nine arch"
                      style={{ height: '375px', width: '300px' }}
                    />
                    <Card sx={{ maxWidth: 345 }}>
                      {' '}
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
                  </div>
                </Grid>
              ))}
          </Grid>
        </Box> */}

          <Container>
            <Row xs={4}>
              {blogsArray
                ?.filter((blogsArray) => {
                  if (searchTerm === '') {
                    return blogsArray;
                  } else if (
                    blogsArray.title
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return blogsArray;
                  }
                })
                .map((blogsArray, index) => {
                  return (
                    <Col
                      style={{ padding: '10px', height: 'auto' }}
                      key={index}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle
                            style={{ color: 'black', fontSize: '25px' }}
                          >
                            <center>
                              <b>{blogsArray.title}</b>
                            </center>
                          </CardTitle>
                          <center>
                            <CardImg
                              //width="50%"
                              src={blogsArray?.image}
                              alt="computing Img"
                              style={{ width: '100%', height: '100%' }}
                            />
                          </center>
                        </CardHeader>
                        <CardBody>
                          {/* <CardText> description -: {blogsArray.title}</CardText> */}
                          <CardText style={{ color: 'black' }}>
                            <i>{blogsArray.subDescription}</i>
                          </CardText>

                          <Button
                            style={{ marginRight: '20px', width: '100%' }}
                            className="btn btn-success"
                            onClick={(e) => {
                              readMore(e, blogsArray.id);
                            }}
                          >
                            Read more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ViewBlogs;
