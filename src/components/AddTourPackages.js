import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import computing from "../assets/computing.jpg"
import FileInput from "../utils/FileInput";

const AddTourPackages = () => {
    const [data, setData] = useState({
        topic: "",
        description: "",
        title: "",
        img: "",
      });
    
      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
    
      const handleInputState = (name, value) => {
        setData((prev) => ({ ...prev, [name]: value }));
      };
  const changeOnClick = (f) => {

    axios.post("http://localhost:8080/travelgo/createTourPackages", data);

    Swal.fire("Congrats", " Tour Pacakage added successfully", "success");
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <br />

      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <br></br>

          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img src={computing} style={{width:"90%" , height:"90%"}}/>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <form onSubmit={changeOnClick} encType="">
                  <h1 style={{ color: "red" }}>Add Tour Packages </h1>
                  <br></br>

                  <div class="form-floating mb-3">
                    <label for="floatingInput">Topic </label>
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      onChange={handleChange}
                      required
                      placeholder="Topic"
                      name="topic"
                      value={data.topic}
                    />

                    <div class="form-floating mb-3">
                      <label for="floatingInput">Description </label>

                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea3"
                        onChange={handleChange}
                        required
                        placeholder="Description"
                        rows="6"
                        name="description"
                        value={data.description}
                      ></textarea>
                    </div>
                    <div class="form-floating mb-3">
                      <label for="floatingPassword">Title</label>
                      <input
                        class="form-control"
                        id="floatingPassword"
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={data.title}
                      />
                    </div>
                   
                        <div class="form-floating mb-3">
                      <label for="floatingPassword">Image</label>
                      <FileInput
                        name="img"
                        label="Choose image"
                        handleInputState={handleInputState}
                        type="image"
                        value={data.img}
                        />
                    </div>
                  </div>

                  <div className="row mb-5 px-4">
                    <a>
                      <button type="submit" className="btn btn-info">
                        Add Tour Pacakge
                      </button>
                    </a>
                  </div>
                </form>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTourPackages;
