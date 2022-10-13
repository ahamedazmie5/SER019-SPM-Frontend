import React, { Component } from "react";
import user from "./AdminHomeImages/user.png";
import hotel from "./AdminHomeImages/hotel.png";
import blog from "./AdminHomeImages/blog.png";
import packages from "./AdminHomeImages/tavel.jpg";
import adminmain from "./AdminHomeImages/adminmain.gif";

export default class AdminHome extends Component {
  render() {
    return (
      <div>
        <div>
          <table>
            <tr>
              <td>
                <img src={adminmain}></img>
              </td>
              <td>
                <tr>
                  <td>
                    <a href="">
                      <img
                        src={user}
                        style={{
                          width: 200,
                          marginTop: "40px",
                          marginLeft: "40px",
                          marginRight: "40px",
                        }}
                      ></img>
                    </a>
                    <br />
                    <center>
                      <a
                        className="btn btn-outline-success"
                        style={{ marginTop: "20px" }}
                        href="/AdminStudnethome"
                      >
                        &nbsp;User Management&nbsp;
                      </a>
                    </center>
                  </td>

                  <td>
                    <a href="/Adminsubhome">
                      <img
                        src={hotel}
                        style={{
                          width: 200,
                          marginTop: "40px",
                          marginLeft: "40px",
                          marginRight: "40px",
                        }}
                      ></img>
                    </a>
                    <br />
                    <center>
                      <a
                        className="btn btn-outline-success"
                        style={{ marginTop: "20px" }}
                        href="/Adminsubhome"
                      >
                        &nbsp;Hotel Management&nbsp;
                      </a>
                    </center>
                  </td>
                </tr>

                <tr>
                  <td>
                    <a href="/lecAdminPage">
                      <img
                        src={packages}
                        style={{
                          width: 200,
                          marginTop: "100px",
                          marginLeft: "40px",
                          marginRight: "40px",
                        }}
                      ></img>
                    </a>
                    <br />
                    <center>
                      <a
                        className="btn btn-outline-success"
                        style={{ marginTop: "20px" }}
                        href="/lecAdminPage"
                      >
                        &nbsp;Travel Packages Management&nbsp;
                      </a>
                    </center>
                  </td>
                  <td>
                    <a href="">
                      <img
                        src={blog}
                        style={{
                          width: 200,
                          marginTop: "100px",
                          marginLeft: "40px",
                          marginRight: "40px",
                        }}
                      ></img>
                    </a>
                    <br />
                    <center>
                      <a
                        className="btn btn-outline-success"
                        style={{ marginTop: "20px" }}
                        href="/Admincoursepage"
                      >
                        &nbsp;Blog Management&nbsp;
                      </a>
                    </center>
                  </td>
                </tr>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
