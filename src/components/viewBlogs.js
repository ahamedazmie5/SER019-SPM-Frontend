import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ViewBlogs = () => {
  const [title, setTitle] = useState();
  const [subDescription, setsubDescription] = useState("");
  const [description, setDescription] = useState("");
  const [blogsArray, setBlogsArray] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [filter, setFilter] = useState("");
  const [id, setId] = useState();

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
    console.log("view blogs");
    try {
      const fetchData = await fetch("http://localhost:8080/blogs/getAllBlogs"); //fetch data
      console.log(fetchData);

      const jsonData = await fetchData.json();
      console.log(jsonData);
      if (jsonData) {
        let blogsArray = [];
        for (let i = 0; i < jsonData.length; i++) {
          let temp = {
            id: jsonData[i]._id,
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

  const serchCgange = (e) => {
    setFilter(e.target.value);
  };

  //fiilter
  let filterSearch = blogsArray.filter((items) => {
    return Object.keys(items).some((key) =>
      items[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {" "}
          <div>
            <input
              placeholder="Search here"
              value={filter}
              onChange={serchCgange.bind(this)}
            ></input>
          </div>
        </div>

        <div>
          <div>
            <Typography
              style={{
                textAlign: "center",
                fontFamily: "Georgia, Serif",
                fontWeight: "bold",
                marginBottom: 14,
                marginTop: 14,
                fontSize: 53,
                color: "#001a66",
              }}
            >
              Travel around the world{" "}
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                textAlign: "center",
                fontFamily: "Georgia, Serif",
                fontWeight: "bold",
                marginBottom: 14,
                marginTop: 14,
                fontSize: 53,
                color: "#001a66",
              }}
            >
              with knowledge
            </Typography>
          </div>
          <div>
            <Typography style={{ color: "#FF9500", fontWeight: "bold" }}>
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

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {filterSearch.map((cards, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="Nine arch"
                    height="140"
                    image="https://images.toseethe.world/wp-content/uploads/2020/03/15182142/9-Arch-Bridge-sitting-on-the-edge.jpeg"
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
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default ViewBlogs;
