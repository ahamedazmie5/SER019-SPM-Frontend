import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    CardTitle,
} from "reactstrap";


import autoTable from 'jspdf-autotable'
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
            let data = await axios.get(`http://localhost:8080/travelgo/getTourPackages/${id.id}`);
            console.log("res",data);
            setData({
                topic: data.data.topic,
                description: data.data.description,
                title: data.data.title,
                img: data.data.img,
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getById();
    }, [])


    function pdfGenerat(){
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        
        doc.autoTable({
               
                body: [
                    [{ content: '  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
                  ],
                })
            autoTable(doc, { html: '#cusdet' })
           doc.save('course.pdf')
      
              }
   



    return (
        <div >
        
            <center>
             
            <div    class='card' style={{ marginTop: "70px", marginBottom: "70px", width: '80%',  backgroundColor: '#DCDCDC' }}>               
            
             
                
                <CardTitle style={{ color: "black", fontSize: "40px" }}><h1><b>Tour Details</b></h1></CardTitle>
               

                <div  className="container" style={{ width: '50%', }}   >
                   <body  id="cusdet">
                   <h2   >{data.topic}</h2>
                    <br/><br/>
                    <img src={data.img} style={{width:"80%" , height:"80%"}}/>
                    <br/><br/>                    
                    <label>Description :- {data.description}</label>
                    <br/><br/>
                    <label> Price :- &nbsp;LKR {data.title}</label>
                    <br/><br/>
                    </body>
                    <br/><br/> <br/><br/>
                    <button className="btn btn-danger btn-sm"  onClick={pdfGenerat}>Generate PDF</button>

                </div>
              
                
              
            </div>
            
            </center>
     
        </div>
        
    );

};

export default ViewTourPackage;
