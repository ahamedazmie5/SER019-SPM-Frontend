import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    CardTitle,
} from "reactstrap";


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

   



    return (
        <div >
            <center>
            <div class='card' style={{ marginTop: "70px", marginBottom: "70px", width: '80%',  backgroundColor: '#DCDCDC' }}>               
                
                <CardTitle style={{ color: "black", fontSize: "40px" }}><h1><b>Tour Details</b></h1></CardTitle>
               

                <div className="container" style={{ width: '50%', }}>
                   <h2>{data.topic}</h2>
                    <br/><br/>
                    <img src={data.img} style={{width:"80%" , height:"80%"}}/>
                    <br/><br/>                    
                    <label>Description :- {data.description}</label>
                    <br/><br/>
                    <label> Price :- &nbsp;LKR {data.title}</label>
                    <br/><br/>
                </div>
                
            </div>
            </center>
        </div>

    );

};

export default ViewTourPackage;
