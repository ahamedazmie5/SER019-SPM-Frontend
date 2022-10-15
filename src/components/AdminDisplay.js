import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";

import Swal from "sweetalert2";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  CardImg,
  Container,
  CardText,
} from "reactstrap";

const AdminDisplay = () => {
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

  function pdfGenerat() {
    var doc = new jsPDF("landscape", "px", "a4", "false");

    doc.autoTable({
      body: [
        [
          {
            content: "  ",
            colSpan: 2,
            rowSpan: 2,
            styles: { halign: "center" },
          },
        ],
      ],
    });
    autoTable(doc, { html: "#cusdet" });
    doc.save("pakee.pdf");
  }

  const removetourpackage = (id) => {
    axios
      .delete(`http://localhost:8080/travelgo/RemoveTourPackages/${id}`)
      .then((res) => {
        Swal.fire("Congrats", " remove successfully ", "success");
      });
    SetMarkingSchema(MarkingSchema.filter((elem) => elem._id !== id));
  };


  const filterData = (packageSearch, Searchkey) => {
    console.log(packageSearch, Searchkey);
    const result = packageSearch.filter(
        (user) =>
            user.topic.toString().toLowerCase().includes(Searchkey),
    );
    SetMarkingSchema(result);
}

const handleSearchArea = async (e) => {
    const Searchkey = e.currentTarget.value;
    await axios
    .get("http://localhost:8080/travelgo/getAllTourPackages").then((data) => {
        console.log(data?.data);
        filterData(data?.data, Searchkey);        
    });
}

  return (
    <div style={{ textAlign: "center" }}>
      
      <br/><br/>

      <center>
        <h1 style={{fontFamily:"serif"}}>Tour Packages</h1>
        <br/><br/>
        
      </center>
      
      <Container>
      <div style={{ float: "left" }}>
          <input
              className="form-control"
              style={{ width: "400px" }}
              type="search"
              placeholder="Search Tour Packages"
              name="searchQuery"
              onChange={(e) => handleSearchArea(e)}
          >
          </input>
      </div>
      <Link to={`/AddTourPackages`} style={{float:"right"}}>
        <button className="btn btn-success">Add Tour Package</button>                            
      </Link>
      <br/><br/><br/>
        <Row xs={4}>
          {MarkingSchema?.map((tourpackage) => {
            return (
              <table>
                <tbody>
                  <Col style={{ padding: "10px", height: "auto" }}>
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
                      <CardBody id="cusdet">
                        {/* <CardText> description -: {tourpackage.title}</CardText> */}
                        <CardText>{tourpackage.title}</CardText>

                        <div>
                          <Link to={`/UpdateTourPackages/${tourpackage._id}`}>
                            <button className="btn btn-success">Update</button>                            
                          </Link>
                          &nbsp;&nbsp;&nbsp;
                          <button
                            name="submit"
                            class="btn btn-danger"
                            type="submit"
                            value="Delete"
                            onClick={() => removetourpackage(tourpackage._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </tbody>
              </table>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AdminDisplay;
