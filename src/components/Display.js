import { useState, useEffect } from "react";
import axios from "axios";
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
} from "reactstrap";

const Display = () => {
  const [MarkingSchema, SetMarkingSchema] = useState([]);

  const getData = async () => {
    console.log("get data executed");
    await axios
      .get("http://localhost:8080/travelgo/getAllTourPackages")
      .then((data) => {
        console.log("Data ", data);
        SetMarkingSchema(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginTop: "30px" }}></div>
      <br />

      <img
        src={HomeBanner2}
        alt="HomeBanner2"
        style={{ width: "100%", height: "100%", borderRadius: 5 }}
      />

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
              <Col style={{ padding: "10px", height: "auto" }} key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: "black", fontSize: "25px" }}>
                      <center>
                        <b>{tourpackage.topic}</b>
                      </center>
                    </CardTitle>
                    <center>
                      <CardImg
                        //width="50%"
                        src={tourpackage?.img}
                        alt="computing Img"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </center>
                  </CardHeader>
                  <CardBody>
                    {/* <CardText> description -: {tourpackage.title}</CardText> */}
                    <CardText style={{ color: "red" }}>
                      <b>Price :- &nbsp;LKR {tourpackage.title}</b>
                    </CardText>

                    <Button
                      style={{ marginRight: "20px", width: "100%" }}
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
    </div>
    
  );
};

export default Display;
