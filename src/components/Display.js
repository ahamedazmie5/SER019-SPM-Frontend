
import { useState, useEffect } from "react";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import HomeBanner2 from "../assets/HomeBanner2.png";

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

const Display = () => {
  const [MarkingSchema, SetMarkingSchema] = useState([]);
  const [blogsArray, setBlogsArray] = useState([]);

  const getData = async () => {
    console.log('get data executed');
    await axios
      .get('http://localhost:8080/travelgo/getAllTourPackages')
      .then((data) => {
        console.log('Data ', data);
        SetMarkingSchema(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
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

  useEffect(() => {
    getData();
    getAllBlogs();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginTop: '30px' }}></div>
      <br />


      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col" style={{ border: "none" }}>
              <h1 style={{ fontSize: "30px", marginTop: "-30%" }}>
                About Us
              </h1>
            </th>
            <th scope="col" style={{ border: "none" }}>
              <img
                src={HomeBanner2}
                alt="HomeBanner2"
                style={{ width: "90%", height: "100%", borderRadius: 5 }}
              />
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody></MDBTableBody>
      </MDBTable>

      <center>
        <h1>
          <b>Tour Packages</b>
        </h1>
        <br></br>
      </center>
      <Container>
        <Row xs={4}>
          {MarkingSchema?.map((tourpackage, index) => {
            return (
              <Col style={{ padding: '10px', height: 'auto' }} key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: 'black', fontSize: '25px' }}>
                      <center>
                        <b>{tourpackage.topic}</b>
                      </center>
                    </CardTitle>
                    <center>
                      <CardImg
                        //width="50%"
                        src={tourpackage?.img}
                        alt="computing Img"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </center>
                  </CardHeader>
                  <CardBody>
                    {/* <CardText> description -: {tourpackage.title}</CardText> */}
                    <CardText style={{ color: 'red' }}>
                      <b>Price :- &nbsp;LKR {tourpackage.title}</b>
                    </CardText>

                    <Button
                      style={{ marginRight: '20px', width: '100%' }}
                      className="btn btn-success"
                      href={`/ViewTourPackage/${tourpackage._id}`}
                    >
                      View Pacakage
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <hr />
      <center>
        <h1>
          <b>Places to visit</b>
        </h1>
        <br></br>
      </center>
      <Container>
        <Row xs={4}>
          {blogsArray?.map((blogsArray, index) => {
            return (
              <Col style={{ padding: '10px', height: 'auto' }} key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: 'black', fontSize: '25px' }}>
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
                    <CardText style={{ color: 'red' }}>
                      <b>Price :- &nbsp;LKR {blogsArray.title}</b>
                    </CardText>

                    <Button
                      style={{ marginRight: '20px', width: '100%' }}
                      className="btn btn-success"
                      // href={`/Vi/${blogsArray._id}`}
                    >
                      View Pacakage
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Display;
