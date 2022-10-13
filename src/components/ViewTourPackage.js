import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Table, CardTitle } from "reactstrap";
import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";

const ViewTourPackage = () => {
  const navigate = useNavigate();
  const id = useParams();

  const [data, setData] = useState({
    topic: "",
    description: "",
    title: "",
    img: "",
  });

  const getById = async () => {
    try {
      console.log(id.id);
      let data = await axios.get(
        `http://localhost:8080/travelgo/getTourPackages/${id.id}`
      );
      console.log("res", data);
      setData({
        topic: data.data.topic,
        description: data.data.description,
        title: data.data.title,
        img: data.data.img,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getById();
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
    doc.save("package.pdf");
  }

  return (
   <center> <div>
      <div
        class="card"
        style={{
          marginTop: "70px",
          marginBottom: "70px",
          width: "80%",
          backgroundColor: "#FFFFFF",
          border: "none",
        }}
      >
        
        <CardTitle style={{ color: "black", fontSize: "40px" }}>
          <h1>
          <center> <b>Tour Details</b></center>
          </h1>
        </CardTitle>
        <Table bordered={true}>
          <thead>
            <tr>
              <th> </th>
            </tr>
          </thead>
          <tbody id="cusdet">
            <tr>
              <td>
                {" "}
                <center> <h2>{data.topic}</h2></center>
              </td>
            </tr>
            <tr>
              <td>
              <center><img src={data.img} style={{ width: "80%", height: "80%" }} /></center>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <center><label>Description :- {data.description}</label></center>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <center> <label> Price :- &nbsp;LKR {data.title}</label></center>
              </td>
            </tr>
          </tbody>
          <center> <button className="btn btn-danger btn-sm" onClick={pdfGenerat}>
            Download Tour Package
          </button></center>
        </Table>
      </div>
    </div></center> 
  );
};

export default ViewTourPackage;
